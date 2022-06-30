import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { Networks } from "../../enums/networks";

const RPC_URLS: { [chainId: number]: string } = {
  [Networks.ROPSTEN]: process.env.NEXT_PUBLIC_RPC_URL_3 as string,
  [Networks.RINKEBY]: process.env.NEXT_PUBLIC_RPC_URL_4 as string,
};

const injectedConnector = new InjectedConnector({
  supportedChainIds: [Networks.ROPSTEN, Networks.RINKEBY],
});

const walletconnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

export const connectors = {
  injected: injectedConnector,
  walletConnect: walletconnect,
};
