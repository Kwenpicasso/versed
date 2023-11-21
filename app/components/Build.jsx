import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Build = () => {
  return (
    <div className='w-full h-full max mt-[10%]'>
      {/* build wrapper one */}
      <div className='w-full h-full flex justify-center items-center  lg:flex-col-reverse lg:px-0'>
        {/* image */}
      <div className='w-[40%] lg:w-full h-[480px]  flex justify-center items-center relative'>
      <div className='w-full h-full flex justify-center items-center'>
      <Image src='/girlcream.jpeg' alt='girlcream' width={500} height={500} className='w-full h-full object-cover '/>
      </div>
       {/* button on mobile */}
       <div className='absolute right-[23%] bottom-[10%] hidden lg:block'>
             <Button title='shop now' gg='hidden' move='products'/>
             </div>
      </div>
      {/* content */}
      <div className='w-[40%] lg:w-full p-[6%] bg-ash bg-opacity-10 h-[480px] lg:h-[250px] flex gap-5 items-start justify-center flex-col text-black'>
       <h1 className='text-black font-semibold text-3xl uppercase '>build your skin regime</h1>
       <p className='text-xs w-full font-light'>Create your own personalized skincare that's clinically effective and unique to your skin, environment and lifestyle</p>
       <div className='lg:hidden w-full flex justify-end items-end'>
        
        <div>
        <Button title='To skin decoder quiz' border='border-black' move='products'/>
        </div>
       </div>
      </div>

      </div>
      {/* build wrapper one */}
      <div className='w-full h-full flex justify-center items-center flex-row-reverse  lg:flex-col-reverse lg:px-0'>
        {/* image */}
      <div className='w-[40%] lg:w-full h-[480px]  flex justify-center items-center relative'>
      <div className='w-full bg-orange-300 h-full flex justify-center items-center'>
      <Image src='/girl.jpg' width={500} height={500} alt='girl' className='w-full h-full object-cover '/>
      </div>
       {/* button on mobile */}
       <div className='absolute left-[23%] bottom-[10%] hidden lg:block'>
             <Button title='shop now' gg='hidden' move='products'/>
             </div>
      </div>
      {/* content */}
      <div className='w-[40%] lg:w-full p-[6%] bg-ash bg-opacity-10 h-[480px] lg:h-[250px] flex gap-5 items-start justify-center flex-col text-black'>
       <h1 className='text-black font-semibold text-3xl uppercase'>join the good <br />skin squad</h1>
       <p className='text-xs w-full font-light'>Join the squad to earn points and specail perks (discount, birthday gifts and exclusive merch, anyone?) every time you shop.</p>
       <div className='lg:hidden w-full justify-end items-center flex'>
        
        <div>
        <Button title='To skin decoder quiz' border='border-black' move='products'/>
        </div>
       </div>
      </div>

      </div>



    
    
    </div>
  )
}

export default Build
