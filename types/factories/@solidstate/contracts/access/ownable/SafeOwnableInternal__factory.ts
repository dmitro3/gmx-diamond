/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  SafeOwnableInternal,
  SafeOwnableInternalInterface,
} from "../../../../../@solidstate/contracts/access/ownable/SafeOwnableInternal";

const _abi = [
  {
    inputs: [],
    name: "Ownable__NotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "Ownable__NotTransitiveOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "SafeOwnable__NotNomineeOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
] as const;

export class SafeOwnableInternal__factory {
  static readonly abi = _abi;
  static createInterface(): SafeOwnableInternalInterface {
    return new utils.Interface(_abi) as SafeOwnableInternalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeOwnableInternal {
    return new Contract(address, _abi, signerOrProvider) as SafeOwnableInternal;
  }
}
