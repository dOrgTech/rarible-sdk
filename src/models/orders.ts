import { Asset } from "./commons";
import { BigNumberish } from "ethers";
import { PartOwner } from "./mint";

export interface Order {
  type: "RARIBLE_V1" | "RARIBLE_V2";
  makerAddress: string;
  makeAsset: Asset;
  takerAddress: string;
  takeAsset: Asset;
  /**
   * Random number to distinguish between a maker's orders
   **/
  salt: number;
  /**
   * Order can't be matched before this block timestamp (optional)
   **/
  startBlockTimestamp?: number;
  /**
   * Order can't be matched after this block timestamp (optional)
   **/
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
  /**
   * Beneficiary Address.
   */
  beneficiary: string;
  originFees: PartOwner[];
}

type OrderData = OrderDataLegacy | OrderDataV1;

export interface OrderFilter {
  origin: string;
  sort?: "LAST_UPDATE";
  size?: number;
  continuation?: string;
}

export interface OrderCollectionFilter extends OrderFilter {
  collectionAddress: string;
}

export interface OrderMakerFilter extends OrderFilter {
  makerAddress: string;
}

export interface OrderItemFilter extends OrderFilter {
  contractAddress: string;
  tokenId: BigInteger;
}

export interface SearchFilter extends OrderFilter {
  type:
    | "sell"
    | "sell_by_maker"
    | "sell_by_item"
    | "sell_by_collection"
    | "bid_by_item"
    | "bid_by_maker";
  maker?: string;
  token?: string;
  tokenId?: BigInteger;
  collection?: string;
}
