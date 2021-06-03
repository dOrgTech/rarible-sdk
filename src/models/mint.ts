import { BigNumberish } from "ethers";
import { ItemTransfer } from "./transfers";

export type TokenType = "ERC721" | "ERC1155";

export interface PartOwner {
  address: string; // Address of the Owner
  value: BigNumberish; // Percentage of the Owner with 2 decimals. Ex: 10000 -> 100%, 9705 -> 97.05%
}

export interface ERC721MintData {
  /**
   * Address to transfer the NFT after minting,
   * And this address will be considered as the Owner.
   */
  to: string;
  /**
   * This is the suffix for the tokenURI, typically our prefix would be "ipfs://".
   */
  uri: string;
  /**
   * creators is supplied as an array of Owner, this array should contain all
   * the addresses (with their respective part of the creation - in basis points)
   * who are considered the authors/creators of this token.
   * The address array is public and can be queried by anyone.
   * Sum of fields value in this array should be 10000 (100% in basis points)
   */
  creators: PartOwner[];
  /**
   * royalties are an array of addresses and values.
   * The fees array is public and can be queried by anyone.
   * Values are specified in basis points. So for example, 200 means 2%
   */
  royalties: PartOwner[];
  /**
   * Signatures is an array of wallet signatures for this transaction from every creator,
   * the only exception to this is when the creator sends the mint transaction - then empty signature
   * can be passed for the executing transaction creator.
   */
  signatures: string[];
}

export interface ERC1155MintData extends ERC721MintData {
  /**
   * supply should be supplied as an uint256, this is the number of copies (Editions)
   * of this token that exist. (Maximum value is 2**256 - 1).
   */
  supply: BigNumberish;
}

export type MintData = ERC721MintData | ERC1155MintData;

export interface ERC721LazyMint extends Omit<ERC721MintData, "to"> {
  /**
   * NFT as ERC-721 Non-Fungible Token Standard.
   */
  "@type": "ERC721";

  contract: string;
}

export interface ERC1155LazyMint extends Omit<ERC1155MintData, "to"> {
  /**
   * NFT as ERC-1155 Multi Token Standard.
   */
  "@type": "ERC1155";

  contract: string;
}

export type LazyMintData = ERC721LazyMint | ERC1155LazyMint;

export interface LazyMintResponse {
  id: string;
  contract: string;
  tokenId: string;
  creator?: string;
  supply: number;
  lazySupply: number;
  owners: string[];
  royalties: PartOwner[];
  pending: ItemTransfer[];
}

export interface MintMetadata {
  name: string;
  description: string;
  image: string;
  external_url: string;
  animation_url: string;

  attributes?: {
    key: string;
    trait_type: string;
    value: string;
  }[];
}

export interface BasicMintMetadata
  extends Pick<MintMetadata, "name" | "description" | "attributes"> {
  image: Blob;
  animation: Blob;
}
