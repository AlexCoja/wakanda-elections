import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";

import { Contract, ContractTransaction } from "ethers";
import { IContractHook } from "./use-contract.types";
import { ContractContext } from "../../models/contract";

import CONTRACT_ABI from "../../../../blockchain/build/wakanda_elections.json";
import { Contracts } from "../../../common/constants/contract";

export const useContractHook = (): IContractHook => {
  const { library, chainId } = useWeb3React<Web3Provider>();
  const contractRef = useRef<ContractContext | undefined>(undefined);

  const vote = async (
    candidateIndex: number
  ): Promise<ContractTransaction | undefined> => {
    try {
      if (contractRef.current) {
        const vote = await contractRef.current.vote(candidateIndex);

        if (vote) {
          toast.success("Thank you for your vote!");
        }
        return vote;
      }

      return undefined;
    } catch (error: any) {
      toast.error(error.message);
      throw error;
    }
  };

  const injectCandidates = async (
    candidatesList: string[]
  ): Promise<ContractTransaction | undefined> => {
    try {
      if (contractRef.current) {
        const enteredCandidates = await contractRef.current.injectCandidates(
          candidatesList
        );

        if (enteredCandidates) {
          toast.success("Successfully injected candidates!");
        }
      }

      return undefined;
    } catch (error: any) {
      toast.error(error.message);
      throw error;
    }
  };

  const winningCandidates = async () => {
    try {
      if (contractRef.current) {
        const candidates = await contractRef.current.winningCandidates();

        return candidates;
      }

      return undefined;
    } catch (error: any) {
      toast.error(error.message);
      throw error;
    }
  };

  const proposals = async (
    candidateIndex: number
  ): Promise<ContractTransaction | undefined> => {
    try {
      if (contractRef.current) {
        const proposalsList = await contractRef.current.proposals(
          candidateIndex
        );

        return proposalsList;
      }

      return undefined;
    } catch (error: any) {
      toast.error(error.message);
      throw error;
    }
  };

  useEffect(() => {
    if (library && chainId) {
      const loadContract = async () => {
        const contract = new Contract(
          Contracts[chainId],
          CONTRACT_ABI,
          library.getSigner()
        ) as unknown as ContractContext;

        contractRef.current = contract;
      };

      loadContract();
    }
  }, [chainId, library]);

  return {
    vote,
    winningCandidates,
    injectCandidates,
    proposals,
  };
};
