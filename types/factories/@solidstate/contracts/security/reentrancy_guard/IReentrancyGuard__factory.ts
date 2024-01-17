/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IReentrancyGuard,
  IReentrancyGuardInterface,
} from "../../../../../@solidstate/contracts/security/reentrancy_guard/IReentrancyGuard";

const _abi = [
  {
    inputs: [],
    name: "ReentrancyGuard__ReentrantCall",
    type: "error",
  },
] as const;

export class IReentrancyGuard__factory {
  static readonly abi = _abi;
  static createInterface(): IReentrancyGuardInterface {
    return new utils.Interface(_abi) as IReentrancyGuardInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IReentrancyGuard {
    return new Contract(address, _abi, signerOrProvider) as IReentrancyGuard;
  }
}
