'use client'
import { PROJECT_TABS } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const ProjectTab = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap items-center gap-6">
      {PROJECT_TABS.map((item:any) => (
        <Link key={item.id} href={item.link} className={cn(
          'px-6 py-2 rounded-full transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm md:text-md',
          item.link === pathname && 'bg-blue-500 text-white'
        )}>
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  )
}

export default ProjectTab