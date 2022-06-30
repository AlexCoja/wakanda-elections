import { useCallback, useEffect } from "react";

import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

/* Types */
import { IWalletConnectHook } from "./use-wallet-connect.types";

/* Constants */
import { connectors } from "./use-wallet-connect.constants";
import { Providers } from "../../enums/providers";

export const useWalletConnectHook = (): IWalletConnectHook => {
  const { chainId, account, activate, active, deactivate, error, library } =
    useWeb3React<Web3Provider>();
  const isUnsupportedNetwork = error instanceof UnsupportedChainIdError;

  const setProvider = (type: Providers) => {
    window.localStorage.setItem("provider", type);
  };

  const connect = useCallback(
    (provider: Providers) => {
      activate(connectors[provider]);
      setProvider(provider);
    },
    [activate]
  );

  const resetProvider = () => {
    window.localStorage.setItem("provider", "");
  };

  const disconnect = () => {
    resetProvider();
    deactivate();
  };

  useEffect(() => {
    const provider = window.localStorage.getItem("provider");

    if (provider) {
      activate(connectors[provider as Providers]);
    }
  }, [activate]);

  return {
    chainId,
    account,
    connected: active,
    connect,
    disconnect,
    isUnsupportedNetwork,
    library,
  };
};
