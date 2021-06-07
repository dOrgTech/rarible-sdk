import { BigNumberish } from "ethers";
import { ItemTransfer } from "./transfers";
import { MintData } from "./mint";

export interface Item extends Omit<MintData, "metadata"> {
  tokenId: BigNumberish;
  tokenUri: string;
}

export interface ItemById extends Pick<Item, "tokenId"> {}

export interface BaseItemFilter {
  continuation?: string;
  size?: number;
}

export interface ItemsByOwner extends BaseItemFilter {
  owner: string;
}

export interface ItemsByCreator extends BaseItemFilter {
  creator: string;
}

export interface ItemsByCollection extends BaseItemFilter {
  creator: string;
}

export type ItemFilter = ItemsByOwner | ItemsByCreator | ItemsByCollection;

export interface ItemList {
  total: number;
  continuation?: string;
  items: Item[];
}
