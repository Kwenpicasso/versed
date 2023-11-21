import React from 'react'
import Button from './Button'
import Image from 'next/image';
import { client } from '../utils/configSanity';

// querying the data of the products from sanity studio
async function getData() {
  const query = `*[_type == 'products'][2...5] | order(_createdAt asc){
    'image': image[0].asset->url,
     about
  }`;
  const data = await client.fetch(query);
  return data;


}
const AboutUs = async () => {
  const data = (await getData())
  return (
    <div className='w-full h-full max mt-[10%] lg:pb-[6%] px-7 '>
      <div className='w-full h-full '>
      <h1 className='uppercase text-3xl font-semibold text-center md:text-2xl lg:text-left sm:w-[220px] text-black font-mono'>learn more about us</h1>
      <div className='w-full h-[400px] flex gap-4 lg:flex-col  mt-[4%] '>
         {/* content */}
         <div className='w-[25%] text-xs lg:w-full text-black'>
            <p>We believe in transparency at every level. We never airbrush skin and are always upfront about where we're at and where we're headed (just check out our biannual reports and community board meetings).</p>
            <br />
            <p>Everything we do has an impact on our planet. See what else we’re doing to take responsibility for our impact.</p>
         <div className='w-full flex justify-end items-end lg:hidden'>
            <div>
            <Button title='more' border='border-black'/>
            </div>
            
         </div>
         </div>

         {/* carousel */}
         <div className='w-[70%] lg:w-full'>
         <div className="carousel rounded-sm flex gap-3">
         {data.map((item) => (
            
             <div className="carousel-item flex flex-col capitalize font-semibold">
             <Image src={item.image} alt="Burger" width={300} height={300} />
               <h1 className='text-black'>{item.about}</h1>
            
           </div> 
           
           
         ))}
  
      </div>

         </div>

      </div>
      </div>
    </div>
  )
}

export default AboutUs
