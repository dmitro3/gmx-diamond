// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import { ISolidStateERC1155 } from "@solidstate/contracts/token/ERC1155/ISolidStateERC1155.sol";
import { ISolidStateERC721 } from "@solidstate/contracts/token/ERC721/ISolidStateERC721.sol";
import { ISolidStateERC20 } from "@solidstate/contracts/token/ERC20/ISolidStateERC20.sol";
import  "@solidstate/contracts/security/reentrancy_guard/ReentrancyGuard.sol";
import { Math } from "@openzeppelin/contracts/utils/math/Math.sol";
import '@openzeppelin/contracts/access/Ownable.sol';
import { TVesting,TVestingUser } from "../libraries/Structs.sol";
import { LibVesting } from "../libraries/LibVesting.sol";
import { Modifiers } from "../libraries/Modifiers.sol";
import { ItemType } from "../libraries/Enums.sol";
import "../libraries/Errors.sol";

abstract contract Vesting is Ownable, ReentrancyGuard, Modifiers {
    using Math for uint256;

    event HANDLE_INIT_VESTING(address indexed,uint256 indexed);
    event HANDLE_CLAIM(address indexed,uint256 indexed);

     /**
     * will be added =>
     * refund
     * withdraw
     */
    event HANDLE_REFUND(address indexed,uint256 indexed);
    event HANDLE_WITHDRAWN_AMOUNT(address indexed,uint256 indexed);
    event HANDLE_SET_REFUND(address indexed,uint256 indexed);

    function initVesting(
        TVesting memory _params
    )
        external
        onlyOwner
    {
        LibVesting.layout().vesting = _params;
        emit HANDLE_INIT_VESTING(_params.tokenAddress,block.timestamp);
    }

    function initUsers(
        TVestingUser[] memory _users
    )
        external
        onlyOwner
    {
        LibVesting.Layout storage vs = LibVesting.layout();

        TVestingUser[] memory users = _users;

        for(uint256 i = 0; i < users.length;){
            vs.vuser[users[i].userAddress] = users[i];
            vs.vesting.userList.push(users[i].userAddress);

            unchecked {
                i++;
            }
        }
    }

    function claim(
    )
        external 
        NotContract(msg.sender)
        nonReentrant
    {
        LibVesting.Layout storage vs = LibVesting.layout();
        address user = msg.sender;
        if(!vs.vuser[user].isExist){revert Invalid_Action();}
        if(block.timestamp < vs.vesting.claimStartTime){revert Claim_Not_Started();}
        if(vs.vuser[user].userRefunded){revert User_Refunded();}
        
        uint256 claimAmount = calculateClaim(user);
        if(claimAmount == 0){revert User_Not_Expired();}

        unchecked {
            vs.vuser[user].userWithdrawnAmount += claimAmount;
            vs.vesting.claimedTokens += claimAmount;
        }

        _transferAssets(claimAmount, vs.vuser[user].userAllowedTokenID, user,vs.vesting.tokenAddress, vs.vesting.tokenType);
    }

    function calculateClaim(
        address _user
    )
        public
        view
        returns(uint256)
    {
        uint256 claimableTokens = 0;
        uint256 blockTime = block.timestamp;

        LibVesting.Layout storage vs = LibVesting.layout();
        
        uint256 userTotalTokens = vs.vuser[_user].userReceivedAmount;
        uint256 userWithdrawnAmounts = vs.vuser[_user].userWithdrawnAmount;

        if(userWithdrawnAmounts == userTotalTokens){
            claimableTokens = 0;
            return claimableTokens;
        }else{
            if(vs.vesting.tokenType == ItemType.ERC20){
                uint256[] memory period = vs.vesting.vestingPeriod;
                if(blockTime > vs.vesting.claimStartTime && vs.vuser[_user].isExist && blockTime > period[0]){
                    for(uint256 i = 0; i < period.length;){
                        if(blockTime >=  period[i]){
                            uint256 canBeRequestedAmount = (userTotalTokens / 100) * vs.vesting.periodClaim[i];
                            unchecked{
                                claimableTokens += canBeRequestedAmount;
                            }
                        }
                        unchecked{
                            i++;
                        }
                    }
                }
                if(claimableTokens > 0){
                    unchecked{
                        claimableTokens -= userWithdrawnAmounts;
                    }
                }
            }else{
                claimableTokens = userTotalTokens;
            }
        }
        return claimableTokens;
    }

    function _transferAssets(
        uint256 _amount,
        uint256 _tokenID,
        address _user,
        address _contract,
        ItemType _type
    )
        private
    {
        if(_type == ItemType.ERC20){
            ISolidStateERC20 token = ISolidStateERC20(_contract);
            if(_amount > token.balanceOf(address(this))){revert Insufficient_Balance();}
            token.transfer(_user, _amount);
            emit HANDLE_CLAIM(_user,block.timestamp);
        }else if(_type == ItemType.ERC1155){
            ISolidStateERC1155 nft = ISolidStateERC1155(_contract);
            if(_amount > nft.balanceOf(address(this), _tokenID)){revert Insufficient_Balance();}
            nft.safeTransferFrom(address(this), _user, _tokenID, _amount, "");
            emit HANDLE_CLAIM(_user,block.timestamp);
        }else if(_type == ItemType.ERC721){
            ISolidStateERC721 nft = ISolidStateERC721(_contract);
            if(nft.ownerOf(_tokenID) != address(this)){revert Insufficient_Balance();}
            nft.transferFrom(address(this), _user, _tokenID);
            emit HANDLE_CLAIM(_user,block.timestamp);
        }else{
            revert Invalid_Action();
        }
    }

    function getVesting(
    )
        public
        view
        returns(TVesting memory vesting)
    {
        vesting = LibVesting.layout().vesting;
    }

    function getUser(
        address _user
    )
        public
        view
        returns(TVestingUser memory user)
    {
        user = LibVesting.layout().vuser[_user];
    }

}