import { ChevronUp } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[40vh] py-[2%] px-[4%] flex flex-col gap-5 max pt-[10%]'>
      <div className='w-full h-[150px] flex justify-between '>
     <div className='w-full flex lg:flex-col lg:justify-center lg:items-center lg:gap-6'>
     <div>
        <Image src='/vlogo.svg' width={70} height={70} alt='logo'/>
      </div>

    <div className='flex w-full justify-around'>
    <div className='text-xs capitalize flex flex-col gap-2'>
        <h1 className='text-sm mb-2 font-semibold'>about us</h1>
        <h2>Recycling</h2>
        <h2>Sustainability</h2>
        <h2>ingredients</h2>
        <h2>careers</h2>
      </div>
      <div className='text-xs capitalize flex flex-col gap-2'>
        <h1 className='text-sm mb-2 font-semibold'>shop</h1>
        <h2>new arrivals</h2>
        <h2>bestsellers</h2>
        <h2>on sale</h2>
        <h2>gift card</h2>
      </div>
      <div className='text-xs capitalize flex flex-col gap-2'>
        <h1 className='text-sm mb-2 font-semibold'>help</h1>
        <h2>shipping</h2>
        <h2>payment</h2>
        <h2>Return</h2>
        <h2>contact</h2>
      </div>
      <div className='text-xs capitalize flex flex-col gap-2 lg:hidden'>
        <h1 className='text-sm mb-2 font-semibold'>find us</h1>
        <h2>instagram</h2>
        <h2>facebook</h2>
        <h2>twitter</h2>
        
      </div>
    </div>
     </div>
      <div className='flex justify-start items-center flex-col gap-1 text-sm lg:hidden'>
        <div className='rounded-full p-3 bg-[#F3F0F1]'>
            <ChevronUp className=''/>
        </div>
        <h1 className='font-semibold'>Top</h1>
      </div>
      </div>
      <div className='w-full h-[1px] bg-gray-400 lg:mt-2'></div>
      <div className='flex justify-center items-center'>
      <h1 className='uppercase text-sm sm:text-xs'>&copy;offspring beauty co.2023</h1>
      </div>
    </div>
  )
}

export default Footer
