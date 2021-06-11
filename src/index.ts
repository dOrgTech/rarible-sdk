import {
  LazyMintData,
  MintData,
  TokenType,
  UploadAndMint,
} from "./models/mint";
import { Configuration } from "./models/commons";
import {
  BaseOrderFilter,
  BidsFilter,
  CreateOrder,
  MatchEvent,
  Order,
  OrderList,
  OrdersFilter,
  UpdateOrder,
} from "./models/orders";
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

  /**
   * Rarible SDK Constructor.
   *
   * @param {Provider} provider - Network Provider.
   * @param {Signer} signer - Wallet Signer.
   * @param {Configuration} config - SDK Config.
   */
  constructor(provider: Provider, signer?: Signer, config?: Configuration);

  /**
   * Mint a new NFT.
   *
   * @param {UploadAndMint | MintData} data - Mint Data.
   */
  public mint(data: UploadAndMint | MintData): Promise<Item>;

  /**
   * Mint a new NFT.
   * This will also upload the NFT to IPFS using Pinata.
   *
   * @param {LazyMintData} data - Lazy Mint Data.
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
   * @param {TokenType} tokenType - Token Type ERC721 or ERC1155.
   * @param {string} minter - Token Minter.
   * @returns {Promise<string>} - TokenId
   * @private
   */
  private getTokenId(tokenType: TokenType, minter: string): Promise<string>;

  /**
   * Sign minting order (for multi-creator NFTs).
   * @param {MintData} data - Mint Data.
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
   * Sign order.
   *
   * @param {object} order - Order Data.
   */
  public signOrder(order: CreateOrder | Order): Promise<string>;

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
   * @param {UpdateOrder} order - Order to be update.
   */
  public updateOrder(order: UpdateOrder | Order): Promise<Order>;

  /**
   * Cancel a Sell Order.
   * Canceling an order needs to be done on-chain.
   *
   * @param {Order} sellOrder - sell order.
   */
  public cancelOrder(sellOrder: Order): Promise<void>;

  /**
   * Create a Buy Order
   * @param {Order} buyOrder - Order to be bought.
   */
  public createBuyOrder(buyOrder: Order): Promise<Order>;

  /**
   * Buys an item or accepts a bid.
   *
   * @param {Order} buyOrder - Buying order.
   * @param {Order} sellOrder - Selling order.
   */

  public matchOrders(buyOrder: Order, sellOrder: Order): Promise<MatchEvent>;

  /**
   * Gets an Order given an order's hash.
   *
   * @param {string} hash - Hash of the order.
   */
  public getOrder(hash: string): Promise<Order>;

  /**
   * Gets a Sell Order given a filter.
   *
   * @param {BaseOrderFilter} filter - Defines criteria to filter orders by.
   */
  public getOrders(filter: OrdersFilter): Promise<OrderList>;

  /**
   * Gets Buy Orders given a filter.
   *
   * @param {BaseOrderFilter} filter - Defines criteria to filter orders by.
   */
  public getBids(filter: BidsFilter): Promise<OrderList>;
}
