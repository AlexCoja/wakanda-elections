/* eslint-disable @typescript-eslint/no-explicit-any */
import { ContractTransaction, BigNumber, BigNumberish } from "ethers";

// eslint-disable-next-line import/no-extraneous-dependencies
import { EthersContractContextV5 } from "ethereum-abi-types-generator";

export type ContractContext = EthersContractContextV5<
  WakandaContract,
  WakandaContractMethodNames,
  WakandaContractEventsContext,
  WakandaContractEvents
>;

export declare type EventFilter = {
  address?: string;
  topics?: Array<string>;
  fromBlock?: string | number;
  toBlock?: string | number;
};

export interface ContractTransactionOverrides {
  /**
   * The maximum units of gas for the transaction to use
   */
  gasLimit?: number;
  /**
   * The price (in wei) per unit of gas
   */
  gasPrice?: BigNumber | string | number | Promise<any>;
  /**
   * The nonce to use in the transaction
   */
  nonce?: number;
  /**
   * The amount to send with the transaction (i.e. msg.value)
   */
  value?: BigNumber | string | number | Promise<any>;
  /**
   * The chain ID (or network ID) to use
   */
  chainId?: number;
}

export interface ContractCallOverrides {
  /**
   * The address to execute the call as
   */
  from?: string;
  /**
   * The maximum units of gas for the transaction to use
   */
  gasLimit?: number;
}
export type WakandaContractEvents = "NewChallenger";

export interface WakandaContractEventsContext {
  NewChallenger(...parameters: any): EventFilter;
}
export type WakandaContractMethodNames =
  | "vote"
  | "winningCandidates"
  | "injectCandidates"
  | "proposals";

export interface OwnershipTransferredEventEmittedResponse {
  previousOwner: string;
  newOwner: string;
}
export interface PostCreatedEventEmittedResponse {
  postID: BigNumberish;
  owner: string;
  text: string;
}
export interface PostDeletedEventEmittedResponse {
  postID: BigNumberish;
}
export interface PostSponsoredEventEmittedResponse {
  postID: BigNumberish;
  sponsorAmount: BigNumberish;
  sponsor: string;
}
export interface PostResponse {
  timestamp: BigNumber;
  0: BigNumber;
  owner: string;
  1: string;
  text: string;
  2: string;
}
export interface PostsResponse {
  timestamp: BigNumber;
  0: BigNumber;
  owner: string;
  1: string;
  text: string;
  2: string;
  length: 3;
}
export interface WakandaContract {
  vote(
    candidateIndex: number,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;

  winningCandidates(
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;

  injectCandidates(
    candidatesList: string[],
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;

  proposals(
    candidateIndex: number,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
}
