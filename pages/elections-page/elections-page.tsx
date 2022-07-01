import { useEffect, useState } from "react";

import Web3 from "web3";
import wakandaElectionsContract from "../../blockchain/wakanda-elections";

/* Stlyes */
import ElectionsPageStyled from "./elections-page.styles";

export default function ElectionsPage() {
  // const [test, setTest] = useState("");
  // useEffect(() => {
  //   testHandler();
  // }, []);

  // const testHandler = async () => {
  //   const test = await wakandaElectionsContract.methods.chairperson().call();
  //   setTest(test);
  // };

  return <ElectionsPageStyled.Root></ElectionsPageStyled.Root>;
}
