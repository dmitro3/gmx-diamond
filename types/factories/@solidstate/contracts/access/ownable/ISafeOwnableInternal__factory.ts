/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ISafeOwnableInternal,
  ISafeOwnableInternalInterface,
} from "../../../../../@solidstate/contracts/access/ownable/ISafeOwnableInternal";

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

export class ISafeOwnableInternal__factory {
  static readonly abi = _abi;
  static createInterface(): ISafeOwnableInternalInterface {
    return new utils.Interface(_abi) as ISafeOwnableInternalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISafeOwnableInternal {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ISafeOwnableInternal;
  }
}