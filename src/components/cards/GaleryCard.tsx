import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  image: string,
  title: string,
  date: string,
  type: string,
  category: string
}

const GaleryCard = ({item}:{item:Props}) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 gallery-grid-animation" style={{
      opacity: '1',
      transform: 'translateY(0px)'
    }}>
      {/* image */}
      <div className="aspect-square relative overflow-hidden bg-gray-100 gallery-item-image">
        <Image src={item.image} width={300} height={300} loading='lazy' alt={item.title} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />

        {/* overlay */}
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
            <button className="inline-flex items-center px-3 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100">Perbesar</button>
            <Link href={'#'} className='inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700' >Detail</Link>
          </div>
        </div>

        {/* type */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">{item.type}</span>
        </div>

        {/* category */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-white/90 text-gray-800">{item.category}</span>
        </div>
      </div>

      {/* content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center">{item.date}</span>
          <Link href={'#'} className='text-blue-600 hover:text-blue-700 font-medium'>Lihat Detail</Link>
        </div>
      </div>
    </div>
  )
}

export default GaleryCard