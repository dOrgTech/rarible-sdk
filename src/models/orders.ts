import { Asset } from "./commons";

export interface Order {
    makerAddress: string,
    makeAsset: Asset,
    takerAddress: string,
    takeAsset: Asset,
    /**
    * Random number to distinguish between a maker's orders
    **/
    salt: number,
    /**
    * Order can't be matched before this block timestamp (optional)
    **/
    startBlockTimestamp?: number,
    /**
    * Order can't be matched after this block timestamp (optional)
    **/
    endBlockTimestamp?: number,
}

export interface OrderFilter {
    origin: string,
    sort: 'LAST_UPDATE',
    size: number,
    continuation?: string, 
}

export interface OrderCollectionFilter extends OrderFilter {
    collectionAddress: string,
}

export interface OrderMakerFilter extends OrderFilter {
    makerAddress: string,
}

export interface OrderItemFilter extends OrderFilter {
    contractAddress: string,
    tokenId: BigInteger,
}