import React from 'react'
import { client } from '../utils/configSanity';
import Image from 'next/image';
import Link from 'next/link';

// querying the data of the products from sanity studio
async function getData() {
  const query = `*[_type == 'products'][0...6] | order(_createdAt desc){
    'imageone': image[0].asset->url,
    'imagetwo': image[2].asset->url,
      name,
      price,
      'slug':slug.current,
      arrival
  }`;
  const data = await client.fetch(query);
  return data;


}
const TopSellers = async () => {
  const data = (await getData())

  return (
    <div className='w-full h-full max px-6 mt-[10%]'>
      <div className='w-full h-full'>
        <h1 className='uppercase text-3xl font-semibold text-center md:text-2xl text-black font-mono'>shop top sellers</h1>
        {/* carousel section for the products */}
        <div className="carousel flex gap-3 mt-[5%]">
 {data.map((item) => (
   <Link href={`/products/${item.slug}`}>
   <div className="carousel-item w-[300px] relative flex flex-col">
   <div className='overflow-hidden w-[300px] h-[360px] bg-slate-500 relative imagecover'>
   <Image src={item.imageone} alt="Burger" className='absolute w-full h-full object-cover z-10' width={300} height={300}/>
   <Image src={item.imagetwo} alt="Burgertwo" className='absolute w-full h-full object-cover second' width={300} height={300}/>
   </div>
   
   {item.arrival && (
    <div className='bg-red-300 diff z-40'>{item.arrival}</div>
   )}
  
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
  )
}

export default TopSellers
