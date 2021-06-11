import { BigNumberish } from "ethers";
import { PartOwner } from "./mint";
import { Item } from "./items";

export interface Order {
  type: "RARIBLE_V1" | "RARIBLE_V2";
  makerAddress: string;
  makeAsset: Asset;
  takerAddress?: string;
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

export interface ETHAssetType {
  assetClass: "ETH";
}

export interface ERC20TokenAssetType {
  assetClass: "ERC721" | "ERC1155";

  contract: string;
}

export interface NFTAssetType {
  assetClass: "ERC721" | "ERC1155";

  contract: string;
  tokenId: string;
}

export type AssetType = ETHAssetType | ERC20TokenAssetType | NFTAssetType;

export interface CreateOrder {
  item: Item;
  amount: BigNumberish;
  data?: OrderData;
  startBlockTimestamp?: number;
  endBlockTimestamp?: number;
  /**
   * Default to signer address.
   */
  maker?: string;
  /**
   * If not specify, the default value is ETH
   */
  amountType?: AssetType;
  /**
   * Order Signature.
   * if not specified, the signature will be created before creating the order.
   */
  signature?: string;
}

export interface UpdateOrder extends CreateOrder {
  hash: string;
}

export interface Asset {
  value: BigNumberish;
  assetType: AssetType;
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

export interface OrderList {
  orders: Order[];
  continuation: string;
}

export interface BaseOrderFilter {
  origin?: string;
  sort?: "LAST_UPDATE";
  size?: number;
  continuation?: string;
}

export interface OrderMakerFilter extends BaseOrderFilter {
  makerAddress: string;
}

export interface OrderItemFilter extends BaseOrderFilter {
  contractAddress: string;
  tokenId: BigNumberish;
}

export interface OrderCollectionFilter extends BaseOrderFilter {
  collectionAddress: string;
}

export type OrdersFilter =
  | BaseOrderFilter
  | OrderMakerFilter
  | OrderItemFilter
  | OrderCollectionFilter;

export type BidsFilter = OrderMakerFilter | OrderItemFilter;

export interface MatchEvent {
  leftAsset: AssetType;
  leftMaker: string;
  newLeftFill: number;
  newRightFill: number;
  number: string;
  rightHash: string;
  rightMaker: string;
  rightAsset: AssetType;
}
