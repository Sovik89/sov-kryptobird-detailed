//import NavBar from "./NavBar"
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import { nftaddress, nftmarketaddress } from "../config";

import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import KBMarket from "../artifacts/contracts/KBMarket.sol/KBMarket.json";
//import { loadDefaultErrorComponents } from "next/dist/server/load-components";

export default function MyAssets() {
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");

  useEffect(() => {
    loadNFTs();
  }, []);

  //can be replaced by async function loadNFTs(){}
  async function loadNFTs(){
    //what we wanna load
    //we want to the display the nfts of the msg.sender 

    //const provider = new ethers.providers.JsonRpcProvider();
    const web3Modal=new Web3Modal()
    const connection = await web3Modal.connect()
    const provider=new ethers.providers.Web3Provider(connection)
    const signer=provider.getSigner()
    const tokenContract = new ethers.Contract(nftaddress,NFT.abi, signer);
    const marketContract = new ethers.Contract(nftmarketaddress,KBMarket.abi,signer);

    const data = await marketContract.fetchMyNFT();

    const items = await Promise.all(
      data.map(async (i) => {
        //get the uri of the value
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        //we want ot get the token metadata--json
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        };
        return item;
      })
    );

    setNfts(items);
    setLoadingState("loaded");
  }
  
  //function buy nfts for the market
  
  
  if (loadingState==='loaded'& !nfts.length){
    return(
      <div className="flex items-center bg-black-500 text-black font-bold px-4 py-3 justify-center" role="alert">
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/>
        </svg>
        <p style={{color:"black"}}>You do not own any NFTs currently </p>
      </div>
    )
  }

  return (
  <div className='flex justify-center'>
     <div className='px-4' style={{maxWidth:'1600px',opacity:'0.8'}} height='500' width='600' >
       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
          {
            nfts.map((nft,i)=>(
              <div key={i} className='border shadow rounded-x1 overflow-hidden' >
                  <img src={nft.image} style={{height:'362px'}}/>
                  <div className='p-4' style={{backgroundColor:'white'}}>
                    <p style={{height:'64px'}} className='text-4x1 text-black font-bold'>{nft.name}</p>
                    <div style={{height:'72px',overflow:'hidden'}}>
                      <p className='text-3x1 text-black font-semibold'>{nft.description}</p>
                    </div>
                  </div>
                  <div className='p-4 bg-black'>
                    <p className='mb-4 text-4x1 font-bold'style={{color:'aquamarine'}}>Price: {nft.price}ETH</p>
                               
                    
                  </div>
              </div>
            ))
          }
       </div>
     </div>
  </div>);
}
