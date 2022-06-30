import { Web3Provider } from "@ethersproject/providers";
import { Providers } from "../../enums/providers";

export interface IWalletConnectHook {
  connected: boolean;
  disconnect: () => void;
  connect: (provider: Providers) => void;
  isUnsupportedNetwork: boolean;
  chainId?: number;
  account?: string | null;
  library?: Web3Provider;
}
