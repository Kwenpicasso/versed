import React from 'react'
import DropDownLink from '../components/DropDownLink'
import Image from 'next/image'
import { HourglassIcon, Smile } from 'lucide-react'
import NewArrivals from '../components/NewArrivals'
import FilterDrop from '../components/FilterDrop'
import { client } from '../utils/configSanity'
import Link from 'next/link'



// querying the data of the products from sanity studio

const page = async ({searchParams}) => {
  const {price, category, shopall, ingredient} = searchParams
  const priceOrder = price ? `| order(price ${price})` : ''
  const order = `${priceOrder}`;
  const productFilter = `_type == 'products'`
  const categoryFilter = category ? `&& '${category}' in categories` : ''
  const shopAllFilter = shopall ? `&& '${shopall }' in shopall` : ''
  const ingredientFilter = ingredient ? `&& '${ingredient}' in ingredients` : ''
  const filter =`*[${productFilter}${categoryFilter}${shopAllFilter}${ingredientFilter}]`
  //groq query to fetch the data
  async function getData() {

    const query = `${filter} ${order} {
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
  const data = (await getData())
 
  
  return (
    <div className='w-full h-full mt-6 max lg:mt-[19%]'>
      <h1 className='uppercase text-3xl font-semibold text-center mb-4 text-black  md:text-2xl'>all skincare</h1>

      {/* this shop sections that display the products */}
      <div className='w-full h-full flex gap-3 '>
        {/* left */}
        <div className='w-[20%] lg:hidden flex flex-col px-4 h-screen sticky top-[110px] overflow-y-auto overflow-x-hidden z-10 '>
         <DropDownLink/>
        </div>
        {/* right */}
        <div className=' w-[80%] h-full flex flex-col lg:w-full '>
          <div className='hidden lg:flex w-full  mx-auto justify-start  p-3 '>
            <FilterDrop/>
          </div>
       <div className='w-full flex flex-wrap gap-4 lg:justify-center lg:w-full '>
      {data.map((item) => (
        <Link href={`/products/${item.slug}`}>
         <div className='w-[330px] h-[490px] flex flex-col items-center p-6'>
         <div className='relative'>
         <div className='overflow-hidden w-[300px] h-[360px] bg-slate-500 relative imagecover'>
   <Image src={item.imageone} alt="Burger" className='absolute w-full h-full object-cover z-10' width={300} height={300}/>
   <Image src={item.imagetwo} alt="Burgertwo" className='absolute w-full h-full object-cover second' width={300} height={300}/>
   </div>
    {item.arrival && (
           <div className='absolute bg-[#aad6b9] px-2 py-1 text-black font-semibold uppercase rounded-xl text-xs bottom-[-10px] left-[50px] z-40 '>20% off code sneakpeek20</div>
    )}
         </div>
         
         <div className='w-full flex flex-col justify-start items-start mt-5'>
         
             <h1 className='uppercase font-light text-black'>
               {item.name}
             </h1>
           {/* price and emojis */}
           <div className='w-full flex justify-between items-center mt-3'>
             <h2 className='font-semibold text-black'>${item.price}</h2>
             <div className='flex'>
             <Smile size={20} className='text-black'/>
             <HourglassIcon size={20} className='text-black'/>
             </div>
           </div>
           <div className="rating w-[120px]">
                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-black " />
                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-black" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-black" />
                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-black" />
                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-black" />
                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-black"  checked/>
                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-black" />
             </div>

         </div>
       </div>
        </Link>
      ))}
         
       </div>
         
        </div>
      </div>
        {/* new arrivals section  */}
        <NewArrivals/>

    </div>
  )
}

export default page
