import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Newletter = () => {
  return (
    <div className='w-full h-full  mt-[10%] mb-[5%] max sm:pt-[10%] bg-[#F3F0F1]'>
      <div className='w-full h-full flex justify-between  lg:flex-col bg-[#F3F0F1] lg:bg-white'>
      {/* image */}
      <div className='w-[40%] flex justify-center items-center lg:hidden' >
      <div>
        <Image src='/cream.jpeg' width={540} height={540} className='' alt='cream'/>
      </div>
      </div>
      {/* newletter form */}
      <div className='w-[40%] lg:w-full lg:mt-[5%]'>
       <div className='w-[80%] h-full flex flex-col gap-3 justify-center lg:w-full lg:items-center'>
       <h1 className='uppercase text-3xl font-semibold w-full text-left lg:text-center sm:text-2xl text-black'>versed newsletter</h1>
       <p className='capitalize text-xs w-[300px] lg:text-center sm:w-[80%] text-black'>get news, the latest arrivals and great promotions every week.</p>

       <form class="mt-6 lg:w-[90%]" >
            <div class="relative">
              <input id="email" name="email" type="text" className="newsinput peer" />
              <label for="email" class="newslabel text-xs text-black">Enter your name</label>
            </div>
            <div class="relative mt-10">
              <input id="email" name="email" type="text" className="peer newsinput" />
              <label for="email" class="newslabel text-xs text-black">Enter your name</label>
            </div>
           
          </form>

          <div className='w-full flex justify-end lg:mr-5'>
            <div className=''>
            <Button title='subscribe' border='border-black' cream='lg:bg-yellow-50' trans='bg-transparent' />
            </div>
          </div>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Newletter
