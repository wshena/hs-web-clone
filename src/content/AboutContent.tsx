import BgButton from '@/components/buttons/BgButton'
import OutlineButton from '@/components/buttons/OutlineButton'
import { ArrowRightIcon, CallIcon, StarIcon } from '@/components/Icons'
import SmallLabel from '@/components/SmallLabel'
import Link from 'next/link'
import React from 'react'

const PositiveTraits = [
  <div className="flex items-center gap-1">
    {/* icon */}
    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4"></div>

    <div className="flex flex-col items-start">
      <span className='font-semibold text-gray-900'>Tim Profesional</span>
      <span className='text-gray-600 text-sm'>Expert berpengalaman</span>
    </div>
  </div>,

  <div className="flex items-center gap-1">
    {/* icon */}
    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4"></div>
    <div className="flex flex-col items-start">
      <span className='font-semibold text-gray-900 capitalize'>tepat waktu</span>
      <span className='text-gray-600 text-sm'>Delivery sesuai jadwal</span>
    </div>
  </div>,

  <div className="flex items-center gap-1">
    {/* icon */}
    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4"></div>
    <div className="flex flex-col items-start">
      <span className='font-semibold text-gray-900 capitalize'>berkualitas</span>
      <span className='text-gray-600 text-sm'>Standar tinggi</span>
    </div>
  </div>,

  <div className="flex items-center gap-1">
    {/* icon */}
    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4"></div>
    <div className="flex flex-col items-start">
      <span className='font-semibold text-gray-900 capitalize'>support 24/7</span>
      <span className='text-gray-600 text-sm'>Dukungan penuh</span>
    </div>
  </div>,
]

const AboutContent = ({image}:{image:React.ReactNode}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-7 lg:gap-0 items-center justify-between">
      <div className="order-2 lg:order-1 flex flex-col items-start gap-6 w-full lg:w-[50%]">
        <SmallLabel icon={<StarIcon size={15} color='' style='text-blue-700' />} label='tentang kami' style='bg-blue-200' />
        <h1 className='text-3xl md:text-5xl font-bold text-gray-900 leading-tight capitalize'>tentang PT digital solusi nusantara</h1>
        <p className="text-gray-600 text-sm md:text-md lg:text-lg leading-relaxed space-y-4">
          Sejak didirikan pada tahun 2015, kami telah menjadi mitra terpercaya bagi lebih dari 500 perusahaan dalam transformasi digital mereka. Tim ahli kami terdiri dari profesional berpengalaman di bidang teknologi informasi, desain, dan strategi bisnis.Kami mengkhususkan diri dalam pengembangan aplikasi web dan mobile, sistem manajemen enterprise, e-commerce, dan solusi cloud computing. Dengan pendekatan yang berfokus pada klien, kami memastikan setiap solusi yang kami berikan sesuai dengan kebutuhan spesifik dan tujuan bisnis Anda.
        </p>

        {/* traits */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3 justify-between">
          {PositiveTraits.map((item:any, idx:number) => (
            <div key={idx}>
              {item}
            </div>
          ))}
        </div>
        
        {/* button */}
        <div className="flex w-full flex-col md:flex-row items-center gap-4">
          <Link href={'#'} className='w-full'>
            <BgButton style='w-full bg-blue-600 hover:bg-blue-700 hover:scale-110 text-white capitalize text-[10px] flex justify-center' content={
              <div className='flex items-center gap-3'>
                <span>pelajari lebih lanjut</span>
                <ArrowRightIcon size={15} color='white' style='' />
              </div>
            }  />
          </Link>
          <Link href={'#'} className='w-full'>
            <OutlineButton style='w-full border border-blue-700 hover:bg-blue-700 text-blue-700 hover:text-white capitalize text-[10px] flex justify-center' content={
              <div className='flex items-center gap-3'>
                <span>konsultasi gratis</span>
                <CallIcon size={15} color='' style='' />
              </div>
            }  />
          </Link>
        </div>
      </div>

      {/* image */}
      <div className="order-1 lg:order-2">
        {image}
      </div>
    </div>
  )
}

export default AboutContent