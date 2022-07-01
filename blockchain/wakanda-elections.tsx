import { AbiItemType } from "ethereum-abi-types-generator";
import Web3 from "web3";
import { AbiItem } from "web3-utils";

const provider = new Web3.providers.HttpProvider(
  `${process.env.NEXT_PUBLIC_RPC_URL_3}`
);
const web3 = new Web3(provider);
const ropstenSCAddress = "0x7BC0B49474505CB8Cf77c2Cb8747300bD221E904";

const abi = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "bool", name: "isPresent", type: "bool" },
    ],
    name: "NewChallenger",
    type: "event",
  },
  {
    inputs: [],
    name: "candidateConut",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "chairperson",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentThirdCandidate",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "string[]", name: "proposalNames", type: "string[]" },
    ],
    name: "injectProposalNames",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isNewChallenger",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "proposals",
    outputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "uint256", name: "voteCount", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "triggerEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "proposal", type: "uint256" }],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "voters",
    outputs: [
      { internalType: "uint256", name: "weight", type: "uint256" },
      { internalType: "bool", name: "voted", type: "bool" },
      { internalType: "uint256", name: "vote", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winningCandidates",
    outputs: [
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          { internalType: "uint256", name: "voteCount", type: "uint256" },
        ],
        internalType: "struct WakandaElections.Proposal[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const wakandaElctionsContract = new web3.eth.Contract(
  abi as AbiItem[],
  ropstenSCAddress
);

export default wakandaElctionsContract;
