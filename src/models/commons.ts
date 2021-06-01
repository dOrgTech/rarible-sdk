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

export interface Configuration {
    apiBaseUrl?: string;
    contractsVersion?: 'v1' | 'v2';
    erc721ContractAddress?: string;
    erc1155ContractAddress?: string;
    pinataCredentials: PinataCredentials;
    subgraphUrl?: string;
}