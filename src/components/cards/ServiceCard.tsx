import React from 'react'
import { ArrowRightIcon, CheckIcon } from '../Icons'
import Image from 'next/image'
import BgButton from '../buttons/BgButton'
import Link from 'next/link'

const ServiceCard = ({content}:{content:{image:string, title:string, desc:string, checklist:string}}) => {
  return (
    <div className='group transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-2 bg-white rounded-[10px] border flex flex-col w-full md:w-[300px]'>
      {/* image */}
      <div className="relative rounded-t-[10px] overflow-hidden">
        <Image src={content.image} alt={content.title} width={300} height={190} className='w-full h-48 rounded-t-[10px] group-hover:scale-110' />
      </div>

      {/* card content */}
      <div className="p-5 flex flex-col items-start gap-3">
        <h2 className='group-hover:text-blue-600 capitalize font-bold text-md'>{content.title}</h2>
        <span className='text-sm'>{content.desc}</span>
        <div className="flex items-center gap-3">
          <CheckIcon size={15} color='' style='text-green-500' />
          <span className='text-[12px] text-gray-800'>{content.checklist}</span>
        </div>
        <Link href={'#'} className='w-full'>
          <BgButton style='w-full flex justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' content={
            <div className='flex items-center gap-3'>
              <span className='capitalize text-sm text-white'>pelajari lebih lanjut</span>
              <ArrowRightIcon size={15} color='white' />
            </div>
          } />
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard