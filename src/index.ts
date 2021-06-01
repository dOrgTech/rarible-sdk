import Web3 from "web3";
import Web3Core from "web3-core";
import { BasicMintMetadata, MintData, MintMetadata } from "./models/mint";
import { Configuration, Order } from "./models/commons";
import { MatchEvent } from "./models/events";

/**
 * Rarible SDK - Interface
 */
export declare class RaribleSDK {
  private provider: Web3Core.provider;
  private web3: Web3;

  constructor(provider: Web3Core.provider, options: Configuration);

  /**
   * Buys an item or accepts a bid.
   *
   * @param {Order} buyOrder - Buying order.
   * @param {string} buySignature - Buyer's signature.
   * @param {Order} sellOrder - Selling order.
   * @param {string} sellSignature - Sellers's signature (optional).
   */
   public acceptOrder(
    buyOrder: Order,
    buyerSignature: string,
    sellOrder: Order,
    sellerSignature?: string,
  ): Promise<MatchEvent>;

  /**
   * Mint a new NFT.
   * This will required that your NFT is already hosted in IPFS.
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
   */
  public mint(
    data: MintData,
    metadata: BasicMintMetadata
  ): Promise<MintMetadata>;
}
