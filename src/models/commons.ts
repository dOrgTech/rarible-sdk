import {PinataCredentials} from "./pinata";

export interface AssetType {
    /**
    * This is a hash of the asset class's name.
    * Possible class names are ETH, ERC20, ERC721, & ERC1155
    * Example hash generation: Web3.utils.soliditySha3("ETH")
    **/
    assetClass: string,
    /**
    * This is generic data because the format of data is varies by asset class.
    * For example, for an asset class of ERC-20, the data holds the address of the token.
    * For ERC-721 data holds smart contract address and tokenId.
    **/
    data: any
}

export interface Asset {
    value: number,
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