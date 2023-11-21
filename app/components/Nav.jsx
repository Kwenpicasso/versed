import React from 'react'
import { client, urlFor } from '../utils/configSanity';
import Image from 'next/image';

async function getData() {
  const query = `*[_type == 'products']{
    name,
    price,
    'image': image[].asset->url
  }`;
  const data = await client.fetch(query);
  return data;


}

const Nav = async () => {
  const data = (await getData())
  

  return (
    
  <div>
    {data?.map((item) => (
<>
<p>{item.name}</p>
<Image src={item.image[2]} width={200} height={200} alt='navimage'  />
</>
  



))}
 
  </div>

  )
}




export default Nav
