// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import { ISolidStateERC20 } from "@solidstate/contracts/token/ERC20/ISolidStateERC20.sol";
import { TStakePoolInfo, TStakeTierSection, TUser, TLaunchpad } from "../libraries/Structs.sol";
import  "@solidstate/contracts/security/reentrancy_guard/ReentrancyGuard.sol";
import { Math } from "@openzeppelin/contracts/utils/math/Math.sol";
import '@solidstate/contracts/access/ownable/OwnableInternal.sol';
import { Modifiers } from "../libraries/Modifiers.sol";
import { LibStake } from "../libraries/LibStake.sol";
import { LibLaunchpad } from "../libraries/LibLaunchpad.sol";

import "../libraries/Errors.sol";

contract Setting is Modifiers, ReentrancyGuard, OwnableInternal {
    using Math for uint256;

    function addAmounts(
        uint256[] memory _amounts, 
        uint256[] memory _multipliers
    ) 
        external 
        onlyOwner 
    {
        uint256[] memory amounts = _amounts;
        uint256[] memory multipliers = _multipliers;
        if(amounts.length != multipliers.length){ revert Array_Lengths_Not_Match();}

        LibStake.Layout storage ss = LibStake.layout();

        for (uint256 i = 0; i < amounts.length;) {
            ss.amountMultipler[amounts[i]] = multipliers[i];
            ss.amounts.push(amounts[i]);
            unchecked{
                i++;
            }
        }
    }

    function addTimes(
        uint256[] memory _times,
        uint256[] memory _multipliers
    ) 
        external 
        onlyOwner 
    {
        uint256[] memory times = _times;
        uint256[] memory multipliers = _multipliers;
        if(times.length != multipliers.length){ revert Array_Lengths_Not_Match();}

        LibStake.Layout storage ss = LibStake.layout();

        for (uint256 i = 0; i < times.length;){
            ss.timesMultipler[times[i]] = multipliers[i];
            ss.times.push(times[i]);
            unchecked{
                i++;
            }
        }
    }

    function setToken0(
        address _address
    )
        external
        onlyOwner
        IsContract(_address)
    {
        LibStake.layout().stakePoolInfo.token0 = _address;
    }

    function setToken1(
        address _address
    )
        external
        onlyOwner
        IsContract(_address)
    {
        LibStake.layout().stakePoolInfo.token1 = _address;
    }

    function setPoolActive(
        bool _status
    )
        external 
        onlyOwner 
    {
        LibStake.layout().stakePoolInfo.isActive = _status;
    }

    function setBlacklist(
        bool _status,
        address _address
    ) 
        external 
        onlyOwner
    {
        if(_address == address(0)){ revert Invalid_Address();}
        LibStake.layout().blacklist[_address] = _status;
    }

    function setPoolStatus(
        bool _status
    ) 
        external 
        onlyOwner 
    {
        LibStake.layout().stakePoolInfo.isActive = _status;
    }

/// Launchpad

    function initLaunchpad(
        TLaunchpad memory _params
    ) 
        external
        onlyOwner
    {
        LibLaunchpad.Layout storage ls = LibLaunchpad.layout();

        unchecked {
            ls.idCounter += 1;
        }

        ls.ids.push(ls.idCounter);
        ls.launchpad[ls.idCounter] = _params;
        ls.launchpad[ls.idCounter].projectID = ls.idCounter;
    }

    function setLaunchpad(
        TLaunchpad memory _params
    )
        external
        onlyOwner
    {
        LibLaunchpad.layout().launchpad[_params.projectID] = _params;
    }

    function setTokenAddress(
        uint256 _id,
        address _address
    )
        external 
        onlyOwner
        IsContract(_address)
    {
        LibLaunchpad.layout().launchpad[_id].tokenAddress = _address;
    }

    function setUsedTokenAddress(
        uint256 _id,
        address _address
    )
        external 
        onlyOwner
        IsContract(_address)
    {
        LibLaunchpad.layout().launchpad[_id].usedTokenAddress = _address;
    }

    function setVestingContract(
        uint256 _id,
        address _address
    )
        external 
        onlyOwner
        IsContract(_address)
    {
        LibLaunchpad.layout().launchpad[_id].vestingContract = _address;
    }

}