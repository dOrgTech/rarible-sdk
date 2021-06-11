# Rarible Protocol's JavaScript SDK Interface

### An easy-to-use interface that allows LazyMint, Buying, Selling, Bidding and relevant methods from the [Protocol Flow](https://docs.rarible.com/#protocol-flow).

---

_Disclaimer:_

> This SDK is still a `Work In Progress`, and no logic has yet been developed for the SDK. This interface will serve as a cornerstone to integrate with the functions relevant to end users / developers of the Rarible ecosystem.
>
> This project was initially funded [through a grant by the Rarible DAO to dOrg DAO in Q2 2021](https://gov.rarible.com/t/proposal-design-a-js-sdk-for-rarible-protocol/11367).

---

## Overview

With `RaribleSDK`, you can mint, buy, sell, and bid on NFTs on Ethereum (ERC-721 and ERC-1155) by accessing the most versatile functions of the Rarible Protocol. This allows developers like you to quickly iterate and build solutions for your specific use cases.

This interface aims to cover the entire [Protocol Flow](https://docs.rarible.com/#protocol-flow) for the Rarible Exchage V2:

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

const rarible = new RaribleSDK(provider, signer, { pinataCredentials });

// Upload to IPFS, Mint and Transfer
const uploadedImage: Blob = ...;
const item = await rarible.mint({
    name: 'NFT #1 from SDK',
    description: '...',
    image: uploadedImage
});

// Create a sell order for 1.75 ETH
const order = await rarible.createOrder({
    item,
    amount: "1750000000000000000"
});

console.log(order); // {..., hash: "abc123"}


// Update that sell order to do a "flash sale":
//  - Lower price from 1.75 ETH to 1.5 ETH
order = await rarible.updateOrder({
    order: order
    amount: "1500000000000000000",
    endBlockTimestamp: 120324374
});

console.log(order); // {..., hash: "cde345"}
...

const sellOrder = await rarible.getOrder("cde345");

// Create a buy order for "NFT #1 from SDK", giving 1.5 ETH.
const buyOrder = await rarible.createBuyOrder(sellOrder);

console.log(buyOrder); // {..., hash: "def456"}

...

// Seller accepts order

const sellOrder = await rarible.getOrder("abc123");

// Buyer signature is within the object
const buyOrder = await rarible.getOrder("def456");

// Call the ExchangeV2Core contract
await rarible.matchOrders(buyOrder, sellOrder);
```

**Query items by an owner**
```typescript
const items = await rarible.getItems({
    owner: 0xaddress12387
})
```

## Methods

The main interface can be found at [`./src/index.ts`](https://github.com/dOrgTech/rarible-sdk/blob/main/src/index.ts), here you can find the following methods:

#### Mint Assets (LazyMint)

- `mint(data)` -- Creates ERC721/1155 asset metadata and tokenID, uploads metadata IPFS, calls contract min function.

- `sign(data)` -- Utility function for signing multi-creator ERC721/1155 assets.

#### Discover Assets (Index)

- `getItems(filter)` -- Retrieve multiple items by filter.

#### Buy, Sell and Bids (Exchange)

- `createOrder(order)` -- Create a bid or sell order.

- `getOrder(hash)` -- Retrieve single order by hash.

- `getOrders(filter)` -- Retrieve multiple orders by filter.

- `updateOrder(order)` -- Update an order.

- `cancelOrder(order)` -- Cancel an order.

- `matchOrders(buyOrder, sellOrder)` -- Matches order to bid, executes transaction.

- `sign(data)` -- Sign order structure with ERC-712.

### Documentation

Read more about the Docs Here

- https://docs.rarible.com/
