/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  GMXToken,
  GMXTokenInterface,
} from "../../../contracts/tokens/GMXToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "ERC2612ExpiredSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC2612InvalidSigner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256",
      },
    ],
    name: "InvalidAccountNonce",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101606040523480156200001257600080fd5b506040516200191538038062001915833981016040819052620000359162000433565b6040518060400160405280600881526020016723a6ac2a37b5b2b760c11b81525080604051806040016040528060018152602001603160f81b815250836040518060400160405280600881526020016723a6ac2a37b5b2b760c11b8152506040518060400160405280600381526020016208e9ab60eb1b8152508160039081620000c091906200050a565b506004620000cf82826200050a565b5050506001600160a01b0381166200010257604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b6200010d81620001f4565b506200011b82600662000246565b610120526200012c81600762000246565b61014052815160208084019190912060e052815190820120610100524660a052620001ba60e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c05250620001ed81620001d76012600a620006e9565b620001e790633b9aca00620006fa565b6200027f565b506200079f565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600060208351101562000266576200025e83620002bd565b905062000279565b816200027384826200050a565b5060ff90505b92915050565b6001600160a01b038216620002ab5760405163ec442f0560e01b815260006004820152602401620000f9565b620002b96000838362000300565b5050565b600080829050601f81511115620002eb578260405163305a27a960e01b8152600401620000f9919062000714565b8051620002f88262000764565b179392505050565b6001600160a01b0383166200032f57806002600082825462000323919062000789565b90915550620003a39050565b6001600160a01b03831660009081526020819052604090205481811015620003845760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401620000f9565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216620003c157600280548290039055620003e0565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200042691815260200190565b60405180910390a3505050565b6000602082840312156200044657600080fd5b81516001600160a01b03811681146200045e57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200049057607f821691505b602082108103620004b157634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200050557600081815260208120601f850160051c81016020861015620004e05750805b601f850160051c820191505b818110156200050157828155600101620004ec565b5050505b505050565b81516001600160401b0381111562000526576200052662000465565b6200053e816200053784546200047b565b84620004b7565b602080601f8311600181146200057657600084156200055d5750858301515b600019600386901b1c1916600185901b17855562000501565b600085815260208120601f198616915b82811015620005a75788860151825594840194600190910190840162000586565b5085821015620005c65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b600181815b808511156200062d578160001904821115620006115762000611620005d6565b808516156200061f57918102915b93841c9390800290620005f1565b509250929050565b600082620006465750600162000279565b81620006555750600062000279565b81600181146200066e5760028114620006795762000699565b600191505062000279565b60ff8411156200068d576200068d620005d6565b50506001821b62000279565b5060208310610133831016604e8410600b8410161715620006be575081810a62000279565b620006ca8383620005ec565b8060001904821115620006e157620006e1620005d6565b029392505050565b60006200045e60ff84168362000635565b8082028115828204841417620002795762000279620005d6565b600060208083528351808285015260005b81811015620007435785810183015185820160400152820162000725565b506000604082860101526040601f19601f8301168501019250505092915050565b80516020808301519190811015620004b15760001960209190910360031b1b16919050565b80820180821115620002795762000279620005d6565b60805160a05160c05160e05161010051610120516101405161111b620007fa600039600061093101526000610904015260006107c101526000610799015260006106f40152600061071e01526000610748015261111b6000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063715018a6116100ad57806395d89b411161007157806395d89b4114610258578063a9059cbb14610260578063d505accf14610273578063dd62ed3e14610286578063f2fde38b146102bf57600080fd5b8063715018a6146101f457806379cc6790146101fc5780637ecebe001461020f57806384b0196e146102225780638da5cb5b1461023d57600080fd5b8063313ce567116100f4578063313ce5671461018c5780633644e5151461019b57806340c10f19146101a357806342966c68146101b857806370a08231146101cb57600080fd5b806306fdde0314610126578063095ea7b31461014457806318160ddd1461016757806323b872dd14610179575b600080fd5b61012e6102d2565b60405161013b9190610e91565b60405180910390f35b610157610152366004610ec7565b610364565b604051901515815260200161013b565b6002545b60405190815260200161013b565b610157610187366004610ef1565b61037e565b6040516012815260200161013b565b61016b6103a2565b6101b66101b1366004610ec7565b6103b1565b005b6101b66101c6366004610f2d565b6103c7565b61016b6101d9366004610f46565b6001600160a01b031660009081526020819052604090205490565b6101b66103d4565b6101b661020a366004610ec7565b6103e8565b61016b61021d366004610f46565b6103fd565b61022a61041b565b60405161013b9796959493929190610f61565b6005546040516001600160a01b03909116815260200161013b565b61012e610461565b61015761026e366004610ec7565b610470565b6101b6610281366004610ff7565b61047e565b61016b61029436600461106a565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101b66102cd366004610f46565b6105bd565b6060600380546102e19061109d565b80601f016020809104026020016040519081016040528092919081815260200182805461030d9061109d565b801561035a5780601f1061032f5761010080835404028352916020019161035a565b820191906000526020600020905b81548152906001019060200180831161033d57829003601f168201915b5050505050905090565b6000336103728185856105f8565b60019150505b92915050565b60003361038c85828561060a565b610397858585610688565b506001949350505050565b60006103ac6106e7565b905090565b6103b9610812565b6103c3828261083f565b5050565b6103d13382610875565b50565b6103dc610812565b6103e660006108ab565b565b6103f382338361060a565b6103c38282610875565b6001600160a01b038116600090815260086020526040812054610378565b60006060806000806000606061042f6108fd565b61043761092a565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b6060600480546102e19061109d565b600033610372818585610688565b834211156104a75760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886104f48c6001600160a01b0316600090815260086020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061054f82610957565b9050600061055f82878787610984565b9050896001600160a01b0316816001600160a01b0316146105a6576040516325c0072360e11b81526001600160a01b0380831660048301528b16602482015260440161049e565b6105b18a8a8a6105f8565b50505050505050505050565b6105c5610812565b6001600160a01b0381166105ef57604051631e4fbdf760e01b81526000600482015260240161049e565b6103d1816108ab565b61060583838360016109b2565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610682578181101561067357604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161049e565b610682848484840360006109b2565b50505050565b6001600160a01b0383166106b257604051634b637e8f60e11b81526000600482015260240161049e565b6001600160a01b0382166106dc5760405163ec442f0560e01b81526000600482015260240161049e565b610605838383610a87565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561074057507f000000000000000000000000000000000000000000000000000000000000000046145b1561076a57507f000000000000000000000000000000000000000000000000000000000000000090565b6103ac604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b6005546001600160a01b031633146103e65760405163118cdaa760e01b815233600482015260240161049e565b6001600160a01b0382166108695760405163ec442f0560e01b81526000600482015260240161049e565b6103c360008383610a87565b6001600160a01b03821661089f57604051634b637e8f60e11b81526000600482015260240161049e565b6103c382600083610a87565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60606103ac7f00000000000000000000000000000000000000000000000000000000000000006006610bb1565b60606103ac7f00000000000000000000000000000000000000000000000000000000000000006007610bb1565b60006103786109646106e7565b8360405161190160f01b8152600281019290925260228201526042902090565b60008060008061099688888888610c5c565b9250925092506109a68282610d2b565b50909695505050505050565b6001600160a01b0384166109dc5760405163e602df0560e01b81526000600482015260240161049e565b6001600160a01b038316610a0657604051634a1406b160e11b81526000600482015260240161049e565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561068257826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610a7991815260200190565b60405180910390a350505050565b6001600160a01b038316610ab2578060026000828254610aa791906110d7565b90915550610b249050565b6001600160a01b03831660009081526020819052604090205481811015610b055760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161049e565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610b4057600280548290039055610b5f565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ba491815260200190565b60405180910390a3505050565b606060ff8314610bcb57610bc483610de4565b9050610378565b818054610bd79061109d565b80601f0160208091040260200160405190810160405280929190818152602001828054610c039061109d565b8015610c505780601f10610c2557610100808354040283529160200191610c50565b820191906000526020600020905b815481529060010190602001808311610c3357829003601f168201915b50505050509050610378565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610c975750600091506003905082610d21565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610ceb573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610d1757506000925060019150829050610d21565b9250600091508190505b9450945094915050565b6000826003811115610d3f57610d3f6110f8565b03610d48575050565b6001826003811115610d5c57610d5c6110f8565b03610d7a5760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610d8e57610d8e6110f8565b03610daf5760405163fce698f760e01b81526004810182905260240161049e565b6003826003811115610dc357610dc36110f8565b036103c3576040516335e2f38360e21b81526004810182905260240161049e565b60606000610df183610e23565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f81111561037857604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610e7157602081850181015186830182015201610e55565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610ea46020830184610e4b565b9392505050565b80356001600160a01b0381168114610ec257600080fd5b919050565b60008060408385031215610eda57600080fd5b610ee383610eab565b946020939093013593505050565b600080600060608486031215610f0657600080fd5b610f0f84610eab565b9250610f1d60208501610eab565b9150604084013590509250925092565b600060208284031215610f3f57600080fd5b5035919050565b600060208284031215610f5857600080fd5b610ea482610eab565b60ff60f81b881681526000602060e081840152610f8160e084018a610e4b565b8381036040850152610f93818a610e4b565b606085018990526001600160a01b038816608086015260a0850187905284810360c0860152855180825283870192509083019060005b81811015610fe557835183529284019291840191600101610fc9565b50909c9b505050505050505050505050565b600080600080600080600060e0888a03121561101257600080fd5b61101b88610eab565b965061102960208901610eab565b95506040880135945060608801359350608088013560ff8116811461104d57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561107d57600080fd5b61108683610eab565b915061109460208401610eab565b90509250929050565b600181811c908216806110b157607f821691505b6020821081036110d157634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561037857634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea164736f6c6343000814000a";

type GMXTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GMXTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GMXToken__factory extends ContractFactory {
  constructor(...args: GMXTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GMXToken> {
    return super.deploy(_owner, overrides || {}) as Promise<GMXToken>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): GMXToken {
    return super.attach(address) as GMXToken;
  }
  override connect(signer: Signer): GMXToken__factory {
    return super.connect(signer) as GMXToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GMXTokenInterface {
    return new utils.Interface(_abi) as GMXTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GMXToken {
    return new Contract(address, _abi, signerOrProvider) as GMXToken;
  }
}
