import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


const ShopContent = () => {
    const Content = [
    
        { id: 1, label: 'all products', new:'new arrivals',best: 'best sellers' , gift: 'bundles gifts', tools:'merch tools', size:'travel size', shop:'shop all'},
       
        { id: 2, label: 'all skin types', new:'acne-prone',best: 'dryness' , gift: 'aging skin', tools:'dulness'},
       
        { id: 3, label: 'facial cleansers', new:'toners',best: 'serums' , gift: 'body care', tools:'masks + treatments', size:'moisturizers & SPF'},
       
        { id: 4, label: 'by ingredients', new:'retinol',best: 'salicylic acid' , gift: 'vitamin c', tools:'lactic acid', size:'vitamin e'},
       
        
      ];
  return (
    <div className='w-full h-[40vh] flex gap-8 items-center justify-center py-2 px-4 bg-white z-[1000] fixed left-0'>
     {Content.map((item) => (
         <div className=' w-[200px] flex flex-col capitalize justify-start items-start text-sm gap-3 p-4 h-full' key={item.id}>
         <h1 className='uppercase font-semibold text-xs'>{item.label}</h1>
         <h2>{item.best}</h2>
         <h2>{item.gift}</h2>
         <h2>{item.tools}</h2>
         <h2>{item.size}</h2>
         <h2>{item.shop}</h2>
        </div>
     ))}
   

   <div className='relative'>
        <Image src='/blue.webp' width={350} height={300} alt='yellow cream' className=''/>
        <div className='absolute bottom-4 left-4'>
         <Button><Link href='/products'>SHOP ALL</Link></Button>
        </div>
      </div>
    </div>
  )
}

export default ShopContent
