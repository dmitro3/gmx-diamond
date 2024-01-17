/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  DiamondFallback,
  DiamondFallbackInterface,
} from "../../../../../../@solidstate/contracts/proxy/diamond/fallback/DiamondFallback";

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
    name: "Proxy__ImplementationIsNotContract",
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
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "getFallbackAddress",
    outputs: [
      {
        internalType: "address",
        name: "fallbackAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fallbackAddress",
        type: "address",
      },
    ],
    name: "setFallbackAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class DiamondFallback__factory {
  static readonly abi = _abi;
  static createInterface(): DiamondFallbackInterface {
    return new utils.Interface(_abi) as DiamondFallbackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondFallback {
    return new Contract(address, _abi, signerOrProvider) as DiamondFallback;
  }
}