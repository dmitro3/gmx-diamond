// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import { ISolidStateERC20 } from "@solidstate/contracts/token/ERC20/ISolidStateERC20.sol";
import  "@solidstate/contracts/security/reentrancy_guard/ReentrancyGuard.sol";
import { Math } from "@openzeppelin/contracts/utils/math/Math.sol";
import { LibLaunchpad } from "../libraries/LibLaunchpad.sol";
import { Modifiers } from "../libraries/Modifiers.sol";
import { LibStake } from "../libraries/LibStake.sol";
import "../libraries/Errors.sol";

contract Launchpad is Modifiers, ReentrancyGuard{
    using Math for uint256;

    event HANDLE_DEPOSIT(address indexed,uint256,uint256);
    event HANDLE_REGISTER(address indexed,uint256);

    function deposit(
        uint256 _id,
        uint256 _amount
    )
        external
        NotContract(msg.sender)
        nonReentrant
    {
        LibLaunchpad.Layout storage ls = LibLaunchpad.layout();
        uint256 id = _id;
        uint256 blockTime = block.timestamp;
        address user = msg.sender;

        if(!ls.launchpad[id].isExist){revert Invalid_Action();}
        if(ls.launchpad[id].isUpcoming){revert Invalid_Action();}
        if(ls.launchpad[id].isNFT && ls.user[user][id].userDeposited){revert User_Not_Expired();}

        uint256 amount = 0;
        if(!ls.launchpad[id].isNFT){
            amount = _amount;
        }else{
            amount = ls.launchpad[id].tokenPrice;
        }

        if(ls.launchpad[id].tokensToBeSold == ls.launchpad[id].soldTokens){revert Sale_End();}
        if(!ls.launchpad[id].isNFT && amount < ls.launchpad[id].minDepositAmount){revert Invalid_Price();}

        uint256 tokenAmount = !ls.launchpad[id].isNFT ? calculateUnitQuantityTOKEN(id, amount) : 1;
        uint256 remainingAmount = ls.launchpad[id].tokensToBeSold - ls.launchpad[id].soldTokens;
        if(tokenAmount > remainingAmount){revert Overflow_0x11();}

        if(!ls.user[user][id].userDeposited){
            ls.user[user][id].userDeposited = true;
            ls.launchpad[id].users.push(user);

            unchecked {
                ls.launchpad[id].userCount += 1;
            }

        }
        if(ls.user[user][id].userRegistered && 
            blockTime > ls.launchpad[id].privateDepositStart && 
            blockTime < ls.launchpad[id].privateDepositEnd)
        { 
            _deposit(true,ls.launchpad[id].isNFT,id, amount, tokenAmount, user);

        }else if(blockTime > ls.launchpad[id].publicDepositStart && 
            blockTime < ls.launchpad[id].publicDepositEnd)
        {
            if(amount > ls.launchpad[id].maxDepositAmount){revert Overflow_0x11();}
            _deposit(false,ls.launchpad[id].isNFT,id, amount, tokenAmount, user);

        }else{
            revert Wait_For_Deposit_Times();
        }
    }

    function register(
        uint256 _id
    )
        external 
        NotContract(msg.sender)
        nonReentrant
    {
        uint256 blockTime = block.timestamp;
        address user = msg.sender;
        LibLaunchpad.Layout storage ls = LibLaunchpad.layout();
        if(!ls.launchpad[_id].isExist){revert Invalid_Action();}
        if(ls.launchpad[_id].isUpcoming){revert Invalid_Action();}
        uint256 stakeScore = LibStake.layout().user[user].userTotalScore;
        if(stakeScore == 0){revert User_Not_Stake();}

        if(ls.user[user][_id].userRegistered){revert User_Already_Registered();}
        if(blockTime < ls.launchpad[_id].registerStart){revert Not_Started_Registration();}
        if(blockTime > ls.launchpad[_id].registerEnd){revert End_Registration();}

        unchecked {
            ls.launchpad[_id].poolScore += stakeScore;
        }

        ls.user[user][_id].userRegistered = true;
        ls.user[user][_id].userScore = stakeScore;

        emit HANDLE_REGISTER(user,block.timestamp);
    }

    function _deposit(
        bool _isPrivate,
        bool _isNFT,
        uint256 _id,
        uint256 _amount,
        uint256 _unitQuantity,
        address _user
    )
        private
    {
        LibLaunchpad.Layout storage ls = LibLaunchpad.layout();
        ISolidStateERC20 token = ISolidStateERC20(ls.launchpad[_id].usedTokenAddress);
        uint256 price = 0;

        if(_isPrivate && !_isNFT){
            (uint256 allocation) = calculateAllocation(_id, _user);
            if(allocation == 0){revert Invalid_Action();}
            if(_amount > allocation){revert Invalid_Price();}
        }
        if(!_isNFT){
            price = _amount;

            unchecked {
                ls.user[_user][_id].userDepositedValue += price;
                ls.user[_user][_id].userTokensToReceive += _unitQuantity;
                ls.launchpad[_id].collectedValue += price;
                ls.launchpad[_id].soldTokens += _unitQuantity;
            }

        }else{
            price = ls.launchpad[_id].tokenPrice;

            unchecked {
                ls.user[_user][_id].userDepositedValue += price;
                ls.launchpad[_id].collectedValue += price;
                ls.launchpad[_id].soldTokens += 1;
            }

            ls.user[_user][_id].userTokensToReceive = 1;
        }
        
        if(token.balanceOf(_user) < price){revert Insufficient_Balance();}
        if(token.allowance(_user, address(this)) < price){revert Insufficient_Allowance();}
        token.transferFrom(_user, address(this), price);

        emit HANDLE_DEPOSIT(_user,price,block.timestamp);
    }

    function calculateAllocation(
        uint256 _id,
        address _user
    )
        public
        view
        returns(uint256 allocation)
    {
        LibLaunchpad.Layout storage ls = LibLaunchpad.layout();
        uint256 blockTime = block.timestamp;
        if(
            blockTime > ls.launchpad[_id].privateDepositStart && 
            blockTime < ls.launchpad[_id].privateDepositEnd &&
            ls.user[_user][_id].userScore > 0)
        {
            (uint256 calculationAmount) = _calculateAllocation(_id, _user);
            allocation = calculationAmount - ls.user[_user][_id].userDepositedValue;
        }
    }

    function _calculateAllocation(
        uint256 _id,
        address _user
    )
        private
        view
        returns(uint256 allocation)
    {
        LibLaunchpad.Layout storage ls = LibLaunchpad.layout();
        ISolidStateERC20 token = ISolidStateERC20(ls.launchpad[_id].tokenAddress);
        uint256 decimals = (10 ** token.decimals());

        uint256 weight = ls.user[_user][_id].userScore.mulDiv(1 ether,ls.launchpad[_id].poolScore);
        uint256 allocationTokenAmount = weight.mulDiv(ls.launchpad[_id].tokensToBeSold,decimals);
        allocation = allocationTokenAmount.mulDiv(ls.launchpad[_id].tokenPrice,1 ether);
        // allocation => usdt - wrapper amount
    }

    function calculateUnitQuantityTOKEN(
        uint256 _id,
        uint256 _amount
    )
        public
        view
        returns(uint256 unitQuantity)
    {
        LibLaunchpad.Layout storage ls = LibLaunchpad.layout();
        ISolidStateERC20 token = ISolidStateERC20(ls.launchpad[_id].tokenAddress);

        uint256 quantity = _amount / ls.launchpad[_id].tokenPrice;
        uint256 decimals = (10 ** token.decimals());
        unitQuantity = quantity * decimals;
    }

}