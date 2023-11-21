import React from 'react'
import {CheckCheck } from 'lucide-react'
import Button from '@/app/components/Button'

const page = () => {
  return (
    <div className='max w-full h-full lg:h-screen flex flex-col justify-center items-center p-[10%]'>
      <CheckCheck className='text-green-600 w-16 h-16 my-5 mx-auto' />
      <h1 className='w-full font-medium text-xl capitalize my-2 text-center text-black'>payment done!!!</h1>
      <h1 className='w-full font-semibold text-2xl uppercase my-2 text-center text-black'>thank you for your order</h1>
      <div >
            <Button title='continue shopping' border='border-black' move='products'/>
        </div>
    </div>
  )
}

export default page
