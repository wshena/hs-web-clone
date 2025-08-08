import BgButton from '@/components/buttons/BgButton'
import OutlineButton from '@/components/buttons/OutlineButton'
import React from 'react'

const HomeJumbotronContent = () => {
  return (
    <div className="flex flex-col items-center text-center gap-[15px] w-[90%] md:w-[75%] 2xl:w-[50%]">
      <h1 className="font-bold text-[2rem] md:text-[3rem] lg:text-[4rem] lg:leading-[80px]">Solusi Digital Terdepan untuk Bisnis Modern</h1>
      <span className="text-[1rem] md:text-[1rem] lg:text-[1.7rem]">Kami menghadirkan inovasi teknologi terbaru untuk membantu transformasi digital perusahaan Anda dengan solusi yang efektif dan efisien</span>
      <div className="flex flex-col md:flex-row items-center gap-[20px]">
        <BgButton style="bg-blue-500 hover:bg-blue-700 transition-all duration-300 ease-in-out" content={
          <span>konsultasi gratis</span>
        } />
        <OutlineButton style="border border-white text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out" content={
          <span>lihat portofolio</span>
        } />
      </div>
    </div>
  )
}

export default HomeJumbotronContent