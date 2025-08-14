'use client'
import BgButton from "@/components/buttons/BgButton";
import OutlineButton from "@/components/buttons/OutlineButton";
import EmployeeCard from "@/components/cards/EmployeeCard";
import WhyUsCard from "@/components/cards/WhyUsCard";
import JobFilter from "@/components/filters/JobFilter";
import { CallIcon, GearIcon, UserIcon } from "@/components/Icons";
import Jumbotron from "@/components/Jumbotron";
import MainWrapper from "@/components/MainWrapper";
import SectionHeading from "@/components/SectionHeading";
import { EMPLOYEE, JOB, TRUST_INDICATOR } from "@/constants";
import AboutSectionContent from "@/content/AboutSectionContent";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const JumbotronSection = () => {
  return (
    <div className="flex flex-col items-center text-center gap-[15px] w-[90%] md:w-[75%] 2xl:w-[50%]">
      <h1 className="font-bold text-[2rem] md:text-[3rem] lg:text-[4rem] lg:leading-[80px]">Bergabung dengan Tim Terbaik</h1>
      <p className="text-[1rem] md:text-[1rem] lg:text-[1.7rem]">Kembangkan karier dan wujudkan potensi terbaik Anda bersama tim yang profesional dan berpengalaman</p>
      <div className="flex flex-col md:flex-row items-center gap-[20px]">
        <BgButton style="bg-blue-500 hover:bg-blue-700 transition-all duration-300 ease-in-out" content={
          <span>lihat lowongan</span>
        } />
        <OutlineButton style="border border-white text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out" content={
          <span>tentang kami</span>
        } />
      </div>
    </div>
  )
}

const WhyChooseUsBlock = () => {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {/* icon */}
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <UserIcon size={20} color="" style="text-blue-800" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-4">Inovasi Berkelanjutan</h3>
      <p className="text-gray-600">Bekerja dengan teknologi terdepan dan berkontribusi pada proyek-proyek yang mengubah industri</p>
    </div>
  )
}

const JobCard = ({item}:{item:{
  position: string,
  type: string,
  desc: string,
  location: string,
  salary: string,
  deadline: string,
  skill: string[]
}}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* job content */}
        <div className="flex flex-col">
          {/* position */}
          <div className="flex items-center gap-3 mb-4">
            <Link href={'#'} className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              {item.position}
            </Link>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">{item.type}</span>
          </div>
          
          {/* description */}
          <p className="text-gray-600 mb-4 line-clamp-2">{item.desc}</p>

          {/* location, salary, and deadline */}
          <div className="mb-4 flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <span>{item.location}</span>
            <span>{item.salary}</span>
            <span>{item.deadline}</span>
          </div>

          {/* requirement */}
          <div className="flex flex-wrap gap-2">
            {item.skill.map((item:string, idx:number) => (
              <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">{item}</span>
            ))}
          </div>
        </div>

        {/* buttons */}
        <div className="mt-6 lg:mt-0 lg:ml-8 flex flex-col sm:flex-row lg:flex-col gap-3">
          <Link href="https://www.comprof-laravel02.hancode.my.id/karier/ui-ux-designer" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors text-center">Lihat Detail</Link>
          <Link href="https://www.comprof-laravel02.hancode.my.id/karier/ui-ux-designer/apply" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-600 hover:text-white transition-colors text-center">Lamar Sekarang</Link>
        </div>
      </div>
    </div>
  )
}

export default function page() {
  return (
    <MainWrapper>
      {/* section jumbotron */}
      <Jumbotron bg="/image/careerJumbotronBG.jpg" content={<JumbotronSection />} />

      {/* job filter */}
      <section id="jobFilter" className="py-10">
        <div className="content-wrapper container-px flex items-center justify-center">
          <Suspense fallback={<div>Loading filter...</div>}>
            <JobFilter />
          </Suspense>
        </div>
      </section>

      {/* why choose us section */}
      <section id="whyChooseUs" className="py-20">
        <div className="content-wrapper container-px flex flex-col gap-10">
          {/* heading */}
          <div className="w-full flex items-center justify-center">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengapa Bergabung dengan Kami?</h1>
              <span className="text-xl text-gray-600">Kami menawarkan lingkungan kerja yang mendukung pertumbuhan dan pengembangan karier Anda</span>
            </div>
          </div>

          {/* why choose us grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, idx:number) => (
              <WhyChooseUsBlock key={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* job list */}
      <section id="jobList" className="py-16 bg-gray-50">
        <div className="content-wrapper container-px flex flex-col gap-10">
          {/* job count */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Posisi Terbuka</h2>
              <p className="text-gray-600">1 posisi tersedia</p>
            </div>
          </div>

          <JobCard item={JOB} />
        </div>
      </section>
      
      {/* cta */}
      <section id="cta" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="content-wrapper container-px flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Tidak menemukan posisi yang sesuai?</h1>
            <span className="text-xl text-blue-100 mb-8">Kirimkan CV Anda kepada kami. Kami akan menghubungi Anda ketika ada posisi yang sesuai</span>
            {/* buttons */}
            <div className="flex flex-col md:flex-row items-center gap-[20px]">
              <BgButton style="bg-white text-blue-800 hover:opacity-80 transition-all duration-300 ease-in-out" content={
                <span>Kirim CV Spontan</span>
              } />
              <OutlineButton style="border border-white text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out" content={
                <span>pelajari tentang kami</span>
              } />
            </div>
          </div>
        </div>
      </section>
    </MainWrapper>
  );
}
