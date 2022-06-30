import { useRouter } from "next/router";

/* Types */
import { AuthProps } from "./auth-page.types";

/* Constants */
import { Providers } from "../../src/common/enums";
// import { IconMetaMask, IconWalletConnect } from "../../assets";

/* Styles */
import AuthPageStyled from "./auth-page.styles";

export const AuthPage = ({
  isConnected,
  onConnect,
  isUnsupportedNetwork,
}: AuthProps) => {
  const router = useRouter();

  if (isConnected) {
    router.push("/VotePage");
  }

  const onMetaMaskConnect = () => onConnect(Providers.INJECTED_CONNECTOR);

  const onWalletConnect = () => onConnect(Providers.WALLET_CONNECT);

  return (
    <AuthPageStyled.Root>
      <div className="auth-page-img" />
      <div className="auth-page-wallet-connect">
        <h2 className="auth-page-wallet-connect-title">Connect your wallet</h2>
        {isUnsupportedNetwork && (
          <div className="auth-page-wallet-connect-error">
            Unsupported network! <br />
            Please switch to one of supported networks: Ropsten or Rinkeby.
          </div>
        )}
        <div className="auth-page-wallet-connect-button-group">
          <button
            className="auth-page-wallet-connect-button-group-btn"
            type="button"
            onClick={onMetaMaskConnect}
          >
            <img src="" alt="MetaMask" />
            <span className="auth-page-wallet-connect-button-group-btn-text">
              MetaMask
            </span>
          </button>
          <button
            className="auth-page-wallet-connect-button-group-btn"
            type="button"
            onClick={onWalletConnect}
          >
            <img src="" alt="WalletConnect" />
            <span className="auth-page-wallet-connect-button-group-btn-text">
              WalletConnect
            </span>
          </button>
        </div>
      </div>
    </AuthPageStyled.Root>
  );
};
