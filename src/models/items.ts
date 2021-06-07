import { PartOwner } from "./mint";
import { ItemTransfer } from "./transfers";

export interface Item {
  id: string;
  contract: string;
  tokenId: string;
  creator?: string;
  supply: number;
  /**
   * Left lazy items (0 if minted on-chain)
   */
  lazySupply: number;
  owners: string[];
  royalties: PartOwner[];
  pending: ItemTransfer[];
}

export interface ItemsList {
  total: number;
  continuation?: string;
  items: Item[];
}

export interface ItemById extends Pick<Item, "id"> {}

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
