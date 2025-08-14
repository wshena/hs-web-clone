'use client'
import { NAV_LINKS } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { AngleDownIcon, AngleUpIcon, CheckIcon } from './Icons'
import { RootState, useAppDispatch, useAppSelector } from '@/lib/redux/store'
import { setLanguage } from '@/lib/redux/utilitySlice'
import MenuButton from './buttons/MenuButton'

const LanguageButton = ({icon, label, value}:{icon:string, label:string, value:string}) => {
  const dispatch = useAppDispatch()
  const language = useAppSelector((state:RootState) => state.utility.language)
  const [hover, setHover] = useState<boolean>(false);

  return (
    <button 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() =>  dispatch(setLanguage(value))}
      className={cn(
        'w-full flex items-center justify-between py-[.7rem] px-[1rem] rounded-[5px] text-black cursor-pointer',
        hover && 'bg-blue-200 text-blue-800',
        value === language && 'bg-blue-200 text-blue-800'
      )}
    >
      <div className="flex items-center gap-[10px]">
        <Image src={icon} width={20} height={20} alt='id' />
        <span className='text-[15px] capitalize'>{label}</span>
      </div>
      {value === language && (
        <CheckIcon size={12} color='' style='text-blue-800' />
      )}
    </button>
  )
}

const LanguageChoose = () => {
  const [hover, setHover] = useState(false);
  const language = useAppSelector((state:RootState) => state.utility.language)
  const languageDisplay = language === 'id' ? 'bahasa indonesia' : 'bahasa inggris'
  const languageImage = language === 'id' ? '/icon/id.png' : '/icon/us.png'

  return (
    <div 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative"
    >
      <div className="w-[193px] hover:cursor-pointer hidden md:flex items-center justify-between capitalize py-[.7rem] px-[1rem] rounded-[6px] text-black hover:bg-blue-200 hover:text-blue-800">
        <Image src={languageImage} width={20} height={20} alt='id' className='rounded-[5px]' />
        <span className='text-[15px] capitalize'>{languageDisplay}</span>
        {hover ? (
          <AngleUpIcon size={15} color='black' style='' />
        ) : (
          <AngleDownIcon size={15} color='black' style='' />
        )}
      </div>

      {/* language choose */}
      {hover && (
        <div className="absolute w-[220px] h-fit right-0 z-50">
          <div className="flex border items-start flex-col rounded-[6px] bg-white">
            <LanguageButton value='id' icon='/icon/id.png' label='bahasa indonesia' />
            <LanguageButton value='us' icon='/icon/us.png' label='bahasa inggris' />
          </div>
        </div>
      )}
    </div>
  )
}

const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <nav className=''>
      <div className="content-wrapper container-px flex items-center justify-between">
        <Link href={'/'}>
          <Image src={'/icon/Logo.jpeg'} width={64} height={64} alt='logo' />
        </Link>
        <ul className="hidden lg:flex items-center xl:gap-[15px]">
          {NAV_LINKS.map((item:LINK_PROP) => (
            <li key={item.id}>
              <Link href={item.link}>
                <span className={cn('text-[13px] xl:text-[15px] capitalize py-[.7rem] px-[1rem] rounded-[6px] text-black hover:bg-blue-200 hover:text-blue-800', item.link === pathname && 'bg-blue-200 text-blue-800')}>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-[20px]">
          <LanguageChoose />

          {/* mobile menu */}
          <MenuButton />
        </div>
      </div>
    </nav>
  )
}

export default Navbar