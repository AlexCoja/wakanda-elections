import { ContractTransaction } from "ethers";

export interface IContractHook {
  winningCandidates: () => Promise<ContractTransaction | undefined>;
  vote: (candidateIndex: number) => Promise<ContractTransaction | undefined>;
  injectCandidates: (
    candidatesList: string[]
  ) => Promise<ContractTransaction | undefined>;
  proposals: (candidateIndex: number) => Promise<ContractTransaction | undefined>;
}
