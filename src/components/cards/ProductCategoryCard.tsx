import Link from 'next/link'
import React from 'react'

interface Props {
  icon: React.ReactNode,
  title: string,
  quantity: string,
  link: string
}

const ProductCategoryCard = ({item}:{item:Props}) => {
  return (
    <Link href={item.link} className="group">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow duration-300">
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
          {item.icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
        <span className="text-sm text-gray-500 mt-1">{item.quantity}</span>
      </div>
    </Link>
  )
}

export default ProductCategoryCard