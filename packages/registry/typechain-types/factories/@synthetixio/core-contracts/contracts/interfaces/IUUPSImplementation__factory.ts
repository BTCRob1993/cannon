/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IUUPSImplementation,
  IUUPSImplementationInterface,
} from "../../../../../@synthetixio/core-contracts/contracts/interfaces/IUUPSImplementation";

const _abi = [
  {
    inputs: [],
    name: "getImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "simulateUpgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IUUPSImplementation__factory {
  static readonly abi = _abi;
  static createInterface(): IUUPSImplementationInterface {
    return new utils.Interface(_abi) as IUUPSImplementationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUUPSImplementation {
    return new Contract(address, _abi, signerOrProvider) as IUUPSImplementation;
  }
}