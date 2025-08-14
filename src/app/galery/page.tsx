import BgButton from "@/components/buttons/BgButton";
import OutlineButton from "@/components/buttons/OutlineButton";
import ArticleCard from "@/components/cards/ArticleCard";
import EmployeeCard from "@/components/cards/EmployeeCard";
import GaleryCard from "@/components/cards/GaleryCard";
import WhyUsCard from "@/components/cards/WhyUsCard";
import BlogFilter from "@/components/filters/BlogFilter";
import GaleryFilter from "@/components/filters/GaleryFilter";
import JobFilter from "@/components/filters/JobFilter";
import { ArrowRightIcon, CallIcon, GearIcon, UserIcon } from "@/components/Icons";
import Jumbotron from "@/components/Jumbotron";
import MainWrapper from "@/components/MainWrapper";
import SectionHeading from "@/components/SectionHeading";
import { ARTICLES, EMPLOYEE, JOB, TRUST_INDICATOR } from "@/constants";
import AboutSectionContent from "@/content/AboutSectionContent";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const JumbotronSection = () => {
  return (
    <div className="flex flex-col items-center text-center gap-[15px] w-[90%] md:w-[75%] 2xl:w-[50%]">
      <h1 className="font-bold text-[2rem] md:text-[3rem] lg:text-[4rem] lg:leading-[80px]">Galeri Kami</h1>
      <p className="text-[1rem] md:text-[1rem] lg:text-[1.7rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, repudiandae.</p>
    </div>
  )
}

export default function page() {
  return (
    <MainWrapper>
      {/* section jumbotron */}
      <Jumbotron bg="/image/galeryJumbotronBG.jpg" content={<JumbotronSection />} />

      {/* card grid section */}
      <section id="cardGrid" className="py-10">
        <div className="content-wrapper container-px">
          <div className="flex items-center justify-center">
            <div className="w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">  
              {[...Array(3)].map((_, idx:number) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserIcon size={20} style="text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">1</div>
                  <div className="text-gray-600">Video</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* galery filter */}
      <section id="jobFilter" className="py-10">
        <div className="content-wrapper container-px flex items-center flex-col gap-3">
          <Suspense fallback={<div>Loading filter...</div>}>
            <GaleryFilter />
          </Suspense>
          <div className="w-full gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(7)].map((_, idx:number) => (
              <GaleryCard key={idx} item={{
                image: '/image/article1.png',
                title: 'Image 1',
                type: 'Image',
                category: 'General',
                date: '22 Juli 2023'
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* category section */}
      <section id="category" className="py-10">
        <div className="content-wrapper container-px">
          <div className="w-full flex items-center justify-center">
            <div className="w-full flex flex-col items-center gap-5">
              {/* heading */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Jelajahi <span className="text-blue-600">Kategori</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Temukan galeri berdasarkan kategori yang Anda minati</p>

              {/* category grid */}
              <div className="w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">  
                {[...Array(4)].map((_, idx:number) => (
                  <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <UserIcon size={20} style="text-purple-600" />
                      </div>
                      <span className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">General</span>
                      <span className="text-sm text-gray-600">1 item</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainWrapper>
  );
}
