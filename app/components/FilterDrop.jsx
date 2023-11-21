'use client'
import { useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import React from 'react'

const sortOptions = [
{name: 'Price, Low to High', value: '?price=asc'},
{name: 'Price, High to Low', value: '?price=desc'},
]
const  FilterDrop = () => {
  const router= useRouter();
  return (
    <Select onValueChange={(value) => router.replace(value)} >
  <SelectTrigger className="w-[100px] text-sm text-black">
    <SelectValue className='text-black' placeholder="SORTBY" />
  </SelectTrigger>
  <SelectContent>
    {sortOptions.map((option) => (
      <SelectItem key={option.name} value={option.value} className='text-center text-blac'>{option.name}</SelectItem>
    ))}
   
  </SelectContent>
</Select>

  )
}

export default FilterDrop
