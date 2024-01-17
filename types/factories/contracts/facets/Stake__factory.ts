/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Stake, StakeInterface } from "../../../contracts/facets/Stake";

const _abi = [
  {
    inputs: [],
    name: "Address_Cannot_Be_Zero",
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
    name: "Address_Is_A_Contract",
    type: "error",
  },
  {
    inputs: [],
    name: "Address_Is_Blacklist",
    type: "error",
  },
  {
    inputs: [],
    name: "Insufficient_Allowance",
    type: "error",
  },
  {
    inputs: [],
    name: "Insufficient_Balance",
    type: "error",
  },
  {
    inputs: [],
    name: "Insufficient_Lock_Time",
    type: "error",
  },
  {
    inputs: [],
    name: "Insufficient_Stake_Amount",
    type: "error",
  },
  {
    inputs: [],
    name: "Invalid_Action",
    type: "error",
  },
  {
    inputs: [],
    name: "Invalid_Address",
    type: "error",
  },
  {
    inputs: [],
    name: "MathOverflowedMulDiv",
    type: "error",
  },
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
    name: "Paused",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuard__ReentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "User_Already_requested",
    type: "error",
  },
  {
    inputs: [],
    name: "User_No_Receivable",
    type: "error",
  },
  {
    inputs: [],
    name: "User_Not_Expired",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "FORCED_HARVEST",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "HANDLE_ADD_LIQUIDITY",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "HANDLE_HARVEST",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "HANDLE_REQUEST",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "HANDLE_STAKE",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "HANDLE_UNSTAKE",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "addToken0Liquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "addToken1Liquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "calculateRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
    ],
    name: "calculateScore",
    outputs: [
      {
        internalType: "uint256",
        name: "score",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "multipler",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getBlacklist",
    outputs: [
      {
        internalType: "bool",
        name: "isBlacklist",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolInfo",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "lastCHCIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "numberOfStakers",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalStakedToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "poolTotalScore",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "poolToken0RewardPerTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "poolDistributedToken0Reward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "poolToken0DistributionEndTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "poolToken0Liquidity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "poolToken1RewardPerTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "poolDistributedToken1Reward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "poolToken1DistributionEndTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "poolToken1Liquidity",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
        ],
        internalType: "struct TStakePoolInfo",
        name: "poolInfo",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getUserInfo",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "staker",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "userChangeCountIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userTotalStakeAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userTotalScore",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userStakeTierCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userEarnedToken0Amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userEarnedToken1Amount",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "userStakeTierSections",
            type: "uint256[]",
          },
        ],
        internalType: "struct TUser",
        name: "userInfo",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getUserStakeList",
    outputs: [
      {
        internalType: "uint256[]",
        name: "stakeList",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getUserStakePeriod",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "receivable",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "indexID",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "enterTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "exitTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stakeAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userScore",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tierMultipler",
            type: "uint256",
          },
        ],
        internalType: "struct TStakeTierSection",
        name: "period",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setBlacklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "setPoolStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lockTime",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "withdrawRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506127f3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80635d77d8d01161009757806374899a7e1161006657806374899a7e1461026f5780637b0472f01461028257806399dcbcfe14610295578063b163882b146102a857600080fd5b80635d77d8d01461020457806360246c88146102275780636386c1c71461023c57806364ab86751461025c57600080fd5b80631cb9a02a116100d35780631cb9a02a1461014b5780632e1a7d4d14610173578063372500ab1461018657806354dda4321461018e57600080fd5b806305217c15146100fa5780630776521e1461010f57806307f461d014610122575b600080fd5b61010d61010836600461244d565b6102bb565b005b61010d61011d36600461246a565b610312565b61013561013036600461249f565b610574565b60405161014291906124ba565b60405180910390f35b61015e6101593660046124fe565b6105ef565b60408051928352602083019190915201610142565b61010d61018136600461246a565b6106a3565b61010d610954565b6101a161019c366004612520565b610b0b565b60405161014291906000610100820190508251151582526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b61021761021236600461249f565b610be6565b6040519015158152602001610142565b61022f610c15565b604051610142919061254c565b61024f61024a36600461249f565b610d6a565b604051610142919061260e565b61015e61026a36600461249f565b610e84565b61010d61027d36600461246a565b6110e0565b61010d6102903660046124fe565b6113eb565b61010d6102a336600461246a565b611a2c565b61010d6102b63660046126ad565b611c85565b6102c3611d1e565b6001600160a01b0316336001600160a01b0316146102f457604051632f7a8ee160e01b815260040160405180910390fd5b806102fd611d4c565b600801805460ff191691151591909117905550565b61031a611d1e565b6001600160a01b0316336001600160a01b03161461034b57604051632f7a8ee160e01b815260040160405180910390fd5b6000610355611d4c565b60158101546040516370a0823160e01b81523360048201529192506001600160a01b031690839082906370a0823190602401602060405180830381865afa1580156103a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c891906126d9565b10156103e757604051633bf1830560e21b815260040160405180910390fd5b604051636eb1769f60e11b815233600482015230602482015283906001600160a01b0383169063dd62ed3e90604401602060405180830381865afa158015610433573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045791906126d9565b1015610476576040516335473b8f60e01b815260040160405180910390fd5b6010820180548401905561048e6301e133808461271e565b600d8301556104a16301e1338042612740565b600f8301556104b06000611d70565b6040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b038216906323b872dd906064016020604051808303816000875af1158015610503573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105279190612753565b5060158201546040514281526001600160a01b039091169033907fcf8093d6bd527aa387b1b2a6c6adedc639a84779ce7a499c1866340b84c9e45a906020015b60405180910390a3505050565b606061057e611d4c565b6001600160a01b03831660009081526005919091016020908152604091829020600701805483518184028101840190945280845290918301828280156105e357602002820191906000526020600020905b8154815260200190600101908083116105cf575b50505050509050919050565b60008060006105fc611d4c565b90508060000160008154811061061457610614612770565b9060005260206000200154851015801561064e57508060010160008154811061063f5761063f612770565b90600052602060002001548410155b1561069b57600061065e86611e44565b9050600061066b86611f07565b90506106778183612786565b93508361068c670de0b6b3a76400008961271e565b6106969190612786565b945050505b509250929050565b33806106c257604051631c7e907b60e21b815260040160405180910390fd5b803b80156106f3576040516375ce97fd60e11b81526001600160a01b03831660048201526024015b60405180910390fd5b60026000805160206127c7833981519152540361072357604051635db5c7cd60e11b815260040160405180910390fd5b61073a60026000805160206127c783398151915255565b6000610744611d4c565b6008810154909150339060ff1661076e576040516313d0ff5960e31b815260040160405180910390fd5b6001600160a01b038116600090815260048301602052604090205460ff16156107aa57604051631a992bf360e31b815260040160405180910390fd5b6001600160a01b0381166000908152600783016020908152604080832088845290915290206003015442116107f257604051635ad5ffc760e01b815260040160405180910390fd5b6001600160a01b0381166000908152600783016020908152604080832088845290915290205460ff16610838576040516323652dff60e01b815260040160405180910390fd5b6001600160a01b03811660008181526007840160209081526040808320898452825280832060040154938352600586019091529020600201805482900390556108818683611fc5565b601583015460405163a9059cbb60e01b81526001600160a01b0384811660048301526024820184905290911690819063a9059cbb906044016020604051808303816000875af11580156108d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fc9190612753565b50604051428152339030907f026b2226ff84e9e1a2dea62a32289780051279673aaa0fe04b1b842ae3cbf0839060200160405180910390a35050505061094f60016000805160206127c783398151915255565b505050565b338061097357604051631c7e907b60e21b815260040160405180910390fd5b803b801561099f576040516375ce97fd60e11b81526001600160a01b03831660048201526024016106ea565b60026000805160206127c783398151915254036109cf57604051635db5c7cd60e11b815260040160405180910390fd5b6109e660026000805160206127c783398151915255565b60006109f0611d4c565b600881015490915060ff16610a18576040516313d0ff5960e31b815260040160405180910390fd5b33600090815260048201602052604090205460ff1615610a4b57604051631a992bf360e31b815260040160405180910390fd5b33600090815260058201602052604090205460ff16610a7d57604051631927bd6360e01b815260040160405180910390fd5b6000610a88336120d9565b90508015610ad557610a9933611d70565b604051428152309033907f56ce6b39694ddab561addb184d285ba5dd96608f4bc35627d6a26c16e52cb7b09060200160405180910390a3610aee565b604051631927bd6360e01b815260040160405180910390fd5b5050610b0760016000805160206127c783398151915255565b5050565b610b55604051806101000160405280600015158152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b610b5d611d4c565b6001600160a01b03909216600090815260079283016020908152604080832095835294815290849020845161010081018652815460ff16151581526001820154928101929092526002810154948201949094526003840154606082015260048401546080820152600584015460a0820152600684015460c0820152929091015460e08301525090565b6000610bf0611d4c565b6001600160a01b03909216600090815260049290920160205250604090205460ff1690565b610ca2604051806101e0016040528060001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b031681525090565b610caa611d4c565b604080516101e081018252600883015460ff161515815260098301546020820152600a83015491810191909152600b8201546060820152600c8201546080820152600d82015460a0820152600e82015460c0820152600f82015460e08201526010820154610100820152601182015461012082015260128201546101408201526013820154610160820152601482015461018082015260158201546001600160a01b039081166101a08301526016909201549091166101c0820152919050565b610db4604051806101000160405280600015158152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001606081525090565b610dbc611d4c565b6001600160a01b038316600090815260059182016020908152604091829020825161010081018452815460ff161515815260018201548184015260028201548185015260038201546060820152600482015460808201529381015460a0850152600681015460c0850152600781018054845181850281018501909552808552919360e0860193909290830182828015610e7457602002820191906000526020600020905b815481526020019060010190808311610e60575b5050505050815250509050919050565b6000806000806000610e94611d4c565b6001600160a01b038716600090815260058201602052604090205490915060ff16156110d5576001600160a01b0386166000908152600582016020526040902060010154600982015442825b8281116110d05760008181526006860160209081526040808320600101546001600160a01b038e16845260058901909252822060030154610f2a91670de0b6b3a7640000906122ed565b600083815260068801602052604081206004015491925090610f559083670de0b6b3a76400006122ed565b60008481526006808a0160205260408220015491925090610f7f9084670de0b6b3a76400006122ed565b600085815260068a01602052604090205490915060ff1615611021576000848152600689016020526040812060050154861115610fd8575060008481526006890160205260409020600281015460059091015403611019565b868503610ffb575060008481526006890160205260409020600201548503611019565b50600084815260068901602052604090206002810154600390910154035b820299909901985b6000848152600689016020526040902054610100900460ff16156110c557600084815260068901602052604081206007015486111561107c5750600084815260068901602052604090206002810154600790910154036110bd565b86850361109f5750600084815260068901602052604090206002015485036110bd565b50600084815260068901602052604090206002810154600390910154035b810298909801975b505050600101610ee0565b505050505b509094909350915050565b33806110ff57604051631c7e907b60e21b815260040160405180910390fd5b803b801561112b576040516375ce97fd60e11b81526001600160a01b03831660048201526024016106ea565b60026000805160206127c7833981519152540361115b57604051635db5c7cd60e11b815260040160405180910390fd5b61117260026000805160206127c783398151915255565b600061117c611d4c565b6008810154909150339060ff166111a6576040516313d0ff5960e31b815260040160405180910390fd5b6001600160a01b038116600090815260048301602052604090205460ff16156111e257604051631a992bf360e31b815260040160405180910390fd5b6001600160a01b038116600090815260058301602052604090205460ff1661121d57604051631927bd6360e01b815260040160405180910390fd5b6001600160a01b0381166000908152600783016020908152604080832088845290915290205460ff161561126457604051631bd9058f60e01b815260040160405180910390fd5b6001600160a01b0381166000908152600783016020908152604080832088845290915290206006015442116112ac57604051635ad5ffc760e01b815260040160405180910390fd5b6112b96213c68042612740565b6001600160a01b038216600081815260078501602090815260408083208a84528252808320600380820196909655805460ff191660011781556004810154600b8901805491909103905560059081018054600c8a0180549190910390555494845287019091529020909101805491909103905561133581611d70565b61133e816120d9565b506001600160a01b03811660009081526005830160205260408120600301549003611392576001600160a01b03811660009081526005830160205260409020805460ff19169055600a820180546000190190555b60405142815230906001600160a01b038316907ff1b87c8964d749a585e835934dc79b12c086f78e70d038c2bad5b0fb936001ec9060200160405180910390a3505061094f60016000805160206127c783398151915255565b338061140a57604051631c7e907b60e21b815260040160405180910390fd5b803b8015611436576040516375ce97fd60e11b81526001600160a01b03831660048201526024016106ea565b60026000805160206127c7833981519152540361146657604051635db5c7cd60e11b815260040160405180910390fd5b61147d60026000805160206127c783398151915255565b6000611487611d4c565b601581015460088201549192506001600160a01b031690339060ff166114c0576040516313d0ff5960e31b815260040160405180910390fd5b6001600160a01b038116600090815260048401602052604090205460ff16156114fc57604051631a992bf360e31b815260040160405180910390fd5b6040516370a0823160e01b81526001600160a01b0382811660048301528891908416906370a0823190602401602060405180830381865afa158015611545573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061156991906126d9565b101561158857604051633bf1830560e21b815260040160405180910390fd5b604051636eb1769f60e11b81526001600160a01b03828116600483015230602483015288919084169063dd62ed3e90604401602060405180830381865afa1580156115d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115fb91906126d9565b101561161a576040516335473b8f60e01b815260040160405180910390fd5b6228de8086108061162e57506309465d8086115b1561164c5760405163e071302f60e01b815260040160405180910390fd5b690878678326eac900000087108061166e57506a084595161401484a00000087115b1561168c5760405163daf19a1b60e01b815260040160405180910390fd5b60008061169989896105ef565b6001600160a01b038516600090815260058801602052604090206004015491935091506116c7906001612740565b6001600160a01b03841660009081526005870160209081526040808320600401849055805161010081018252838152918201849052429082018190526060820192909252608081018c905260a081018590529060c082019061172a908c90612740565b815260200183815250866007016000866001600160a01b03166001600160a01b03168152602001908152602001600020600083815260200190815260200160002060008201518160000160006101000a81548160ff0219169083151502179055506020820151816001015560408201518160020155606082015181600301556080820151816004015560a0820151816005015560c0820151816006015560e0820151816007015590505089866008016003016000828254019250508190555089866005016000866001600160a01b03166001600160a01b031681526020019081526020016000206002016000828254019250508190555082866005016000866001600160a01b03166001600160a01b0316815260200190815260200160002060030160008282540192505081905550828660080160040160008282540192505081905550856005016000856001600160a01b03166001600160a01b031681526020019081526020016000206007018190806001815401808255809150506001900390600052602060002001600090919091909150556000866005016000866001600160a01b03166001600160a01b0316815260200190815260200160002060000160009054906101000a900460ff16905080611934576001600160a01b03851660009081526005880160205260409020805460ff19166001908117909155600a8801805490910190555b801561194557611943856120d9565b505b61194e85611d70565b6040516323b872dd60e01b81526001600160a01b038681166004830152306024830152604482018d90528716906323b872dd906064016020604051808303816000875af11580156119a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119c79190612753565b5060405142815230906001600160a01b038716907f315a7607a0aeac9e102a9b1091b859e9392ab47683f023ed2ac69a1db10faa349060200160405180910390a350505050505050611a2660016000805160206127c783398151915255565b50505050565b611a34611d1e565b6001600160a01b0316336001600160a01b031614611a6557604051632f7a8ee160e01b815260040160405180910390fd5b6000611a6f611d4c565b60168101546040516370a0823160e01b81523360048201529192506001600160a01b031690839082906370a0823190602401602060405180830381865afa158015611abe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ae291906126d9565b1015611b0157604051633bf1830560e21b815260040160405180910390fd5b604051636eb1769f60e11b815233600482015230602482015283906001600160a01b0383169063dd62ed3e90604401602060405180830381865afa158015611b4d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b7191906126d9565b1015611b90576040516335473b8f60e01b815260040160405180910390fd5b60108201805484019055611ba86301e133808461271e565b6011830155611bbb6301e1338042612740565b6013830155611bca6000611d70565b6040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b038216906323b872dd906064016020604051808303816000875af1158015611c1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c419190612753565b5060168201546040514281526001600160a01b039091169033907fcf8093d6bd527aa387b1b2a6c6adedc639a84779ce7a499c1866340b84c9e45a90602001610567565b611c8d611d1e565b6001600160a01b0316336001600160a01b031614611cbe57604051632f7a8ee160e01b815260040160405180910390fd5b6001600160a01b038116611ce5576040516363b2fc9960e11b815260040160405180910390fd5b81611cee611d4c565b6001600160a01b0392909216600090815260049092016020526040909120805460ff191691151591909117905550565b7f8a22373512790c48b83a1fe2efdd2888d4a917bcdc24d0adf63e60f671680460546001600160a01b031690565b7f87f0a062f4f4ea88e6c4ea22c5510b4ea7891172f6d69b298260c4269034622990565b6000611d7a611d4c565b600981015490915042906000611d91826001612740565b6000928352600685810160208181526040808720600301889055600989018590556001600160a01b039990991686526005808901825289872060019081018690559487529190529690932060028101859055600c86015491810191909155600d850154600482015560118501549281019290925550600f83015493810184905560139092015460078301819055825461ffff191693821061ff001916939093176101009390911092909202919091179055565b600080611e4f611d4c565b90508060005b8154811015611eff576000828281548110611e7257611e72612770565b60009182526020822001548454909250611e8e9060019061279d565b8310611e9c57600019611ec4565b83611ea8846001612740565b81548110611eb857611eb8612770565b90600052602060002001545b9050818710158015611ed557508087105b15611ef55750600090815260029093016020525050604090205492915050565b5050600101611e55565b505050919050565b600080611f12611d4c565b90506001810160005b8154811015611eff576000828281548110611f3857611f38612770565b60009182526020822001548454909250611f549060019061279d565b8310611f6257600019611f8a565b83611f6e846001612740565b81548110611f7e57611f7e612770565b90600052602060002001545b9050818710158015611f9b57508087105b15611fbb5750600090815260039093016020525050604090205492915050565b5050600101611f1b565b6000611fcf611d4c565b90506000611fdd84846123b2565b6001600160a01b038416600090815260058401602052604090206007015490915015612091576001600160a01b03831660009081526005830160205260409020600701805461202e9060019061279d565b8154811061203e5761203e612770565b9060005260206000200154826005016000856001600160a01b03166001600160a01b03168152602001908152602001600020600701828154811061208457612084612770565b6000918252602090912001555b6001600160a01b038316600090815260058301602052604090206007018054806120bd576120bd6127b0565b6001900381819060005260206000200160009055905550505050565b6000806120e4611d4c565b90506000806120f285610e84565b909250905081156121ee5760158301546001600160a01b0386811660008181526005808801602052604091829020018054870190556010870180548790039055600e87018054870190555163a9059cbb60e01b815260048101919091526024810185905260019650911690819063a9059cbb906044016020604051808303816000875af1158015612187573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121ab9190612753565b506040518381526001600160a01b0387169030907fffbe88175d6f9a5c75537da7ff8d95be05607bccf7a7f11ae02608cf22410cb69060200160405180910390a3505b8015611eff5760168301546001600160a01b038681166000818152600587016020526040908190206006018054860190556014870180548690039055601287018054860190555163a9059cbb60e01b815260048101919091526024810184905260019650911690819063a9059cbb906044016020604051808303816000875af115801561227f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122a39190612753565b506040518281526001600160a01b0387169030907fffbe88175d6f9a5c75537da7ff8d95be05607bccf7a7f11ae02608cf22410cb69060200160405180910390a350505050919050565b60008383028160001985870982811083820303915050806000036123245783828161231a5761231a6126f2565b04925050506123ab565b8084116123445760405163227bc15360e01b815260040160405180910390fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150505b9392505050565b6000806123bd611d4c565b6001600160a01b03841660009081526005919091016020526040812060070191505b815481101561241c57848282815481106123fb576123fb612770565b9060005260206000200154036124145791506124369050565b6001016123df565b50604051631927bd6360e01b815260040160405180910390fd5b92915050565b801515811461244a57600080fd5b50565b60006020828403121561245f57600080fd5b81356123ab8161243c565b60006020828403121561247c57600080fd5b5035919050565b80356001600160a01b038116811461249a57600080fd5b919050565b6000602082840312156124b157600080fd5b6123ab82612483565b6020808252825182820181905260009190848201906040850190845b818110156124f2578351835292840192918401916001016124d6565b50909695505050505050565b6000806040838503121561251157600080fd5b50508035926020909101359150565b6000806040838503121561253357600080fd5b8235915061254360208401612483565b90509250929050565b8151151581526101e081016020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015181840152506101408084015181840152506101608084015181840152506101808084015181840152506101a0808401516125f4828501826001600160a01b03169052565b50506101c0928301516001600160a01b0316919092015290565b60006020808352610120830184511515828501528185015160408501526040850151606085015260608501516080850152608085015160a085015260a085015160c085015260c085015160e085015260e0850151610100808187015250818151808452610140870191508483019350600092505b808310156126a25783518252928401926001929092019190840190612682565b509695505050505050565b600080604083850312156126c057600080fd5b82356126cb8161243c565b915061254360208401612483565b6000602082840312156126eb57600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008261273b57634e487b7160e01b600052601260045260246000fd5b500490565b8082018082111561243657612436612708565b60006020828403121561276557600080fd5b81516123ab8161243c565b634e487b7160e01b600052603260045260246000fd5b808202811582820484141761243657612436612708565b8181038181111561243657612436612708565b634e487b7160e01b600052603160045260246000fdfe09acf4e54214992e70883cf7dcd6957ff2c71cd9e14df4bec4383bc0d11607dca164736f6c6343000814000a";

type StakeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Stake__factory extends ContractFactory {
  constructor(...args: StakeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Stake> {
    return super.deploy(overrides || {}) as Promise<Stake>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Stake {
    return super.attach(address) as Stake;
  }
  override connect(signer: Signer): Stake__factory {
    return super.connect(signer) as Stake__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakeInterface {
    return new utils.Interface(_abi) as StakeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Stake {
    return new Contract(address, _abi, signerOrProvider) as Stake;
  }
}
