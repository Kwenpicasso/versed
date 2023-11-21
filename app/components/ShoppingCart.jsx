'use client'
import React from 'react'
import {Trash2 } from 'lucide-react'


import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { useShoppingCart } from 'use-shopping-cart'
import { Button } from '@/components/ui/button'





const ShoppingCart = () => {
  //shoulddisplaycart is a boolean that tells us if the cart should display or not = which is true or false
  //handlecartclick is a function that sets the shoulddisplaycart boolean to true or false
  const {cartCount, redirectToCheckout, shouldDisplayCart,totalPrice, handleCartClick, cartDetails, removeItem} = useShoppingCart();

  //this function redirects you to stripe payments
  async function handleCheckoutClick() {
    
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log('result');
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()} >
    
      <SheetContent className='w-[40%] lg:w-[60%] sm:w-[90%] md:w-[90%] z-[100]'>
        <SheetHeader>
          <SheetTitle className='font-mono text-xl flex justify-center items-center text-black md:text-lg mb-3'>SHOPPING BAG</SheetTitle>
        </SheetHeader>
     <div className='h-full flex flex-col justify-between'>
      <div className='mt-1 flex-1 overflow-y-auto '>
        <ul className='my-1 divide-y divide-gray-200'>
         {cartCount === 0 ? (
           <div className='w-full flex flex-col justify-center items-center'>
           <Image src='/empty.png' width={300} height={350} alt='emptycart'/>
           <div className='w-full flex flex-col justify-center items-center gap-2'>
            <h1 className='text-base text-black uppercase'>nothing is here!!!</h1>
            <div className='w-full mx-auto flex justify-center items-center'>
              <Button onClick={() => {
       handleCartClick();
    }} className='text-sm text-white uppercase rounded-none hover:bg-white hover:text-black border  hover:border-black trans w-[50%]  bg-black'>shop all</Button>
              
            </div>
           </div>
          </div>
         ) : (
         <>
         {Object.values(cartDetails ?? {}).map((entry) => (
          <li key={entry.id} className='flex py-3'>
           <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
           <Image src={entry.image} width={100} height={100} alt='item' className='object-cover'/>
           </div>

           <div className='ml-4 flex flex-1 flex-col'>
           <div>
            <div className='flex w-full justify-between text-base sm:text-xs font-medium text-gray-900'>
             <h3 className='capitalize w-full'>{entry.nametwo}</h3>
             <h3 className='ml-4'>${entry.price}</h3>
            </div>
            <p className='capitalize text-xs'>{entry.name}</p>
           </div>
           
           <div className='flex flex-1 items-end justify-between text-sm'>
           <h1 className='text-black sm:text-xs'>QTY:1</h1>
           <h1 className='text-purple-400 underline font-semibold sm:text-xs' onClick={() => removeItem(entry.id)}><Trash2 /></h1>
           </div>
           </div>
          </li>
         ))}
         </>
         )}
        </ul>


      </div>
      <div className='border-t border-gray-200 px-4 py-6'>
        <div className='flex justify-between text-base font-medium text-black'>
          <p>Subtotal:</p>
          <p>${totalPrice.toFixed(2)}</p>

         
        </div>
        <div className='mt-6'>
        <Button onClick={() => handleCheckoutClick()} className='w-full'>Checkout</Button>
        
          </div>
          <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
            <p>
              OR <button onClick={() => handleCartClick()}>Continue Shopping</button>
            </p>

          </div>


      </div>
     </div>
        
      </SheetContent>
    </Sheet>
  )
}

export default ShoppingCart
