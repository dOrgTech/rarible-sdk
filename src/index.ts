import {
  BasicMintMetadata,
  LazyMintData,
  LazyMintResponse,
  MintData,
  MintMetadata,
  TokenType,
} from "./models/mint";
import { Configuration } from "./models/commons";
import { MatchEvent } from "./models/events";
import {
  Order,
  OrderFilter,
  SellOrder,
  SellOrderResponse,
  SearchFilter,
} from "./models/orders";
import { Signer } from "ethers";

/**
 * Rarible SDK - Interface
 */
export declare class RaribleSDK {
  private signer: Signer;
  public readonly options: Configuration;

  constructor(provider: Signer, options: Configuration);

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

  /**
   * Mint a new NFT.
   * This will also upload the NFT to IPFS using Pinata.
   *
   * @param {object} data - Lazy Mint Data.
   */
  public lazyMint(data: LazyMintData): Promise<LazyMintResponse>;

  /**
   * Get Lazy Mint NFT information.
   *
   * @param {string} id - Lazy Mint Id.
   */
  public getLazyMint(id: LazyMintResponse["id"]): Promise<LazyMintData>;

  /**
   * Get the next available tokenId for minter.
   *
   * @param {string} tokenType - Token Type ERC721 or ERC1155.
   * @param {string} minter - Token Minter.
   * @returns {Promise<string>} - TokenId
   * @private
   */
  private getTokenId(tokenType: TokenType, minter: string): Promise<string>;

  /**
   * Buys an item or accepts a bid.
   *
   * @param {Order} buyOrder - Buying order.
   * @param {string} buyerSignature - Buyer's signature.
   * @param {Order} sellOrder - Selling order.
   * @param {string} sellerSignature - Sellers's signature (optional).
   */
  public acceptOrder(
    buyOrder: Order,
    buyerSignature: string,
    sellOrder: Order,
    sellerSignature?: string
  ): Promise<MatchEvent>;

  /**
   * Gets an Order given an order's hash.
   *
   * @param {string} hash - Hash of the order.
   */
  public getOrder(hash: string): Promise<Order>;

  /**
   * Creates a Sell Order.
   *
   * @param {SellOrder} sellOrder - Creates sell order.
   */
  public createSellOrder(sellOrder: SellOrder): Promise<SellOrderResponse>;

  /**
   * Update a Sell Order.
   * The price can only be lowered and not increased,
   * to increase the price you will need to cancel the order and create a new one.
   *
   * @param {SellOrder} sellOrder - sell order.
   */
  public updateSellOrder(sellOrder: SellOrder): Promise<SellOrderResponse>;

  /**
   * Cancel a Sell Order.
   * Canceling an order needs to be done on-chain.
   *
   * @param {SellOrder} sellOrder - sell order.
   */
  public cancelSellOrder(sellOrder: SellOrder): Promise<void>;

  /**
   * Gets a Sell Order given a filter.
   *
   * @param {OrderFilter} filter - Defines criteria to filter orders by.
   */
  public getSellOrders(filter: OrderFilter): Promise<Order>;

  /**
   * Gets a Buy Order given a filter.
   *
   * @param {OrderFilter} filter - Defines criteria to filter orders by.
   */
  public getBuyOrder(filter: OrderFilter): Promise<Order>;

  /**
   * Search orders
   *
   * @param {SearchFilter} filter - Defines criteria to filter orders by.
   */
  public searchOrders(filter: SearchFilter): Promise<Order>;
}
