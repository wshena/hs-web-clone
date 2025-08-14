import React from 'react'

interface Props {
  icon: React.ReactNode,
  title: string,
  paragraph: string
}

const WhyUsCard = ({item}:{item:Props}) => {
  return (
    <div className='group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-200 hover:-translate-y-2 p-8 flex flex-col gap-5'>
      {/* icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {item.icon}
      </div>

      {/* title */}
      <h1 className='text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors capitalize'>{item.title}</h1>

      {/* paragraph */}
      <p className='text-gray-600 leading-relaxed'>{item.paragraph}</p>

      {/* decoration */}
      <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
    </div>
  )
}

export default WhyUsCard