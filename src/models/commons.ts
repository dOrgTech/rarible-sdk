import { PinataCredentials } from "./pinata";

export interface Configuration {
  /**
   * Rarible API URL.
   * API Environments:
   * Development = https://api-dev.rarible.com
   * Staging     = https://api-staging.rarible.com
   * Production  = https://api.rarible.com
   */
  apiBaseUrl?: string;
  contractsVersion?: "v1" | "v2";
  erc721AssetContractAddress?: string;
  erc1155AssetContractAddress?: string;
  exchangeContractAddress?: string;
  nftTransferProxyContractAddress?: string;
  erc20TransferProxyContractAddress?: string;
  subgraphUrl?: string;
  pinataCredentials: PinataCredentials;
}
