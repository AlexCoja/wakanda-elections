import { Providers } from "../../src/common/enums/providers";

export interface AuthProps {
  isConnected: boolean;
  onConnect: (provider: Providers) => void;
  isUnsupportedNetwork: boolean;
}
