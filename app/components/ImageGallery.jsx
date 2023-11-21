'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const ImageGallery = ({data}) => {
    const [selectedImg, setSelectedImg] = useState(0);
  return (
    <div className='w-[55%] h-full flex gap-4 lg:w-full lg:flex-col-reverse '>
    {/* four images */}
    <div className='w-[25%] flex flex-col justify-center items-center gap-3 lg:flex-row lg:w-full'>
      <div className='w-[150px] h-[150px]  sm:h-[100px] '>
       <Image src={data.images[0]} width={200} height={200} alt='cream' className='smallimage'  onClick={e=>setSelectedImg(0)}/>
      </div>
      <div className='w-[150px] h-[150px] sm:h-[100px]'>
       <Image src={data.images[1]} width={200} height={200} alt='creamtwo' className='smallimage'  onClick={e=>setSelectedImg(1)}/>
      </div>
      <div className='w-[150px] h-[150px] sm:h-[100px]'>
       <Image src={data.images[2]} width={200} height={200} alt='creamthree' className='smallimage'  onClick={e=>setSelectedImg(2)}/>
      </div>
      <div className='w-[150px] h-[150px] sm:h-[100px]'>
       <Image src={data.images[3]} width={200} height={200} alt='creamfour' className='smallimage'  onClick={e=>setSelectedImg(3)}/>
      </div>
     

    </div>
    {/* big image */}
    <div className='w-[80%] lg:w-full'>
    <Image src={data.images[selectedImg]} width={400} height={400} alt='creamfive' className='w-full h-full object-cover'/>
    </div>
  </div>
  )
}

export default ImageGallery
