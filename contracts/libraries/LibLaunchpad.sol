// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import { TLaunchpad ,TLaunchpadUser } from "./Structs.sol";

library LibLaunchpad{
    bytes32 internal constant STORAGE_SLOT = keccak256('storage.launchpad.gamexpad.io');
    uint256 constant DIFFERENCE_AMOUNT = 1 ether;
    
    struct Layout {
        uint256 idCounter;
        uint256[] ids;

        //     launchid =>
        mapping(uint256 => TLaunchpad) launchpad;

        //     user     =>        launchid =>
        mapping(address => mapping(uint256 => TLaunchpadUser)) user;

    }

    function layout() internal pure returns (Layout storage l) {
        bytes32 slot = STORAGE_SLOT;
        assembly {
            l.slot := slot
        }
    }
}