import {PinataCredentials} from "./pinata";

export interface RaribleSDKConfiguration {
    pinataCredentials: PinataCredentials;
    erc721ContractAddress?: string;
    erc1155ContractAddress?: string;
    apiBaseUrl?: string;
    subgraphUrl?: string;
}