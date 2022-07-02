import { Networks } from "../enums/networks";

interface IContracts {
  [key: number]: string;
}

export const Contracts: IContracts = {
  [Networks.ROPSTEN]: "0xC19eeb5018cA9ff2878d3FB45E362a3137717aD7",
  [Networks.RINKEBY]: "0xC19eeb5018cA9ff2878d3FB45E362a3137717aD7",
};
