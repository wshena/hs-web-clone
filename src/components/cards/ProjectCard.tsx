import React from 'react'
import { ArrowRightIcon, CheckIcon } from '../Icons'
import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({content}:{content:{image:string, title:string, desc:string, type:string, projectType:string, date:string,}}) => {
  return (
    <div className='group transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-2 bg-white rounded-[10px] border flex flex-col w-full md:w-[300px]'>

      {/* image */}
      <div className="relative rounded-t-[10px] overflow-hidden">
        <Image src={content.image} alt={content.title} width={300} height={224} className='w-full h-48 rounded-t-[10px] group-hover:scale-110' />

        <div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <Link href={'#'}>
            <div className="rounded-full bg-white py-2 px-5 font-bold text-sm capitalize hover:bg-blue-50">
              <span>lihat detail</span>
            </div>
          </Link>
        </div>

        <div className="absolute top-0 left-0 w-full p-4">
          <span className='inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-sm font-semibold rounded-full'>{content.projectType}</span>
        </div>
      </div>

      {/* card content */}
      <div className="p-5 flex flex-col items-start gap-3">
        <h2 className='group-hover:text-blue-600 capitalize font-bold text-md'>{content.title}</h2>
        <span className='text-sm'>{content.desc}</span>
        
        {/* detail button */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3 text-sm text-gray-500 capitalize">
            <span>{content.projectType}</span>
            <span>{content.date}</span>
          </div>
          <Link href={'#'}>
            <ArrowRightIcon style='text-blue-700' color='' size={15} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard