
import CartButton from '@/app/components/CartButton'
import ImageGallery from '@/app/components/ImageGallery'
import Tab from '@/app/components/Tab'
import { client } from '@/app/utils/configSanity'
import { Minus, Plus } from 'lucide-react'
import React from 'react'




// querying the data of the products from sanity studio
async function getData(slug) {
  const query = `*[_type == 'products' && slug.current == '${slug}'][0]{
    'images': image[].asset->url,
      name,
      price,
      _id,
      details,
      'slug': slug.current,
      nametwo,
      price_id
  }`; 
  const data = await client.fetch(query);
  return data;
}
const ProductPage = async ({params}) => {
  
  const data = (await getData(params.slug)) 
  
  

  return (
    <div className='w-[90%] max h-full flex gap-8 p-3 lg:flex-col lg:pt-[10%]'>
      {/* images gallery */}
     <ImageGallery data={data}/>
      {/* images desc */}
      <div className='w-[45%] h-full flex flex-col pl-[2%] lg:w-full gap-2 my-auto' >
       <h3 className='capitalize text-sm text-gray-500 '>
        {data.name}
       </h3>
       <h1 className='uppercase font-serif text-3xl text-black font-medium lg:text-2xl'>
        {data.nametwo}
       </h1>

       <div className='w-[50%] flex gap-3 items-center lg:w-full'>
       <div className="rating w-[90px] space-x-2">
                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-black " />
                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-black" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-black" />
                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-black" />
                 <input type="radio" name="rating-2" className="mask mask-star-2 bg-black" />
                
        </div>
         <p className='text-black'>4.7</p>
         <div className='w-[1px] h-[25px] bg-black'>
         </div>
         <h2 className='text-sm text-black'>118 Reviews</h2>
       </div>

       <p className='text-black text-sm mt-5'>
        {data.details}
       </p>

       
        <div className='w-full flex justify-between mt-3 items-center'>
        <h1 className='text-black text-sm'>SIZE: 15ml</h1>
        <h1 className='text-black font-semibold text-xl font-serif'>${data.price}</h1>
       </div>
      

       <div className='w-full flex h-[50px] mt-4'>
       <div className='w-[35%] bg-white text-sm border border-black flex justify-center items-center gap-5 lg:gap-3'>
        <Minus size={20} />
        <h1>1</h1>
        <Plus size={20} />
       
       </div>
        {/* add to bag */}
       <CartButton currency='USD' image={data.images[0]} price={data.price} name={data.name} nametwo={data.nametwo} price_id={data.price_id}/>
       
      
      
       </div>
       <Tab/>
      </div>
      
    </div>
  )
}

export default ProductPage
