import React from 'react'
import { CartIcon } from '../Icons'
import Link from 'next/link'

interface Props {
  name: string,
  company: string,
  category: string,
  desc: string,
  price: string,
  discount: string,
  priceAfterDiscount: string,
  stock: string,
  link: {
    label: string,
    link: string
  }[]
}

const ProductCard = ({item}:{item:Props}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
      {/* image */}
      <div className="relative overflow-hidden rounded-t-lg">
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          <CartIcon size={30} color='' style='text-gray-600' />
        </div>
      </div>

      {/* info */}
      <div className="p-8 flex flex-col items-start gap-5">
        {/* category */}
        <span className="text-xs text-blue-600 font-medium">{item.category}</span>
        {/* name */}
        <Link href={'#'} className='hover:text-blue-600 transition-colors'>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{item.name}</h3>
        </Link>
        {/* company */}
        <span className="text-sm text-gray-500 mb-2">{item.company}</span>
        {/* decs */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.desc}</p>
        {/* price */}
        <span className="text-lg font-bold text-gray-900">{item.price}</span>
        <span className="text-xs text-gray-500">{item.stock}</span>

        {/* button */}
        <div className="flex items-center flex-col gap-4 w-full">
          <Link href="#" className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            <i className="fas fa-eye mr-2"></i>
            Lihat Detail
          </Link>
          <Link href="#" target="_blank" className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium">
            <i className="fab fa-whatsapp mr-2"></i>
            Tanya via WhatsApp
          </Link>
        </div>

        {/* marketplace link */}
        <div className="w-full grid grid-cols-2 gap-2 mt-3">
          {item.link.map((item:{label:string, link:string}) => (
            <Link key={item.label} href={item.link} className='inline-flex items-center justify-center px-2 py-1.5 border border-gray-300 text-gray-700 rounded-md text-xs font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 group'>
              <span className="truncate">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductCard