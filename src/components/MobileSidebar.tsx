'use client'
import { NAV_LINKS } from '@/constants'
import { RootState, useAppSelector } from '@/lib/redux/store'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const ActiveSign = () => {
  return (
    <div className="px-[.4rem] py-[.1rem] rounded-[30px] bg-blue-300 text-blue-800">
      <span className='text-[10px] capitalize'>active</span>
    </div>
  )
}

const MobileSidebar = () => {
  const pathname = usePathname()
  const sidebar = useAppSelector((state:RootState) => state.utility.sidebar)

  return (
    <div className={cn(
      'fixed top-[64px] left-0 bg-gray-100 h-full w-full',
      'block lg:hidden',
      'transition-all duration-300 ease-in-out',
      sidebar ? 'translate-x-0' : 'translate-x-[1000px]',
      'flex items-start justify-center'
    )}>
      <ul className="flex flex-col items-start p-[1rem] rounded-[5px] bg-white w-[90%] md:w-[80%]">
        {NAV_LINKS.map((item:LINK_PROP) => {
          const active = item.link === pathname

          return (
            <li key={item.id} className={cn(
              'p-[.8rem] w-full rounded-[5px] flex items-center justify-between',
              active && 'bg-blue-200'
            )}>
              <Link href={item.link}>
                <span className='capitalize text-[15px]'>{item.label}</span>
              </Link>

              {active && <ActiveSign />}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MobileSidebar