import Image from 'next/image';
import React from 'react'
import { client } from '../utils/configSanity';
import Link from 'next/link';

// querying the data of the products from sanity studio
async function getData() {
  const query = `*[_type == 'products'][0...7] | order(_createdAt asc){
    'image': image[0].asset->url,
      name,
      price,
      'slug':slug.current,
      arrival
  }`;
  const data = await client.fetch(query);
  return data;


}
const NewArrivals = async () => {
  const data = (await getData())
  
  return (
    <div className='track-wrapper max w-[90%] pt-[5%] flex-col h-full'>
        <h1 className='uppercase text-3xl font-semibold text-center md:text-2xl text-black font-mono'>new arrivals</h1>
      <div className="marquee">
        <div className="track">
     
<div className='flex gap-5'>
{data.map((item) => (
   <Link href={`/products/${item.slug}`}>
   <div className="carousel-item w-[300px] relative hover:opacity-70 flex flex-col">
   <Image src={item.image} alt="Burger" className='rounded-md' width={300} height={300} />
   
   <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 uppercase">
                    
                      <span aria-hidden="true" className="absolute inset-0" />
                      {item.name}
                    
                  </h3>
                  <div className="mt-1 text-sm text-gray-500">
                  <div className="rating w-[80px]">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  </div>
                  </div>
                  
                </div>
                <p className="text-sm font-medium text-gray-900">${item.price}</p>
                
              </div>
 </div> 
 </Link>
 ))}
</div>
 
 
 

        </div>
      </div>
    </div>
  )
}

export default NewArrivals
