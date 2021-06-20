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
await rarible.updateOrder({
    hash: "abc123",
    amount: "1500000000000000000",
    endBlockTimestamp: 120324374
});

...

const sellOrder = await rarible.getOrder("abc123");

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

## Tentative Roadmap

### Phase I: Interface - (DONE)
1. Create Rarible SDK interface : [link](https://github.com/dOrgTech/rarible-sdk)

> The next phases listed are only a suggestion and are orientative in nature. Actual execution of the project might require modifying the content, and order of the tasks. 
>
> The process below have been set up with the intent of reducing risk and increasing the speed of iterations, by setting up a develpment environment early on, and implementing a versatile and simple functionality currently present in the protocol flow. 
> 
> In order to land on a more accurate estimation of the hours required to actually develop these, we could begin talks for a continuing the engagement, and by drafting a new `Statement of Work` document to specify detailed deliverables and budget.


### Phase II: Dev Environment - (~3wks @ 45hrs/wk)
1. Fix any minor details that would have arised since the end of the iteration. (please [consider this review](https://hackmd.io/Utz5cpVFQe2OC5MX17uuFw?view))
2. Implement Indexer functionality: `getItem()`
3. Set up dev environment, and if necessary dockerize, deploy to `npm`, etc.
4. Add minimalistic documentation for the dev environment.

### Phase III: Endpoints (~5wks @ 45hrs/wk)
1. Implement `getItems()`, `LazyMinter`, `ExchangeV2`, and other functionality from the protocol flow.
3. Request feedback from developers in the ecosystem: 
    - What usecases would yo like to see as demos?
5. Build simple demo scripts to improve end-user experience.
6. Prepare more comprehesive documentation.

## Documentation

Read more about the Docs Here

- https://docs.rarible.com/


