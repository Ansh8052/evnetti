import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export const Footer = () => {
  return (
   <footer className='flex items-center sm:flex-between flex-col'>
     <Link href="/" className='flex '>
      <Image 
        src = "/logo.png" width={90} height ={45} 
        alt = "logo"
        />
      </Link>
      <p className='text-sm'>2024 Eventti, all right reserved </p>
      

   </footer>
  )
}

export default Footer