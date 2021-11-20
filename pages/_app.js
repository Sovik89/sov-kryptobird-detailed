import '../styles/globals.css'
import Link from 'next/link'
import './app.css'
//import NavBar from './NavBar'

function KryptoBirdMarketplace({Component,pageProps}){
  return(
    <div>
      <nav className='border-b p-4' style={{backgroundColor:'black'}}>
        <p className='text-6x1 font-bold tracking-tight'>
        <Link href='/'>
        KRYPTOBIRDZ MARKETPLACE
        </Link>
        </p>
        <div className='flex justify-center'>
         <Link href='/'>
           <a className='mr-6 font-bold'>
             Marketplace
           </a>
         </Link>
         <Link href='/mint-item'>
           <a className='mr-6'>
             Mint Tokens
           </a>
         </Link>
         <Link href='/my-nfts'>
           <a className='mr-6'>
             My NFTs
           </a>
         </Link>
         <Link href='/account-dashboard'>
           <a className='mr-6'>
             Account Dashboard
           </a>
         </Link>
        </div>
      </nav> 
      <Component {...pageProps} />
    </div>

  )
} 

export default KryptoBirdMarketplace;