import React from 'react'
import { client } from '../utils/configSanity';
import Image from 'next/image';
import Button from './Button';
import HeroImageCard from './HeroImageCard';



// querying the data of the products from sanity studio
async function getData() {
  const query = `*[_type == 'hero']{
    
    'bigimage': bigimage.asset->url,
    'thirdimage': thirdimage.asset->url,
      bigtext,
      smalltext
  }`;
  const data = await client.fetch(query);
  return data;


}


const HeroSection = async () => {
  const data = (await getData())
  const url = "products";
  
  return (

    <div className='w-full h-full max sm:pt-[5%]'>
      <div className='w-full h-full flex gap-3 lg:flex-col'>
        {/* hero-content */}
        <div className='w-[50%] h-full relative lg:w-full'>
          {data.map((item) => (
            <div className='w-[60%] mx-auto flex flex-col justify-center lg:text-center gap-3 mt-[10%] lg:w-full lg:mx-auto lg:items-center'>
              
              <h1 className='uppercase text-4xl font-medium sm:text-3xl text-black'>{item.bigtext}</h1>
              <h1 className='capitalize text-sm w-[80%] md:w-[60%] sm:w-[80%] text-black'>{item.smalltext}</h1>
              <div className='w-full flex gap-4 mt-[15%]'>
              <Image src={item.thirdimage} width={200} height={200} alt='third' className='lg:hidden'/> 
             <div className='absolute right-[28%] top-[45%] lg:hidden xl:right-[10%]'>
             <Button title='shop now' border='border-black' move={url} />
             </div>
              
              </div>

            </div>
           
          ))}
         
        </div>
        {/* hero-image */}
        <div className='w-[50%] h-full lg:w-full relative'>
      {data.map((item) => (
            <HeroImageCard item={item}/>
           
          ))}

        </div>

      </div>
      
    </div>
  )
}

export default HeroSection
