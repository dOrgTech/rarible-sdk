import { PinataCredentials } from "./pinata";

export interface AssetType {
  /**
   * This is a hash of the asset class's name.
   * Possible class names are ETH, ERC20, ERC721, & ERC1155
   * Example hash generation: Web3.utils.soliditySha3("ETH")
   **/
  assetClass: string;
  /**
   * This is generic data because the format of data is varies by asset class.
   * For example, for an asset class of ERC-20, the data holds the address of the token.
   * For ERC-721 data holds smart contract address and tokenId.
   **/
  data: any;
}

export interface Asset {
  value: number;
  assetType: AssetType;
}

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
