'use client';
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import Navitems from './Navitems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
   <header className='w-full border-b '>
    <div className='flex wrapper items-center justify-between'>
      <Link href="/" className='flex '>
      <Image 
        src = "/logo.png" width={70} height ={38} 
        alt = "logo"
        />
      </Link>

      <SignedIn>
        <nav className='md:flex-between hidden w-full max-w-xs'>
          <Navitems />
        </nav>
      </SignedIn>

    <div className='flex gap-3 '>
      <SignedIn>
        <UserButton />
        <MobileNav />
      </SignedIn>
      <SignedOut>
        <Button asChild className="rounded-full" size= "lg">
          <Link href="/sign-in">
          Login
          </Link>
        </Button>
      </SignedOut>
    </div>
    </div>

   </header>
  )
}

export default Header