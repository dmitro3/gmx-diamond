/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC165Base,
  IERC165BaseInterface,
} from "../../../../../../@solidstate/contracts/introspection/ERC165/base/IERC165Base";

const _abi = [
  {
    inputs: [],
    name: "ERC165Base__InvalidInterfaceId",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IERC165Base__factory {
  static readonly abi = _abi;
  static createInterface(): IERC165BaseInterface {
    return new utils.Interface(_abi) as IERC165BaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC165Base {
    return new Contract(address, _abi, signerOrProvider) as IERC165Base;
  }
}
