// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import { TVestingUser, TVesting } from "./Structs.sol";

library LibVesting{
    bytes32 internal constant STORAGE_SLOT = keccak256('storage.vesting.gamexpad.io');

    struct Layout {
        mapping(address => TVestingUser) vuser;
        TVesting vesting;
    }

    function layout() internal pure returns (Layout storage l) {
        bytes32 slot = STORAGE_SLOT;
        assembly {
            l.slot := slot
        }
    }
}