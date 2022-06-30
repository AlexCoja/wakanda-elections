import { AuthPage } from "./auth-page";

/* Hooks */
import { useWalletConnectHook } from "../src/common/hooks";

const InitalPage = () => {
  const { connect, connected, isUnsupportedNetwork } = useWalletConnectHook();

  return (
    <AuthPage
      isConnected={connected}
      onConnect={connect}
      isUnsupportedNetwork={isUnsupportedNetwork}
    />
  );
};

export default InitalPage;
