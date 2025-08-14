import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowRightIcon } from '../Icons'

interface Props {
  name: string,
  position: string,
  desc: string,
  picture: string
}

const EmployeeCard = ({item}:{item:Props}) => {
  return (
    <div className='group transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-2 bg-white rounded-[10px] border flex flex-col w-full md:w-[300px]'>
    
      {/* image */}
      <div className="relative rounded-t-[10px] overflow-hidden">
        <Image src={item.picture} alt={item.name} width={300} height={200} className='w-full rounded-t-[10px] group-hover:scale-110' />
      </div>
    
      {/* card content */}
      <div className="flex flex-col items-start gap-1 p-6">
        {/* title */}
        <h3 className="capitalize text-2xl font-bold text-gray-900 mb-2">{item.name}</h3>

        {/* position */}
        <h4 className='capitalize text-blue-600 font-semibold mb-4 text-lg'>{item.position}</h4>

        {/* paragrph */}
        <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>

        {/* see details button */}
        <div className="w-full flex items-center justify-center">
          <Link href={'#'} className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
            <ArrowRightIcon size={15} color='white' />
            Lihat Detail
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard