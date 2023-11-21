import React from 'react'
import Image from 'next/image';
import Button from './Button';
const HeroImageCard = ({item}) => {
    const url = "products";
  return (
    <div className='w-full h-full'>
              <Image src={item.bigimage} alt='big' width={400} height={400} className='w-[70%] h-[70%] lg:w-full object-contain ' />
              {/* button on mobile */}
              <div className='absolute right-[28%] top-[53%] hidden lg:block'>
             <Button title='shop now' move={url} gg='hidden' />
             </div>
              <div className='bg-white w-[300px] absolute h-[80px] bottom-0 right-[30%] lg:hidden opacity-60 '>
                <div className='flex flex-col gap-3 justify-center text-xs p-[6%]'>
                   <div className='flex justify-between items-center'>
                    <h1 className='text-black'>NEXT</h1>
                    <h1 className='text-black'>01/03</h1>
                   </div>
                   <h1 className='capitalize text-black'>gentle retinol serum</h1>
                </div>

              </div>
              
            </div>
  )
}

export default HeroImageCard
