import {PinataCredentials} from "./pinata";

export interface AssetType {
    assetClass: number,
    /**
    * This is generic data because the format of data is varies by asset class.
    * For example, for an asset class of ERC-20, the data holds the address of the token.
    * For ERC-721 data holds smart contract address and tokenId.
    **/
    data: any,
}

export interface Asset {
    amount: number,
    assetType: AssetType,
}

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
    * Order can't be matched before this date (optional)
    **/
    start?: number,
    /**
    * Order can't be matched after this date (optional)
    **/
    end?: number,
}

export interface Configuration {
    apiBaseUrl?: string;
    contractsVersion?: 'v1' | 'v2';
    erc721ContractAddress?: string;
    erc1155ContractAddress?: string;
    pinataCredentials: PinataCredentials;
    subgraphUrl?: string;
}