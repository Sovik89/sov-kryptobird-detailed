//SPDX-License-Identifier:MIT

pragma solidity ^0.8.4;

//openzeppelin ERC721 functionality
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/utils/Counters.sol';


contract NFT is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    //COunters keep track of token Ids
    
    address contractAddress;

    string [] public kryptoBirdz;
    mapping(string=>bool) public _kryptoBirdzExists;

    //OBJ: Give the marketplace the ability to transact with other tokens and change ownership
    //SetApprovalForAll allows us to do the above objectives for all

    //constructor to set up our address

    // 'N.B':ERC721URIStorage actually inherits ERC721.sol hence we are not inheriting ERC721 directly but we are inheriting
    //ERC721 via multilevel inheritence

    constructor(address marketplaceAddress) ERC721('KryptoBirdz','KBIRDZ'){
             contractAddress=marketplaceAddress;
    }
    
    //this is the ipfs end point
    function mintToken(string memory tokenURI) public returns(uint){
        require(_kryptoBirdzExists[tokenURI]==false,"Error:-The Krypto bird already exists");
        _kryptoBirdzExists[tokenURI]=true;
        kryptoBirdz.push(tokenURI);
        _tokenIds.increment();
        uint256 newItemId=_tokenIds.current();
        uint256 _id=kryptoBirdz.length;
        if(_id==newItemId){
        _mint(msg.sender,newItemId);
        //passing the ID and the URL 
        
        _setTokenURI(newItemId,tokenURI);
        
        //give the marketplace approval to interact with the users
        setApprovalForAll(contractAddress,true);
        //mint the token and set the Id for sale by returning
        }
        return newItemId;

    }
}


