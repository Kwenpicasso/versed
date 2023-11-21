'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import ShopContent from './ShopContent';
import AboutContent from './AboutContent';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"



const SubNav = () => {
  const NAV_LINKS = [
    
    { href: '/', key: 'quiz', label: 'skin decoder quiz' },
    { href: '/', key: 'skin', label: 'good skin squad' },
    
  ];
  
  return (
    <div className='w-full h-[40px] lg:hidden z-[500] bg-white '>
      <div className='w-[50%] mx-auto h-full flex gap-5 justify-around items-center' >
      <NavigationMenu>
    <NavigationMenuList >
      <NavigationMenuItem className=''>
        <NavigationMenuTrigger className='text-black '>SHOP ALL</NavigationMenuTrigger>
        <NavigationMenuContent >
          <NavigationMenuLink className='w-full'>
           <ShopContent/>
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
      <NavigationMenu>
    <NavigationMenuList >
      <NavigationMenuItem className=''>
        <NavigationMenuTrigger className='text-black '>ABOUT</NavigationMenuTrigger>
        <NavigationMenuContent >
          <NavigationMenuLink className='w-full'>
           <AboutContent/>
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
     
       {NAV_LINKS.map((link) => (
       <Link href={link.href}>
        <div className='flex justify-center items-center'>
        <h1 className='uppercase text-sm'>{link.label}</h1>
        </div>
       </Link>
       ))}
      </div>
     
      
    </div>
  )
}

export default SubNav
