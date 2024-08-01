import React from 'react'
import Image from 'next/image'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Separator } from "@/components/ui/separator"
import Navitems from './Navitems'

  

const MobileNav = () => {
  return (
    <div className='md:hidden'>
        <Sheet>
  <SheetTrigger className='align-middle'>
    <Image 
    src="/navicon.png"
    width={38}
    height ={38}
    alt = "nav"
    className='cursor-pointer'
     />
  </SheetTrigger>
  <SheetContent className='flex flex-col bg-white md:hidden'>
    <Image
    src="/logo.png"
    width={80}
    height={38}
    alt="logo"
    /> 
    <Separator className='border border-gray-50'/>
    <Navitems />

 </SheetContent>
</Sheet>

    </div>
  )
}

export default MobileNav