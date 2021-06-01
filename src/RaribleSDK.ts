import Web3 from "web3";
import Web3Core from "web3-core";
import { BasicMintMetadata, MintData, MintMetadata } from "./models/mint";
import { PinataCredentials } from "./models/pinata";

/**
 * Rarible SDK - Interface
 */
export declare class RaribleSDK {
  private provider: Web3Core.provider;
  private web3: Web3;

  constructor(
    provider: Web3Core.provider,
    options: {
      erc721ContractAddress?: string;
      erc1155ContractAddress?: string;
      apiBaseUrl?: string;
      subgraphUrl?: string;
    }
  );

  /**
   * Mint a new NFT.
   *
   * @param {object} data - Mint Data.
   *  @param {string} data.to - Address to transfer the NFT.
   *  @param {object} data.data - NFT Metadata.
   *  @param {object} data.uri - NFT URI.
   *  @param {number} [data.supply] - Supply amount (only for ERC-1155 tokens).
   *  @param {object[]} [data.creators] - Array of creators.
   *  @param {object[]} [data.royalties] - Array of royalties.
   * @param {object} metadata - Mint Metadata.
   */
  public mint(data: MintData, metadata: MintMetadata): Promise<MintMetadata>;

  /**
   * Mint a new NFT.
   * This will also upload the NFT to IPFS using Pinata.
   *
   * @param {object} data - Mint Data.
   *  @param {string} data.to - Address to transfer the NFT.
   *  @param {object} data.data - NFT Metadata.
   *  @param {object} data.uri - NFT URI.
   *  @param {number} [data.supply] - Supply amount (only for ERC-1155 tokens).
   *  @param {object[]} [data.creators] - Array of creators.
   *  @param {object[]} [data.royalties] - Array of royalties.
   * @param {object} metadata - Mint Metadata.
   * @param {object} pinataCredentials - Pinata Credentials to upload NFT to IPFS using Pinata.
   */
  public mint(
    data: MintData,
    metadata: BasicMintMetadata,
    pinataCredentials: PinataCredentials
  ): Promise<MintMetadata>;
}
