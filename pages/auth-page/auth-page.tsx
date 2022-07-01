import { useRouter } from "next/router";

/* Components */
import { Button } from "../../src/components/atoms";

/* Types */
import { AuthProps } from "./auth-page.types";

/* Constants */
import { Providers } from "../../src/common/enums";
import {
  ALLOWED_NETWORKS,
  MAIN_TITLE,
  META_MASK_BUTTON,
  UNSUPORTED_NETWORK,
  WALLET_CONNECT_BUTTON,
} from "./auth-page.constants";

/* Styles */
import AuthPageStyled from "./auth-page.styles";

export const AuthPage = ({
  isConnected,
  onConnect,
  isUnsupportedNetwork,
}: AuthProps) => {
  const router = useRouter();

  if (isConnected) {
    router.push("/elections-page");
  }

  const onMetaMaskConnect = () => onConnect(Providers.INJECTED_CONNECTOR);
  const onWalletConnect = () => onConnect(Providers.WALLET_CONNECT);

  return (
    <AuthPageStyled.Root>
      {isUnsupportedNetwork && (
        <AuthPageStyled.InfoBanner>
          {UNSUPORTED_NETWORK} <br />
          {ALLOWED_NETWORKS}
        </AuthPageStyled.InfoBanner>
      )}
      <AuthPageStyled.InnerWrapper>
        <AuthPageStyled.MainTitle>{MAIN_TITLE}</AuthPageStyled.MainTitle>
        <AuthPageStyled.ButtonWrapper>
          {/* Meta Mask button */}
          <Button onClick={onMetaMaskConnect} btnText={META_MASK_BUTTON} />

          {/* Wallet Connect */}
          <Button onClick={onWalletConnect} btnText={WALLET_CONNECT_BUTTON} />
        </AuthPageStyled.ButtonWrapper>
      </AuthPageStyled.InnerWrapper>
    </AuthPageStyled.Root>
  );
};
