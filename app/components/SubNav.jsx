'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import ShopContent from './ShopContent';
import AboutContent from './AboutContent';


const SubNav = () => {
  const NAV_LINKS = [
    
    { href: '/', key: 'quiz', label: 'skin decoder quiz' },
    { href: '/', key: 'skin', label: 'good skin squad' },
    
  ];
  const [shop, setShop] = useState(false); 
  const [about, setAbout] = useState(false); 
  return (
    <div className='w-full h-[40px] lg:hidden z-[500] bg-white '>
      <div className='w-[50%] mx-auto h-full flex gap-5 justify-around items-center' >
      <div className='flex justify-center items-center cursor-pointer' onMouseOver={() => setShop(!shop)} onMouseLeave={() => setShop(!shop)}>
        <h1 className='uppercase text-sm'>shop now</h1>
        </div>
      <div className='flex justify-center items-center cursor-pointer' onMouseOver={() => setAbout(!about)} onMouseLeave={() => setAbout(!about)}>
        <h1 className='uppercase text-sm'>about</h1>
        </div>
       {NAV_LINKS.map((link) => (
       <Link href={link.href}>
        <div className='flex justify-center items-center'>
        <h1 className='uppercase text-sm'>{link.label}</h1>
        </div>
       </Link>
       ))}
      </div>
      {shop && <ShopContent/>}
      
      {about && <AboutContent/>}
      
    </div>
  )
}

export default SubNav
