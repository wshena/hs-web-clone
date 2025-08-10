import React from 'react'
import { CheckIcon, StarIcon } from '../Icons'
import Image from 'next/image'

interface Props {
  name: string,
  position: string,
  testi: string,
  star: number,
  profilePicture: string
}

const TestimoniCard = ({content}:{
  content: Props
}) => {
  return (
    <div className='group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-yellow-200 hover:-translate-y-2 p-4'>
      <div className="flex flex-col items-start justify-between">
        {/* rating */}
        <div className="flex items-center gap-1">
          {[...Array(content.star)].map((_, idx) => (
            <StarIcon key={idx} size={15} style="text-yellow-500" />
          ))}
          <span className='text-sm'>({content.star.toString()})</span>
        </div>
        {/* rating */}

        {/* review */}
        <blockquote className="text-gray-700 leading-relaxed mb-6 italic relative">
          <i className="fas fa-quote-left text-yellow-400 text-lg mr-2"></i>
          Proses development yang transparan dan komunikasi yang sangat baik. Tim mereka benar-benar memahami kebutuhan bisnis kami dan memberikan solusi yang tepat sasaran.
          <i className="fas fa-quote-right text-yellow-400 text-lg ml-2"></i>
        </blockquote>
        {/* review */}

        {/* profile picture */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image src={content.profilePicture} width={40} height={40} className='rounded-full' alt={content.name} />
            {/* verified */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <CheckIcon size={10} color='white' />
            </div>
          </div>

          {/* details */}
          <div className="flex flex-col">
            <span className='font-bold capitalize'>{content.name}</span>
            <span className='text-sm'>{content.position}</span>
          </div>
        </div>
        {/* profile picture */}
      </div>
    </div>
  )
}

export default TestimoniCard