import { EMAIL, FOOTER_QUICK_LINKS, KONTAK, TELP } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { CallIcon, FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, MapIcon, TwitterIcon } from './Icons'
import Image from 'next/image'

const socialMedia = [
  {
    id: 1,
    link: '#',
    icon: <FacebookIcon size={18} color='' style='text-gray-400 hover:text-white' />
  },
  {
    id: 2,
    link: '#',
    icon: <TwitterIcon size={18} color='' style='text-gray-400 hover:text-white' />
  },
  {
    id: 3,
    link: '#',
    icon: <LinkedinIcon size={18} color='' style='text-gray-400 hover:text-white' />
  },
  {
    id: 4,
    link: '#',
    icon: <InstagramIcon size={18} color='' style='text-gray-400 hover:text-white' />
  }
]

const QuickLinksSection = () => {
  return (
    <div className="flex flex-col items-start gap-[14px] capitalize">
      <h1 className='font-bold'>quick links</h1>
      {FOOTER_QUICK_LINKS.map((item:LINK_PROP) => (
        <Link href={item.link} key={item.id}>
          <h2 className='text-gray-400 hover:text-white'>{item.label}</h2>
        </Link>
      ))}
    </div>
  )
}

const ContactSection = () => {
  return (
    <div className="flex flex-col items-start gap-[14px] capitalize w-full md:w-[40%]">
      <h1 className='font-bold'>kontak</h1>
      <ul className='flex items-start flex-col gap-[10px]'>
        <li className="text-gray-400 gap-[8px] flex flex-wrap lg:items-center xl:gap-[8px]">
          <MapIcon size={18} color='gray' style='' /> {KONTAK}
        </li>
        <li className="text-gray-400 gap-[8px] flex flex-wrap lg:items-center xl:gap-[8px]">
          <CallIcon size={18} color='gray' style='' /> {TELP}
        </li>
        <li className="text-gray-400 gap-[8px] flex flex-wrap lg:items-center xl:gap-[8px]">
          <MailIcon size={18} color='gray' style='' /> {EMAIL}
        </li>
      </ul>
    </div>
  )
}

const CompanySection = () => {
  return (
    <div className="flex items-start flex-col gap-[14px] w-full md:w-[35%] lg:w-[40%]">
      <Image src={'/icon/Logo.jpeg'} width={40} height={40} alt='logo' loading='lazy' />
      <p className='text-[15px] text-gray-400 w-full text-justify'>PT Digital Solusi Nusantara adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital inovatif untuk membantu bisnis berkembang di era digital.</p>
      <div className="flex items-center gap-[10px]">
        {socialMedia.map((item:any) => (
          <Link key={item.id} href={item.link}>
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  )
}

const FooterContent = () => {
  return (
    <div className="flex flex-col gap-[25px] md:'gap-0 md:flex-row items-start justify-between">
      <CompanySection />
      <QuickLinksSection />
      <ContactSection />
    </div>
  )
}

const CopyrightSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[20px] md:gap-0 items-center justify-between text-[15px]">
      <span className='text-gray-400'>© 2025 PT Digital Solusi Nusantara. All rights reserved.</span>
      <div className="flex items-center gap-[10px]">
        <Link href={'#'}>
          <span className='text-gray-400 hover:text-white capitalize'>privacy policy</span>
        </Link>
        <Link href={'#'}>
          <span className='text-gray-400 hover:text-white capitalize'>terms & conditions</span>
        </Link>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='content-wrapper container'>
        <div className="pb-[1.5rem] border-b border-b-gray-400">
          <FooterContent />
        </div>
        <div className="pt-[1.5rem]">
          <CopyrightSection />
        </div>
      </div>
    </footer>
  )
}

export default Footer