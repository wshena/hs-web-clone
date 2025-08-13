import BgButton from "@/components/buttons/BgButton";
import OutlineButton from "@/components/buttons/OutlineButton";
import EmployeeCard from "@/components/cards/EmployeeCard";
import ProjectCard from "@/components/cards/ProjectCard";
import WhyUsCard from "@/components/cards/WhyUsCard";
import JobFilter from "@/components/filters/JobFilter";
import { CallIcon, GearIcon, UserIcon } from "@/components/Icons";
import Jumbotron from "@/components/Jumbotron";
import MainWrapper from "@/components/MainWrapper";
import SectionHeading from "@/components/SectionHeading";
import ProjectTab from "@/components/tabs/ProjectTab";
import { EMPLOYEE, JOB, PROJECTS, TRUST_INDICATOR } from "@/constants";
import AboutSectionContent from "@/content/AboutSectionContent";
import Image from "next/image";
import Link from "next/link";

const JumbotronSection = () => {
  return (
    <div className="flex flex-col items-center text-center gap-[15px] w-[90%] md:w-[75%] 2xl:w-[50%]">
      <h1 className="font-bold text-[2rem] md:text-[3rem] lg:text-[4rem] lg:leading-[80px]">Portofolio Kami</h1>
      <p className="text-[1rem] md:text-[1rem] lg:text-[1.7rem]">Showcases project-project terbaik yang telah kami selesaikan untuk berbagai klien di berbagai industri</p>
      <div className="flex flex-col md:flex-row items-center gap-[20px]">
        <BgButton style="bg-blue-500 hover:bg-blue-700 transition-all duration-300 ease-in-out" content={
          <span>mulai project</span>
        } />
        <OutlineButton style="border border-white text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out" content={
          <span>lihat lowongan</span>
        } />
      </div>
    </div>
  )
}

const StatsCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center border">
      <div className="text-blue-600 text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        <GearIcon size={50} style="text-blue-600" />
      </div>
            
      <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">
        15+
      </div>
        
      <p className="text-gray-600 font-medium">Teknologi Dikuasai</p>
    </div>
  )
}

export default function page() {
  const allProject = [...PROJECTS, ...PROJECTS];

  return (
    <MainWrapper>
      {/* section jumbotron */}
      <Jumbotron bg="/image/projectJumbotronBG.jpg" content={<JumbotronSection />} />

      {/* project tabs */}
      <section id="tab" className="py-10">
        <div className="content-wrapper container-px flex items-center justify-center">
          <ProjectTab />
        </div>
      </section>
      {/* Project grid */}
      <section id="projectList" className="py-10">
        <div className="content-wrapper container-px">
          <div className="w-full flex items-center justify-center">
            <div className="w-full md:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {allProject.map((item:any, idx:number) => (
                <ProjectCard key={idx} content={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* projects statistic */}
      <section id="projectList" className="py-10">
        <div className="content-wrapper container-px flex flex-col items-center gap-5">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Statistics</h1>
            <span className="text-xl text-gray-600">Angka-angka yang menunjukan pengalaman kami</span>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_,idx:number) => (
                <StatsCard key={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section id="cta" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="content-wrapper container-px flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Tertarik dengan Project Kami</h1>
            <span className="text-xl text-blue-100 mb-8">Mari diskusikan ide project Anda dan wujudkan menjadi kenyataan bersama tim expert kami</span>
            {/* buttons */}
            <div className="flex flex-col md:flex-row items-center gap-[20px]">
              <BgButton style="bg-white text-blue-800 hover:opacity-80 transition-all duration-300 ease-in-out" content={
                <span>Mulai Project Anda</span>
              } />
              <OutlineButton style="border border-white text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out" content={
                <span>Lihat Layanan</span>
              } />
            </div>
          </div>
        </div>
      </section>
    </MainWrapper>
  );
}
