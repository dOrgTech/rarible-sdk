import { Asset } from './commons'

export interface Order {
  makerAddress: string
  makeAsset: Asset
  takerAddress: string
  takeAsset: Asset
  /**
   * Random number to distinguish between a maker's orders
   **/
  salt: number
  /**
   * Order can't be matched before this block timestamp (optional)
   **/
  startBlockTimestamp?: number
  /**f
   * Order can't be matched after this block timestamp (optional)
   **/
  endBlockTimestamp?: number
}

export interface OrderFilter {
    origin: string,
    sort?: 'LAST_UPDATE',
    size?: number,
    continuation?: string, 
}

export interface OrderCollectionFilter extends OrderFilter {
  collectionAddress: string
}

export interface OrderMakerFilter extends OrderFilter {
  makerAddress: string
}

export interface OrderItemFilter extends OrderFilter {
  contractAddress: string
  tokenId: BigInteger
}

export interface SearchFilter extends OrderFilter{
    type: "sell" | "sell_by_maker" | "sell_by_item" | "sell_by_collection" | "bid_by_item" | "bid_by_maker",
    maker?: string,
    token?: string,
    tokenId?: BigInteger,
    collection?: string
}

/**
 * Sell Orders
 **/

export interface SellOrder extends Order {
  type: 'RARIBLE_V1' | 'RARIBLE_V2'
  data: SellData
  /**
   * signature: Mentioned in API docs but
   * should be calculated under the hood
   * https://docs.rarible.com/exchange/creating-a-sell-order
   * https://api-reference.rarible.com/#operation/createOrUpdateOrder
   **/
}

// If supporting LEGACY, need 'fee'.
export interface SellData {
  dataType: 'RARIBLE_V2_DATA_V1' | 'LEGACY'
  payouts?: Allotment[]
  originFees?: Allotment[]
  fee?: number
}

export interface Allotment {
  account: string
  value: number
}

export interface SellOrderResponse extends SellOrder {
  fill: number
  makeStock: number
  cancelled: boolean
  createdAt: string
  lastUpdateAt: string
  signature: string
  hash: string
}