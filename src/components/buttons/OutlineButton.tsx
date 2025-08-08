import { cn } from '@/lib/utils'
import React from 'react'

const OutlineButton = ({style, content}:{style:string, content:React.ReactNode}) => {
  return (
    <button className={cn(
      'bg-transparent capitalize text-[1rem] md:text-[1.2rem] rounded-[5px] py-[1rem] px-[1.3rem] cursor-pointer',
      style
    )}>
      {content}
    </button>
  )
}

export default OutlineButton