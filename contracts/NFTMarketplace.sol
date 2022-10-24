// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// INTERNAL IMPORT FOR NFT OPENZIPLINE
import "@openzeppelin/contracts/utils/Counters.sol"; // using as a counter
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

constract NFTMarketplace is ERC721URIStorage{
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;

    unit256 listingPrice = 0.0015 ether;

    address payable owner;

    mapping(uint256 => MarketItem) private idMarketItem;

    struct MarketItem {
        unit256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    event idMarketItemCreated(
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    modifier onlyOwner{
        require(msg.sender == owner, 
        "only owner of the marketplace can change the listing price"
        );
        _;
    }

    constructor() ERC721("NFT Metavarse Token", "MYNFT"){
        owner == payable(msg.sender);
    }

    function updateListingPrice(uint256 _listingPrice) 
        public 
        payable 
        onlyOwner
    {
        listingPrice = _listingPrice;
    }

    
}