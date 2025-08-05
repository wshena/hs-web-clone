import React from 'react'

const Jumbotron = ({bg, content}:{bg:string, content:React.ReactNode}) => {
  return (
    <div className="relative w-full h-[500px] lg:h-[750px]" style={{
      backgroundImage: `url("${bg}")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      <div className="absolute w-full h-full top-0 left-0 bg-black/50 flex items-center justify-center text-white">
        {content}
      </div>
    </div>
  )
}

export default Jumbotron