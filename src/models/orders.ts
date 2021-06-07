import { Asset } from "./commons";
import { BigNumberish } from "ethers";
import { PartOwner } from "./mint";

/*
 *
 * Order creation.
 *
 */

export interface Order {
  type: "RARIBLE_V1" | "RARIBLE_V2";
  makerAddress: string;
  makeAsset: Asset;
  takerAddress: string;
  takeAsset: Asset;
  startBlockTimestamp?: number;
  endBlockTimestamp?: number;
  data?: OrderData | string;
  fill?: number;
  makeStock?: number;
  cancelled?: boolean;
  createdAt?: string;
  lastUpdateAt?: string;
  signature?: string;
  hash?: string;
}

export interface OrderDataLegacy {
  dataType: "LEGACY";
  fee: BigNumberish;
}

export interface OrderDataV1 {
  dataType: "RARIBLE_V2_DATA_V1";
  beneficiary: string;
  originFees: PartOwner[];
}

type OrderData = OrderDataLegacy | OrderDataV1;

/*
 *
 * Order filters for searching
 * https://docs.rarible.com/exchange/order-discovery
 *
 */

export interface OrderByHash extends Pick<Order, "hash"> {}

export interface BaseOrderFilter {
  origin: string;
  sort?: "LAST_UPDATE";
  size?: number;
  continuation?: string;
}

export interface OrderCollectionFilter extends BaseOrderFilter {
  collectionAddress: string;
}

export interface OrderMakerFilter extends BaseOrderFilter {
  makerAddress: string;
}

export interface OrderItemFilter extends BaseOrderFilter {
  contractAddress: string;
  tokenId: BigInteger;
}

export interface Sell extends BaseOrderFilter {
  type: "sell";
}

export interface SellByMaker extends OrderMakerFilter {
  type: "sell_by_maker";
}

export interface SellByItem extends OrderItemFilter {
  type: "sell_by_item";
}

export interface SellByCollection extends OrderCollectionFilter {
  type: "sell_by_collection";
}

export interface BidByItem extends OrderItemFilter {
  type: "bid_by_item";
}

export interface BidByMaker extends OrderMakerFilter {
  type: "bid_by_maker";
}

export type OrderFilter =
  | Sell
  | SellByMaker
  | SellByItem
  | SellByItem
  | BidByItem
  | BidByMaker;

export interface OrderList {
  total: number;
  continuation?: string;
  items: Order[];
}
