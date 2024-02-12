// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import { TStakePoolInfo, TStakeTierSection, TUser } from "../libraries/Structs.sol";
import { Math } from "@openzeppelin/contracts/utils/math/Math.sol";
import { LibStake } from "../libraries/LibStake.sol";

contract StakeQuery {
    using Math for uint256;

    function getBlacklist(
        address _address
    )
        public
        view 
        returns(bool isBlacklist)
    {
        isBlacklist = LibStake.layout().blacklist[_address];
    }

    function getPoolInfo(
    )
        public 
        view 
        returns (TStakePoolInfo memory poolInfo)
    {
        poolInfo = LibStake.layout().stakePoolInfo;
    }

    function getUserInfo(
        address _address
    )
        public
        view
        returns (TUser memory userInfo)
    {
        userInfo = LibStake.layout().user[_address];
    }

    function getUserStakeList(
        address _address
    )
        public 
        view 
        returns (uint256[] memory stakeList) 
    {
        stakeList = LibStake.layout().user[_address].userStakeTierSections;
    }

    function getUserStakePeriod(
        uint256 _index,
        address _address
    )
        public 
        view 
        returns (TStakeTierSection memory period)
    {
        period = LibStake.layout().userTierSection[_address][_index];
    }

    function getStakeEndTime(
        uint256 _index,
        address _address
    )
        public 
        view 
        returns (uint256 endTime) 
    {
        uint256 stakeEndTime = LibStake.layout().userTierSection[_address][_index].endTime;
        if(stakeEndTime > block.timestamp){ endTime = stakeEndTime - block.timestamp; }
    }

    function getRequestEndTime(
        uint256 _index, 
        address _address
    ) 
        public 
        view 
        returns (uint256 endTime) 
    {
        uint256 requestEndTime = LibStake.layout().userTierSection[_address][_index].exitTime;
        if(requestEndTime > block.timestamp){ endTime = requestEndTime - block.timestamp; }
    }

    function getAmounts(
    )
        public 
        view 
        returns (uint256[] memory amounts) 
    {
        amounts = LibStake.layout().amounts;
    }

    function getTimes(
    )
        public 
        view 
        returns (uint256[] memory times) 
    {
        times = LibStake.layout().times;
    } 

}