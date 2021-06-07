import { MintData } from "./models/mint";
import { Configuration } from "./models/commons";
import { MatchEvent } from "./models/events";
import { Item, ItemList, ItemById, ItemFilter } from "./models/items";
import { Order, OrderList, OrderByHash, OrderFilter } from "./models/orders";
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
   * @param {object} data - Mint Data.
   */
  public mint(data: MintData): Promise<Item>;

  /**
   * Sign minting order (for multi-creator NFTs).
   * @param {object} data - Mint Data.
   */

  public sign(data: MintData): string;

  /**
   * Get an item by its id.
   *
   * @param {ItemById} id - id is a unique string
   */
  public getItem(id: ItemById): Promise<Item>;

  /**
   * Gets items by filter.
   *
   * @param {ItemFilter} filter - By Owner, Creator, or Collection
   *
   */
  public getItems(filter: ItemFilter): Promise<ItemList>;

  /**
   * Matches order to bid, executes transaction.
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
  public getOrder(hash: OrderByHash): Promise<Order>;

  /**
   * Gets a list of Orders given a filter.
   *
   * @param {OrderFilter} filter - Defines criteria to filter orders by.
   */
  public getOrders(filter: OrderFilter): Promise<OrderList>;

  /**
   * Creates an Order.
   *
   * @param {Order} order - Creates order.
   */
  public createOrder(order: Order): Promise<Order>;

  /**
   * Updates an order.
   *
   * @param {Order} order - order.
   */
  public updateOrder(order: Order): Promise<Order>;

  /**
   * Cancels an order.
   * Canceling an order needs to be done on-chain.
   *
   * @param {Order} order - order.
   */
  public cancelOrder(order: Order): Promise<Order>;
}
