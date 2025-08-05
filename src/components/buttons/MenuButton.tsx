'use client'
import React from 'react'
import { MenuIcon } from '../Icons'
import { RootState, useAppDispatch, useAppSelector } from '@/lib/redux/store'
import { setSidebar } from '@/lib/redux/utilitySlice'

const MenuButton = () => {
  const dispath = useAppDispatch()
  const sidebar = useAppSelector((state:RootState) => state.utility.sidebar)
  
  return (
    <button className='bg-none block lg:hidden' onClick={() => dispath(setSidebar(!sidebar))}>
      <MenuIcon size={20} color='black' style='' />
    </button>
  )
}

export default MenuButton