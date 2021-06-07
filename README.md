# The official JavaScript SDK of the Rarible Protocol 

## Overview

With the Rarible SDK, you can mint, buy, sell, and bid on NFTs on Ethereum (ERC-721 and ERC-1155). [Protocol Flow](https://docs.rarible.com/#protocol-flow). 

> Disclaimer: This is still a Work in progress, and no logic has yet been developed for the SDK. This interface will serve as a cornerstone to integrate with the functions relevant to end users / developers of the Rarible ecosystem. 


## Installation

`npm i --save <name>`

## Quickstart:

### Mint an NFT

```
const rarible = new RaribleSDK();
const myNFT = {
    supply: 5,
    metadata: {
        name: "Inception",
        description: "The beginning.",
        image: "...png"
    }
}

rarible.mint(myNFT).then((item) => {
    console.log("Minted item tokenId: " + item.tokenId)
})
```

## Methods

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

