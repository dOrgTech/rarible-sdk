import { BigNumberish } from "ethers";
import { ItemTransfer } from "./transfers";

export type TokenType = "ERC721" | "ERC1155";

export interface PartOwner {
  address: string; // Address of the Owner
  value: BigNumberish; // Percentage of the Owner with 2 decimals. Ex: 10000 -> 100%, 9705 -> 97.05%
}

export interface ERC721Data {
  /**
   * tokenId is an uint256, this is a unique identifying number for the token.
   * The tokenId typically is made up of two sections, the first 20 bytes in the users' address
   * and the next 12 bytes can be any random number.
   */
  tokenId: string;
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

export interface ERC1155Data extends ERC721Data {
  /**
   * supply should be supplied as an uint256, this is the number of copies (Editions)
   * of this token that exist. (Maximum value is 2**256 - 1).
   */
  supply: BigNumberish;
}

export type NFTData = ERC721Data | ERC1155Data;

export interface ERC721LazyMint extends ERC721Data {
  /**
   * NFT as ERC-721 Non-Fungible Token Standard.
   */
  "@type": "ERC721";

  contract: string;
}

export interface ERC1155LazyMint extends ERC1155Data {
  /**
   * NFT as ERC-1155 Multi Token Standard.
   */
  "@type": "ERC1155";

  contract: string;
}

export type LazyMintData = ERC721LazyMint | ERC1155LazyMint;

export interface MintData extends Omit<NFTData, "tokenId"> {
  /**
   * Address to transfer the NFT after minting,
   * And this address will be considered as the Owner.
   * The TokenId will the generated based on this address.
   */
  to: string;

  /**
   * You can create NFT by uploading image to IPFS
   */
  metadata: NFTMetadata;
}

/**
 * You can mint your NFT by letting our SDK
 * handle the upload process using Pinata.
 */
export interface UploadAndMint extends Omit<NFTData, "tokenId" | "uri" | "royalties"> {
  /**
   * Default to signer's address
   */
  to?: string;
  name: string;
  description: string;
  image: Blob;
  /**
   * Default to 100 (10%)
   */
  royalties: number | PartOwner[];
  animation?: Blob;
  attributes?: Record<string, string>;
}

export interface NFTMetadata {
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
