export interface MintData {
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
   * supply should be supplied as an uint256, this is the number of copies (Editions)
   * of this token that exist. (Maximum value is 2**256 - 1).
   */
  supply?: number; // Supply
  /**
   * creators is supplied as an array of Owner, this array should contain all
   * the addresses (with their respective part of the creation - in basis points)
   * who are considered the authors/creators of this token.
   * The address array is public and can be queried by anyone.
   * Sum of fields value in this array should be 10000 (100% in basis points)
   */
  creators: Owner[];
  /**
   * royalties are an array of addresses and values.
   * The fees array is public and can be queried by anyone.
   * Values are specified in basis points. So for example, 200 means 2%
   */
  royalties: Owner[];
  /**
   * Signatures is an array of wallet signatures for this transaction from every creator,
   * the only exception to this is when the creator sends the mint transaction - then empty signature
   * can be passed for the executing transaction creator.
   */
  signatures: string[];
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

export interface Owner {
  address: string; // Address of the Owner
  value: number; // Percentage of the Owner with 2 decimals. Ex: 10000 -> 100%, 9705 -> 97.05%
}
