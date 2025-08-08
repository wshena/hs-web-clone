import BgButton from "@/components/buttons/BgButton";
import ProjectCard from "@/components/cards/ProjectCard";
import ServiceCard from "@/components/cards/ServiceCard";
import { ArrowRightIcon, GearIcon } from "@/components/Icons";
import Jumbotron from "@/components/Jumbotron";
import MainWrapper from "@/components/MainWrapper";
import SectionHeading from "@/components/SectionHeading";
import SmallLabel from "@/components/SmallLabel";
import { NUMBER_HOME_SECTION, PROJECTS, SERVICES } from "@/constants";
import AboutContent from "@/content/AboutContent";
import HomeJumbotronContent from "@/content/HomeJumbotronContent";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <MainWrapper>
      {/* section jumbotron */}
      <Jumbotron bg="/image/homeJumbotronBG.jpg" content={<HomeJumbotronContent />} />

      {/* Number section */}
      <section id="number" className="content-wrapper container-px flex items-center justify-center py-[1.5rem]">
        <ul className="grid grid-cols-2 md:flex md:items-center md:justify-between w-[90%] lg:w-[70%]">
          {NUMBER_HOME_SECTION.map((item:any) => (
            <li key={item.id} className="flex flex-col items-center">
              <span className={cn(
                'text-[2.3rem] font-bold'
              )}>{item.count}</span>
              <span className="text-[.8rem] md:text-[1rem] capitalize">{item.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* about section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="content-wrapper container-px">
          <AboutContent image={
            <div className='relative'>
              <Image src={'/image/companyBuilding.jpg'} width={570} height={570} className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500" alt="company-building" />

              {/* floating circles */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-300 rounded-full opacity-20 animate-pulse" style={{
                animationDelay: '1s'
              }}></div>

            </div>
          } />
        </div>
      </section>

      {/* service section */}
      <section id="services" className="py-20">
        <div className="content-wrapper container-px flex flex-col gap-7 items-center">
          {/* heading */}
          <SectionHeading icon={<GearIcon size={15} color='' style='text-blue-800' />} iconLabel="tentang kami" iconColor="bg-blue-100" heading="layanan kami" headingColor="text-gra-900" paragraph="Kami menyediakan berbagai layanan teknologi profesional yang dirancang khusus untuk memenuhi kebutuhan dan mengakselerasi pertumbuhan bisnis Anda" paragraphColor="text-gray-600" />

          {/* services */}
          <div className="w-full xl:w-[80%] grid gird-cols-1 md:grid-cols-2 gap-6 lg:flex lg:items-start lg:justify-between">
            {SERVICES.map((item:any) => (
              <div className="" key={item.id}>
                <ServiceCard content={item} />
              </div>
            ))}
          </div>
          
          {/* see more button */}
          <div className="w-full flex items-center justify-center">
            <Link href={'#'}>
            <BgButton style='w-full flex justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' content={
              <div className='flex items-center gap-3'>
                <span className='capitalize text-sm text-white'>pelajari lebih lanjut</span>
                <ArrowRightIcon size={15} color='white' />
              </div>
            } />
            </Link>
          </div>
        </div>
      </section>

      <section id="project" className="py-20">
        <div className="content-wrapper container-px flex flex-col gap-7 items-center">
          {/* heading */}
          <SectionHeading icon={<GearIcon size={15} color='' style='text-blue-800' />} iconLabel="portofolio kami" iconColor="bg-blue-100" heading="proyek terbaik" headingColor="text-gra-900" paragraph="Lihat showcase project-project unggulan yang telah kami selesaikan dengan tingkat kepuasan klien yang tinggi dan hasil yang memukau" paragraphColor="text-gray-600" />
          {/* heading */}
          
          {/* projects */}
          <div className="w-full xl:w-[80%] grid gird-cols-1 md:grid-cols-2 gap-6 lg:flex lg:items-start lg:justify-between">
            {PROJECTS.map((item:any) => (
              <div className="" key={item.id}>
                <ProjectCard content={item} />
              </div>
            ))}
          </div>
          {/* projects */}

          {/* see more button */}
          <div className="w-full flex items-center justify-center">
            <Link href={'#'}>
            <BgButton style='w-full flex justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' content={
              <div className='flex items-center gap-3'>
                <span className='capitalize text-sm text-white'>lihat semua proyek</span>
                <ArrowRightIcon size={15} color='white' />
              </div>
            } />
            </Link>
          </div>
          {/* see more button */}
        </div>
      </section>

      <section id="testiomoni" className="py-20">
        <div className="content-wrapper container-px flex flex-col gap-7 items-center">
          {/* heading */}
          <SectionHeading icon={<GearIcon size={15} color='' style='text-orange-800' />} iconLabel="portofolio kami" iconColor="bg-orange-100" heading="kata mereka" headingColor="text-gra-900" paragraph="Kepuasan dan kepercayaan klien adalah prioritas utama kami. Berikut adalah testimoni dari klien-klien yang telah merasakan layanan terbaik kami" paragraphColor="text-gray-600" />
          {/* heading */}

          {/* projects */}
          <div className="w-full xl:w-[80%] grid gird-cols-1 md:grid-cols-2 gap-6 lg:flex lg:items-start lg:justify-between">
            {PROJECTS.map((item:any) => (
              <div className="" key={item.id}>
                <ProjectCard content={item} />
              </div>
            ))}
          </div>
          {/* projects */}
        </div>
      </section>
    </MainWrapper>
  );
}
