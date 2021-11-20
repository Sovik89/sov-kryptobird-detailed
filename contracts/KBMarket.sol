//SPDX-License-Identifier:MIT

pragma solidity ^0.8.4;

//openzeppelin ERC721 functionality
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';//security against transaction for multiple requests
import '@openzeppelin/contracts/utils/Counters.sol';
import 'hardhat/console.sol';

contract KBMarket is ReentrancyGuard{

    using Counters for Counters.Counter;

    //number of items minting,number of transactions,tokens that have not been sold
    //track of total number of items--tokenId,
    //array need to know the length--help keep track of the array

    Counters.Counter private _tokenIds;
    Counters.Counter private _tokensSold;

    //determine who is the owner of the Contract
    //charge a listing fee so that owner makes a commision

    address payable owner;

    //we are deploying to MATIC API is the same so you can use the ethers same
    //way as MATIC
    //0.045 MATIC --is in cents
    
    uint listingPrice=0.045 ether;

    constructor(){
        owner=payable(msg.sender);
    }

    //Structs can act as objects

    struct MarketToken{
        uint itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    //tokenId return which marketToken--fetch which one it is

    mapping(uint256=>MarketToken) private idToMarketToken;

    //listen to events from front end applications

    event MarketTokenMinted(
        uint indexed itemId,
        address indexed nftContract,
        uint indexed tokenId,
        address seller,
        address owner,
        uint price,
        bool sold
    );


    //get the listing price
    function getListingPrice() public view returns(uint256){
        return listingPrice;
    }
    
    //two functions to interact with the contract
    //1. create a market item to put it up for sale
    //2. create market sale for buying and selling between parties

    function makeMarketItem(address nftContract,uint tokenId,uint price) public payable nonReentrant{
        //non reentrant is a modifier to protect reentrancy attack
        require(price>0,'Price must be atleast 1 wei');
        require(msg.value==listingPrice,"Price must be atleast equal to listing price");
        _tokenIds.increment();
        uint itemId=_tokenIds.current();
        //putting up for sale
        idToMarketToken[itemId]=MarketToken(
        itemId,
        nftContract,
        tokenId,
        payable(msg.sender),
        payable(address(0)),
        price,
        false  
        );
      //NFT Transaction

      IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);/* this refers to the instance of the contract where the call is made (you can have multiple instances of the same contract).

address(this) refers to the address of the instance of the contract where the call is being made.

msg.sender refers to the address where the contract is being called from.

Therefore, address(this) and msg.sender are two unique addresses, the first referring to the address of the contract 
instance and the second referring to the address where the contract call originated from.
      
      
      
       */

      emit MarketTokenMinted(itemId, nftContract, tokenId, msg.sender, address(0), price, false);
      /*When the to address is the zero-address, a new contract will be created by executing the code in data 
      (this is what is meant by "code that returns the code"). The address of the newly created contract is technically 
      known beforehand as it's based on the address of the sender and it's current nonce. That address becomes the official 
      address of the contract after mining. */
    
    }

    //function to conduct trasaction and market sales
     
    function createMarketSale(address nftContract,uint itemId) public payable nonReentrant{

        uint price=idToMarketToken[itemId].price;
        uint tokenId=idToMarketToken[itemId].tokenId;
        require(msg.value==price,"Please submit the asking price to continue");
        
        //transfer the amount to the seller
        idToMarketToken[itemId].seller.transfer(msg.value);
        //transfer the nft from the contract address to the buyer
        IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);
        idToMarketToken[itemId].owner=payable(msg.sender);
        idToMarketToken[itemId].sold=true;
        _tokensSold.increment();
        payable(owner).transfer(listingPrice);
    }

    //function to fetch our MarketItems-minting,buying and selling

    //return the number of unsold items

    function fetchMarketTokens() public view returns(MarketToken [] memory){
        uint itemCount=_tokenIds.current();
        uint unsoldItemCount=_tokenIds.current()-_tokensSold.current();
        uint currentIndex=0;

        //looping over the number of tokens (if the items have not been sold populate the array)

        MarketToken [] memory items=new MarketToken[](unsoldItemCount);
        for(uint i=0;i<itemCount;i++){
            if(idToMarketToken[i+1].owner==address(0)){
                uint currentId=i+1;
                MarketToken storage currentItem=idToMarketToken[currentId];
                items[currentIndex]=currentItem;
                currentIndex+=1;

            }
        }

        return items;
    }

    //return the nfts the user has already sold

    function fetchMyNFT() public view returns(MarketToken[] memory){
        uint totalItemCount=_tokenIds.current();
        //second counter for each individual user
        uint itemCount=0;
        uint currentIndex=0;

        //first loop is for the item count

        for(uint i=0;i<totalItemCount;i++){
            if(idToMarketToken[i+1].owner==msg.sender){
                itemCount+=1;
            }
        }

        //second loop to loop through the amount you have purchased through the item count
        //check if the owner address is equal to the msg.sender

        MarketToken [] memory items =new MarketToken[](itemCount);

        for(uint i =0; i<totalItemCount;i++){
            if(idToMarketToken[i+1].owner==msg.sender){
                uint currentId=idToMarketToken[i+1].itemId;
                //current Array
                MarketToken storage currentItem=idToMarketToken[currentId];
                items[currentIndex]=currentItem;
                currentIndex+=1;
            }
        }
      
      return items;

    }

    //function return an array of minted nfts

    function fetchItemsCreated() public view returns(MarketToken[] memory){
        //instead of .owner we use .seller
        uint totalItemCount=_tokenIds.current();
        //second counter for each individual user
        uint itemCount=0;
        uint currentIndex=0;

        //first loop is for the item count

        for(uint i=0;i<totalItemCount;i++){
            if(idToMarketToken[i+1].seller==msg.sender){
                itemCount+=1;
            }
        }

        //second loop to loop through the amount you have purchased through the item count
        //check if the owner address is equal to the msg.sender

        MarketToken [] memory items =new MarketToken[](itemCount);

        for(uint i =0; i<totalItemCount;i++){
            if(idToMarketToken[i+1].seller==msg.sender){
                uint currentId=idToMarketToken[i+1].itemId;
                //current Array
                MarketToken storage currentItem=idToMarketToken[currentId];
                items[currentIndex]=currentItem;
                currentIndex+=1;
            }
        }
      
      return items;
    }




}