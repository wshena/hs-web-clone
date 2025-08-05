import { cn } from '@/lib/utils'
import React from 'react'

const BgButton = ({label, style}:{label:string, style:string}) => {
  return (
    <button className={cn(
      'capitalize text-[1rem] md:text-[1.2rem] rounded-[5px] py-[1rem] px-[1.3rem] cursor-pointer',
      style
    )}>
      {label}
    </button>
  )
}

export default BgButton