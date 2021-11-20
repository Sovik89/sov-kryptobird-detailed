//import NavBar from "./NavBar"
import { ethers } from "ethers";
import { useState } from "react";
//import axios from "axios";
import Web3model from "web3modal";
import { nftaddress, nftmarketaddress } from "../config";
import {create as ipfsHttpClient} from 'ipfs-http-client'//in this component we set the ipfs up to host our nft item of the file storage
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import KBMarket from "../artifacts/contracts/KBMarket.sol/KBMarket.json";
import { useRouter } from "next/router";

const client=ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

export default function MintItem(){
    const [fileUrl,setFileUrl]=useState(null)
    const [formInput,updateFormInput]=useState({
        price:'',
        name:'',
         description:'',
    })
    const router=useRouter()
    /**
     * Set up a function to fire off when we update files in our forms - we can add our NFT images-> IPFS
     */

    async function onChange(e){
       const file =e.target.files[0]

       try{
       const added= await client.add(
           file,{
               progress:(prog)=>{console.log(`received:${prog}`)}
           })
       const url=`https://ipfs.infura.io/ipfs/${added.path}`
       setFileUrl(url)
       }catch(error){
           console.log("Error uploading the file:",error)
       }
    }

    async function createMarket(){

        console.log("Inside create market")
        
          const {name,description,price}=formInput
          console.log(name)
          console.log(description)
          console.log(price)
        if(!name||!description|| !price || !fileUrl) return

        //upload to ipfs
        const data=JSON.stringify({
            name,description,image:fileUrl
        })
        try{
            const added= await client.add(data)
            const url=`https://ipfs.infura.io/ipfs/${added.path}`
            //run a function that creates the sale and passes in the url
            createSale(url)
        }catch(error){
                console.log("Error uploading the file:",error)
        }
       
          
    }

    async function createSale(url){
        //create the items and list them in the marketplace
        const web3Modal=new Web3model()
        const connection = await web3Modal.connect()//connect tho metamask or which ever Wallet the user has
        const provider = new ethers.providers.Web3Provider(connection)
        const signers=provider.getSigner()//when initiating transaction we need signers
        let contract= new ethers.Contract(nftaddress,NFT.abi,signers)
        let transaction= await contract.mintToken(url.toString())
        let tx=await transaction.wait()
        let event=tx.events[0]//getting the value from the event that is raised as a parthof mint token
        let value=event.args[2]//taking the 3rd argument in the indexed events
        let tokenId=value.toNumber()
        const price=ethers.utils.parseUnits(formInput.price,'ether')
        
        //list the item for sale in the marketplace

        contract= new ethers.Contract(nftmarketaddress,KBMarket.abi,signers)
        let listingPrice=await contract.getListingPrice()
        listingPrice=listingPrice.toString()
        transaction=await contract.makeMarketItem(nftaddress,tokenId,price,{value:listingPrice})
        await transaction.wait()
        router.push('./')
    }

    return(
        <div className='flex justify-center'>
            <div className='w-1/2 flex flex-col pb-12'>
                 <input 
                    placeholder='Asset Name'
                    className='mt-8 border rounded p-4'
                    onChange={e=>updateFormInput({...formInput,name:e.target.value})}
                 />
                 <textarea 
                    placeholder='Asset Description'
                    className='mt-2 border rounded p-4'
                    onChange={e=>updateFormInput({...formInput,description:e.target.value})}
                 />
                 <input 
                    placeholder='Price in ETH'
                    className='mt-2 border rounded p-4'
                    onChange={e=>updateFormInput({...formInput,price:e.target.value})}
                 />
                 <input 
                    type='file'
                    name='Asset'
                    className='mt-4'
                    onChange={onChange}
                 />
                 {
                     fileUrl && (
                         <img className='rounded mt-4' width='350px' src={fileUrl} />
                     )}
                {
                    console.log(fileUrl)
                }
                 <button onClick={createMarket} className='font-bold mt-4 rounded p-4 shadow-large' style={{backgroundColor:'black',color:'aquamarine'}}>MINT TOKEN</button>
            </div>

        </div>
    );
}


