'use client'
import { ChevronDown, Search, ShoppingBag, User } from 'lucide-react'
import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'
import Button from './Button'
import SubNav from './SubNav'
import { useShoppingCart } from 'use-shopping-cart'




const Navbar = () => {
  const NAV_LINKS = [
    
    { href: '/', key: 'quiz', label: 'skin decoder quiz' },
    { href: '/', key: 'about', label: 'about' },
    { href: '/', key: 'skin', label: 'good skin squad' },
    
  ];
    const [navOpen, setNavOpen] = useState(false); 
    const {handleCartClick, cartCount} = useShoppingCart();
    
  return (
   <nav className='w-full h-[70px] bg-black z-[50] fixed top-0'>
    {/* nav-wrapper */}
    <div className='w-full flex justify-between items-center h-full text-white px-[30px] text-sm'>
        {/* left */}
        <div className='text-white uppercase lg:hidden'>
        <div className="dropdown">
  <label tabIndex={0} className=""> <div className='flex justify-center items-center'>
        <h1>united states(usd)</h1>
        <ChevronDown/>
        </div></label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52" >
    <li className='text-black'><a>Nigeria(naira)</a></li>
    <li className='text-black'><a>canada(usd)</a></li>
  </ul>
</div>
       
        </div>
        {/* left toogle */}
        <div className="menu-toggle lg:block hidden" onClick={() => setNavOpen(!navOpen)}>
          <div className={navOpen ? 'hambox hamboxOpen' : 'hambox'}>
            <span className={navOpen ? 'linetop spin' : 'linetop'}></span>
            <span className={navOpen ? 'linebottom spin' : 'linebottom'}></span>
            
          </div>
        </div>
        <div className='hidden nav-overlay lg:visible px-[5%] pt-[15%] flex-col gap-2' style={{
        top: navOpen ? '0' : '-110%',
        transitionDelay: navOpen ? '0s' : '0s',
        
        
      }}>
          
               <Accordion type="single" collapsible  className='w-full '>
               <AccordionItem value="item-1">
                 <AccordionTrigger className="uppercase" ><h1>Shop Now</h1></AccordionTrigger>
                  <AccordionContent>
                  <Accordion type="single" collapsible  className='w-[99%] mx-auto '>
               <AccordionItem value="item-2" className='border-none'>
                 <AccordionTrigger className="uppercase" ><h1>all products</h1></AccordionTrigger>
                  <AccordionContent>
                 Bundles & Gifts
                </AccordionContent>
                  <AccordionContent>
                 Best Sellers
                </AccordionContent>
                  <AccordionContent>
                 Merch Tools
                </AccordionContent>
                  <AccordionContent>
                 Travel Size
                </AccordionContent>
               </AccordionItem>
               <AccordionItem value="item-3" className='border-none'>
                 <AccordionTrigger className="uppercase" ><h1>all skin types</h1></AccordionTrigger>
                  <AccordionContent>
                 Dryness
                </AccordionContent>
                  <AccordionContent>
                 Agning Skin
                </AccordionContent>
                  <AccordionContent>
                 Dullness
                </AccordionContent>
                 
               </AccordionItem>
               <AccordionItem value="item-4" className='border-none'>
                 <AccordionTrigger className="uppercase" ><h1>facail cleansers</h1></AccordionTrigger>
                  <AccordionContent>
                 Serums
                </AccordionContent>
                  <AccordionContent>
                 BodyCare
                </AccordionContent>
                  <AccordionContent>
                 Mask + Treatments
                </AccordionContent>
                  <AccordionContent>
                 Mositurizers & SPF
                </AccordionContent>
                 
               </AccordionItem>
             </Accordion>
                </AccordionContent>
               </AccordionItem>
             </Accordion>

           {NAV_LINKS.map((link) => (
             <div className='w-full flex flex-col gap-4 uppercase' key={link.key}>
             <h1>{link.label}</h1>
             <div className='w-full h-[1px] bg-white'></div>

           </div>
           ))}

            
                
        

          <div className='w-full flex justify-center items-center relative'>
          <Image src='/mama.webp' width={500} height={500} alt='mama' className='w-full h-full object-cover'/>
          <div className='absolute right-4'>
          <Button title='save 25%' gg='hidden' move='products'/>
          </div>
          </div>
            


              
                
            </div>
        {/* logo */}
        <div className=' w-[5%] h-full flex flex-col justify-center items-center uppercase gap-[2px] z-[50]'>
            <div className='w-[70px] h-[3px] bg-white'></div>
            <h1 className='tracking-[2px] font-bold text-white sm:text-xs'>versed</h1>
            <div className='w-[70px] h-[3px] bg-white'></div>
            
        </div>
        {/* right */}
        <div className='flex gap-6 justify-center items-center lg:gap-2'>
            
            
            
            <User size={20} />
           
            <div className='relative w-9 h-9 flex justify-center items-center cursor-pointer'>
            <ShoppingBag size={20} onClick={() => handleCartClick()}/>
            <h1 className='absolute rounded-full bg-blue-400 p-1 w-5 h-5 flex justify-center items-center top-0 right-0'>{cartCount}</h1>
            </div>
            

        </div>

    </div>
   

  

 <SubNav/>
   </nav>
  )
}

export default Navbar
