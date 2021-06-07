import { BigNumberish } from "ethers";
import { ItemTransfer } from "./transfers";
import { MintData } from "./mint";

export interface PartOwner {
  address: string; // Address of the Owner
  value: BigNumberish; // Percentage of the Owner with 2 decimals. Ex: 10000 -> 100%, 9705 -> 97.05%
}

export interface Item extends Omit<MintData, "metadata"> {
  tokenId: BigNumberish;
  tokenUri: string;
}

export interface ItemById extends Pick<Item, "tokenId"> {}

export interface ItemsPagination {
  continuation?: string;
  size?: number;
}

export interface ItemsByOwner extends ItemsPagination {
  owner: string;
}

export interface ItemsByCreator extends ItemsPagination {
  creator: string;
}

export interface ItemsByCollection extends ItemsPagination {
  creator: string;
}

export type ItemsBy =
  | ItemsPagination
  | ItemsByOwner
  | ItemsByCreator
  | ItemsByCollection;

export interface ItemList {
  total: number;
  continuation?: string;
  items: Item[];
}
