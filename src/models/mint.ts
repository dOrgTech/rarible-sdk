import { BigNumberish } from "ethers";
import { ItemTransfer } from "./transfers";

export interface MintData {
  /**
   *
   *  This is the bare minimum info needed to create an NFT. The SDK should handle assigning
   *  tokenID, pushing metadata to IPFS, etc.
   *
   **/

  // Defaults to signer address if single creator and `to` not speficied
  to?: string;

  // Defaults to [signer] if not specified.
  creators?: PartOwner[];

  // Signatures will be required for multi-creator NFTs.
  // Defaults to [] if not specified.
  signatures?: Signature[];

  // Defaults to [] if not specified.
  royalties: PartOwner[];

  // Contract type (ERC721 vs 1155) is inferred by presence of supply field with value > 1.
  // Defaults to 1.
  supply?: BigNumberish;

  // Required metadata.
  metadata: MintMetadata;
}

export interface Signature {
  signature: string;
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

export interface PartOwner {
  address: string; // Address of the Owner
  value: BigNumberish; // Percentage of the Owner with 2 decimals. Ex: 10000 -> 100%, 9705 -> 97.05%
}
