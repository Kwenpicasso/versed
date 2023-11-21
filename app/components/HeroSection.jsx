import React from 'react'
import Image from 'next/image';
import Button from './Button';
import HeroImageCard from './HeroImageCard';






const HeroSection = async () => {
  
  const url = "products";
  
  return (

    <div className='w-full h-full max sm:pt-[5%]'>
      <div className='w-full h-full flex gap-3 lg:flex-col'>
        {/* hero-content */}
        <div className='w-[50%] h-full relative lg:w-full'>
          
            <div className='w-[60%] mx-auto flex flex-col justify-center lg:text-center gap-3 mt-[10%] lg:w-full lg:mx-auto lg:items-center'>
              
              <h1 className='uppercase text-4xl font-medium sm:text-3xl text-black'>THE FORMULA FOR AMAZING SKIN</h1>
              <h1 className='capitalize text-sm w-[80%] md:w-[60%] sm:w-[80%] text-black'>Your Daily Skincare For All Occasions. Let Your Skin Feel Moisturized And Healthy</h1>
              <div className='w-full flex gap-4 mt-[15%]'>
              <Image src='/j.webp' width={200} height={200} alt='third' className='lg:hidden'/> 
             <div className='absolute right-[28%] top-[45%] lg:hidden xl:right-[10%]'>
             <Button title='shop now' border='border-black' move={url} />
             </div>
              
              </div>

            </div>
           
    
         
        </div>
        {/* hero-image */}
        <div className='w-[50%] h-full lg:w-full relative'>
      
        <div className='w-full h-full'>
              <Image src='/k.webp' alt='big' width={400} height={400} className='w-[70%] h-[70%] lg:w-full object-contain ' />
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
           
          

        </div>

      </div>
      
    </div>
  )
}

export default HeroSection
