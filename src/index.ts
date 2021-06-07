import {
  LazyMintData,
  MintData,
  TokenType,
  UploadAndMint,
} from "./models/mint";
import { Configuration } from "./models/commons";
import { MatchEvent } from "./models/events";
import { CreateOrder, Order, OrderFilter, SearchFilter } from "./models/orders";
import { Signer } from "ethers";
import { Item, ItemById, ItemsBy, ItemsList } from "./models/items";
import { Provider } from "@ethersproject/abstract-provider";

/**
 * Rarible SDK - Interface
 */
export declare class RaribleSDK {
  private provider: Provider;
  private signer: Signer;
  public readonly options: Configuration;

  constructor(provider: Provider, signer?: Signer, options?: Configuration);

  /**
   * Mint a new NFT.
   *
   * @param {object} data - Mint Data.
   */
  public mint(data: UploadAndMint | MintData): Promise<Item>;

  /**
   * Mint a new NFT.
   * This will also upload the NFT to IPFS using Pinata.
   *
   * @param {object} data - Lazy Mint Data.
   */
  public lazyMint(data: LazyMintData): Promise<Item>;

  /**
   * Get Lazy Mint NFT information.
   *
   * @param {string} id - Lazy Mint Id.
   */
  public getLazyMint(id: string): Promise<LazyMintData>;

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
   * Sign minting order (for multi-creator NFTs).
   * @param {object} data - Mint Data.
   */
  public sign(data: MintData): string;

  /**
   * Get an item.
   *
   * @param {ItemById} item - item is a unique string
   */
  public getItem(item: ItemById): Promise<LazyMintData>;

  /**
   * Get the all items from the indexer or a filtered list/subset.
   *
   * @param {ItemsBy} [filter] - By Owner, Creator, or Collection
   *
   */
  public getItems(filter?: ItemsBy): Promise<ItemsList>;

  /**
   * Buys an item or accepts a bid.
   *
   * @param {Order} buyOrder - Buying order.
   * @param {Order} sellOrder - Selling order.
   */

  public acceptOrder(buyOrder: Order, sellOrder: Order): Promise<MatchEvent>;

  /**
   * Gets an Order given an order's hash.
   *
   * @param {string} hash - Hash of the order.
   */
  public getOrder(hash: string): Promise<Order>;

  /**
   * Creates a Sell Order.
   *
   * @param {Order} order - Creates sell order.
   */
  public createOrder(order: CreateOrder | Order): Promise<Order>;

  /**
   * Update a Sell Order.
   * The price can only be lowered and not increased,
   * to increase the price you will need to cancel the order and create a new one.
   *
   * @param {Order} sellOrder - sell order.
   */
  public updateOrder(sellOrder: Order): Promise<Order>;

  /**
   * Cancel a Sell Order.
   * Canceling an order needs to be done on-chain.
   *
   * @param {Order} sellOrder - sell order.
   */
  public cancelOrder(sellOrder: Order): Promise<void>;

  /**
   * Gets a Sell Order given a filter.
   *
   * @param {OrderFilter} filter - Defines criteria to filter orders by.
   */
  public getSellOrders(filter: OrderFilter): Promise<Order>;

  /**
   * Gets Buy Orders given a filter.
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
