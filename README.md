# Rarible Protocol's JavaScript SDK Interface
### An easy-to-use interface that allows LazyMint, Buying, Selling, Bidding and relevant methods from the [Protocol Flow](https://docs.rarible.com/#protocol-flow). 
Rarible Protocol  Interface

> Disclaimer: This is still a Work in progress, and no logic has yet been developed for the SDK. This interface will serve as a cornerstone to integrate with the functions relevant to end users / developers of the Rarible ecosystem. 

## Overview

With `RaribleSDK`, you can mint, buy, sell, and bid on NFTs on Ethereum (ERC-721 and ERC-1155) by accessing the most versatile functions of the Rarible Protocol. This allows developers like you to quickly iterate and build solutions for their specific use cases.

This interface aims to cover the entire [Protocol Flow](https://docs.rarible.com/#protocol-flow). 

1. Creating ERC721/1155 Asset Metadata and Calling the Mint function
2. Asset Discovery
3. Creating a sell order
4. Accepting a buyer/bid order
5. Order Discovery
6. Matching Order
7. Updating/Canceling An Order

## Getting started

Create your own native marketplace for your non-fungible tokens, or NFTs. These can be ERC-721 or ERC-1155 (semi-fungible) items. You don't have to deploy your own smart contracts or backend orderbooks.

### Usage Example

```typescript
import { RaribleSDK } from "@rarible/sdk-js";

...

const rarible = new RaribleSDK(provider, signer);

// Upload to IPFS, Mint and Transfer
const uploadedImage: Blob = ...;
const item = await rarible.mint({
    name: 'NFT #1 from SDK',
    description: '...',
    image: uploadedImage
});

// Create a sell order for 1.75 ETH
const order = rarible.createOrder({
    item,
    amount: "1750000000000000000"
});

```

## Methods

The main interface can be found at [`./src/index.ts`](https://github.com/dOrgTech/rarible-sdk/blob/main/src/index.ts), here you can find the following methods:

`mint(data)` -- Creates ERC721/1155 asset metadata and tokenID, uploads metadata IPFS, calls contract min function.

`sign(data)` -- Utility function for signing multi-creator ERC721/1155 assets.

`getItem(id)` -- Retrieve single minted item by ID.

`getItems(filter)` -- Retrieve multiple items by filter.

`acceptOrder(buyOrder, sellOrder)` -- Matches order to bid, executes transaction.

`getOrder(hash)` -- Retrieve single order by hash.

`getOrders(filter)` -- Retrieve multiple orders by filter.

`createOrder(order)` -- Create a bid or sell order.

`updateOrder(order)` -- Update an order.

`cancelOrder(order)` -- Cancel an order.

### Documentation
Read more about the Docs Here
- https://docs.rarible.com/
