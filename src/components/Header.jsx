import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SearchBox from './SearchBox'
import {RiSettings3Line} from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';


export default function Header() {
  return (
    <header className='sticky top-0 bg-white dark:bg-black'>
        <div className=" flex w-full p-6 items-center justify-between">
            <Link href='/'>
                
                <Image src='/yt-logo-dark.jpg' width={100} height={40} priority style={{width:'auto'}}/>
            </Link>    
            <div className="flex-1">
                <SearchBox/>
            </div>
            <div className=" hidden md:inline-flex ">
                <RiSettings3Line className='bg-transparent hover:gray-200 py-2 text-4xl rounded-full cursor-pointer'/>
                <TbGridDots className='bg-transparent hover:gray-200 py-2 text-4xl rounded-full cursor-pointer'/>
            </div>
            <button className='bg-blue-500 text-white px-6 py-2 font-medium 
            rounded-md hover:brightness-105 hover:shadow-md
            transition-shadow ml-2'>Sign in</button>
        </div>  
       
    </header>
  )
}
