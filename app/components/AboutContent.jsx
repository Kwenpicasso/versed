import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const AboutContent = () => {
  return (
    <div className='w-full h-[40vh] flex gap-8 items-center justify-around py-2 px-4 bg-white z-[1000] fixed'>
     <div className='flex gap-3 justify-start items-start w-[60%]' >
     <div className='relative'>
        <Image src='/kkk.webp' width={350} height={300} alt='yellow cream'/>
        <div className='absolute bottom-4 left-4'>
         <Button ><h1 className='animate-pulse text-xs'>ABOUT US</h1></Button>
        </div>
      </div>
      <div className='relative'>
        <Image src='/blackgirl.webp' width={350} height={300} alt='yellow cream' className=''/>
        <div className='absolute bottom-4 left-4'>
         <Button><h1 className='animate-pulse text-xs'>LEARN MORE</h1></Button>
        </div>
      </div>
     </div>
     <div className=' w-[200px] flex flex-col capitalize justify-center items-start text-xs gap-3 p-4 h-full'>
         <h2>about us</h2>
         <h2>our impact</h2>
         <h2>ingredients glossary</h2>
         <h2>affilate partners</h2>
         <h2>careers</h2>
         
        </div>
    </div>
  )
}

export default AboutContent
