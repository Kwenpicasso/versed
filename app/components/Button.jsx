import Link from 'next/link'
import React from 'react'

const Button = ({title, border, cream, trans, move, gg}) => {
  
  // console.log('1',move);
  return (
    <div className='w-full relative cursor-pointer'>
     <Link href={`/${move}`}>
     <div className={`w-[100px] h-[100px] sm:w-[90px] sm:h-[90px] flex justify-center items-center border animate-pulse ${border} ${cream} ${trans} lg:bg-white rounded-full  p-3`}>
  <h1 className='capitalize text-xs text-center text-black font-semibold'>{title}</h1>
  <div className={`w-[35px] h-[1px] bg-black absolute left-[-24px] lg:${gg}`}></div>
</div>
     </Link>
    </div>
  )
}

export default Button
