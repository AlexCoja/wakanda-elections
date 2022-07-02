import { toast } from "react-toastify";
import wakandaToken, { web3 } from "../../../blockchain/wakanda-token";

export const sendToken = async (
  receiverAddres: string | undefined | null,
  tokenValue: number
) => {
  const nonce = await web3.eth.getTransactionCount(
    "0xC19eeb5018cA9ff2878d3FB45E362a3137717aD7", //owner address
    "latest"
  );
  //convert Eth to wei
  const value = web3.utils.toWei(tokenValue.toString(), "ether");

  const data = await wakandaToken.methods
    .transfer(receiverAddres, tokenValue)
    .encodeABI();

  const trasaction = {
    to: "0xC19eeb5018cA9ff2878d3FB45E362a3137717aD7", //owner address
    value: value,
    gasLimit: 6721975,
    gasPrice: "20000000000",
    nonce: nonce,
    data: data,
  };

  const signTr = await web3.eth.accounts.signTransaction(
    trasaction,
    "def890eaaf426bcb0c16c37ba2987da88c906bcddb18f222bb637bd4f57a79e0" //owner PRIVATE_KEY
  );

  if (signTr.rawTransaction) {
    web3.eth.sendSignedTransaction(
      signTr.rawTransaction,
      function (error, hash) {
        if (error) {
          toast.error(error.message);
        } else {
          toast.success(`Successfully done! Hash: ${hash}`);
        }
      }
    );
  }
};
