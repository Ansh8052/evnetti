'use Client';

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navitems = () => {
const pathname = usePathname()
 
  return (
    <ul className=' flex flex-col items-center gap-7 md:flex-row  '>
    {
        headerLinks.map((link) => {
            const isActive = pathname === link.route

            return(
                <li
                key = {link.route}
                className={`${
                 isActive? 'bg-blue-400 p-2 rounded-md' : 'bg-white'   
                }`}
                >
                    <Link href={link.route}>
                     {link.label}
                    </Link>
                </li>
            )
        })
    }

    </ul>
  )
}

export default Navitems