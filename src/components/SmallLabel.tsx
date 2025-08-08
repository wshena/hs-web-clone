import { cn } from '@/lib/utils'
import React from 'react'

const SmallLabel = ({label, icon, style}:{label:string, icon:React.ReactNode, style:string}) => {
  return (
    <div className={cn(
      "inline-flex items-center px-4 py-2 backdrop-blur-sm rounded-full text-sm font-semibold",
      style
    )}>
      {icon}
      <span className='capitalize'>{label}</span>
    </div>
  )
}

export default SmallLabel