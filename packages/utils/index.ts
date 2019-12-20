import {
  InterfaceTransaction,
  InterfaceEthereumTransaction,
  InterfaceBinanceTransaction,
  InterfaceTransactionOptions,
  InterfaceEthereumTransactionOptions,
  InterfaceBinanceTransactionOptions,
  InterfaceTransactionReceipt,
  InterfaceEthereumTransactionReceipt,
  InterfaceBinanceTransactionReceipt,
  InterfaceContract,
  InterfaceContractOptions,
  InterfaceContractReceipt,
  InterfaceContractDeployOptions
} from "./src/interfaces/index";

import { HEX, PREFIX } from "./src/constants/index";

import { TypeSDK, TypeProvider, TypeDLT, TypeAccount } from "./src/types/index";

// TODO: 1. Refactor so that DLT specific interfaces are moved into their respective packages
// TODO: 2. Export each index file as their own export.
export {
  InterfaceTransaction,
  InterfaceTransactionOptions,
  InterfaceTransactionReceipt,
  InterfaceEthereumTransaction,
  InterfaceEthereumTransactionOptions,
  InterfaceEthereumTransactionReceipt,
  InterfaceBinanceTransaction,
  InterfaceBinanceTransactionOptions,
  InterfaceBinanceTransactionReceipt,
  InterfaceContract,
  InterfaceContractOptions,
  InterfaceContractReceipt,
  InterfaceContractDeployOptions,
  HEX,
  PREFIX,
  TypeSDK,
  TypeProvider,
  TypeDLT,
  TypeAccount
};
