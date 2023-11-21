import React from 'react'
import Button from '@/app/components/Button'
import Image from 'next/image';
const page = () => {
  return (
    <div className='w-full max h-full lg:h-screen justify-center items-center flex lg:flex-col' >
        {/* left */}
      <div className='w-[50%] flex flex-col items-center p-[8%] lg:w-full '>
       <h1 className='text-black font-semibold uppercase w-[60%] mx-auto text-right'>error</h1>
       <div>
        <h1 className='text-black text-9xl font-semibold lg:text-7xl lg:text-center'>404</h1>
        <p className='text-black text-sm w-[70%] lg:text-center lg:mx-auto'>Oops... The page you are looking for might have been removed or s temporaily unavailable.</p>
        <div className='w-full flex justify-between items-center'>
        <h1 className='text-black capitalize text-sm underline'>report the error</h1>
        <div>
            <Button title='go back' border='border-black' move='/'/>
        </div>
        </div>
       </div>
      </div>
        {/* right */}
      <div className='w-[50%] flex justify-center items-center lg:hidden'>
      <Image src='/404.png' width={600} height={600} alt='404image' className=''/>
      </div>
    </div>
  )
}

export default page
