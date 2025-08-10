import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowRightIcon, UserIcon } from '../Icons'

interface Props {
  id: number,
  title: string,
  desc: string,
  author: string,
  date: string,
  read: string,
  type: string,
  time: string,
  image: string
}

const ArticleCard = ({item}:{item:Props}) => {
  return (
    <div className='group transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-2 bg-white rounded-[10px] border flex flex-col w-full md:w-[300px]'>
    
      {/* image */}
      <div className="relative rounded-t-[10px] overflow-hidden">
        <Image src={item.image} alt={item.title} width={300} height={224} className='w-full h-48 rounded-t-[10px] group-hover:scale-110' />
    
        <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        <div className="absolute top-0 left-0 w-full p-4 flex items-center justify-between">
          <span className='inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-600 text-sm font-semibold rounded-full'>{item.type}</span>
          <span className="inline-flex items-center px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">{item.time}</span>
        </div>
      </div>
    
      {/* card content */}
      <div className="flex flex-col items-start gap-1 p-4">
        {/* date and read */}
        <div className="flex items-center text-sm text-gray-500 gap-3">
          <span>{item.date}</span>
          <span>{item.read}</span>
        </div>

        {/* title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors leading-tight">{item.title}</h3>

        {/* paragrph */}
        <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>

        {/* author and read button */}
        <div className="flex items-center justify-between w-full">
          {/* author */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
              <UserIcon size={15} color='purple' style='text-purple-600' />
            </div>
            <span className='text-sm font-medium text-gray-900 capitalize'>{item.author}</span>
          </div>

          {/* read button */}
          <Link href={'#'} className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors capitalize">
            <span>baca</span>
            <ArrowRightIcon size={15} style='text-purple-600' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard