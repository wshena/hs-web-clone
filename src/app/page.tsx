import BgButton from "@/components/buttons/BgButton";
import ArticleCard from "@/components/cards/ArticleCard";
import ProjectCard from "@/components/cards/ProjectCard";
import ServiceCard from "@/components/cards/ServiceCard";
import TestimoniCard from "@/components/cards/TestimoniCard";
import WhyUsCard from "@/components/cards/WhyUsCard";
import { ArrowRightIcon, GearIcon, UserIcon } from "@/components/Icons";
import Jumbotron from "@/components/Jumbotron";
import MainWrapper from "@/components/MainWrapper";
import SectionHeading from "@/components/SectionHeading";
import { ARTICLES, NUMBER_HOME_SECTION, PROJECTS, SERVICES, TESTIMONIES, TRUST_INDICATOR } from "@/constants";
import AboutSectionContent from "@/content/AboutSectionContent";
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
          <AboutSectionContent image={
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
        <div className="content-wrapper container-px flex flex-col gap-10 items-center">
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
        <div className="content-wrapper container-px flex flex-col gap-10 items-center">
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
        <div className="content-wrapper container-px flex flex-col gap-10 items-center">
          {/* heading */}
          <SectionHeading icon={<GearIcon size={15} color='' style='text-orange-800' />} iconLabel="portofolio kami" iconColor="bg-orange-100" heading="kata mereka" headingColor="text-gra-900" paragraph="Kepuasan dan kepercayaan klien adalah prioritas utama kami. Berikut adalah testimoni dari klien-klien yang telah merasakan layanan terbaik kami" paragraphColor="text-gray-600" />
          {/* heading */}

          {/* testimonies */}
          <div className="w-full xl:w-[80%] grid gird-cols-1 md:grid-cols-2 gap-6 lg:flex lg:items-start lg:justify-between">
            {TESTIMONIES.map((item:any) => (
              <div className="" key={item.id}>
                <TestimoniCard content={item} />
              </div>
            ))}
          </div>
          {/* testimonies */}

          {/* trust indicator */}
          <div className="w-full flex items-center justify-center">
            <div className="flex items-center gap-6">
              {TRUST_INDICATOR.map((item:any) => (
                <div key={item.id} className="flex flex-col items-center gap-1">
                  <span className="font-bold text-lg">{item.number}</span>
                  <span className="text-gray-700 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* trust indicator */}
        </div>
      </section>

      <section id="whyChooseUs" className="py-20">
        <div className="content-wrapper container-px flex flex-col gap-10 items-center">
          {/* heading */}
          <SectionHeading icon={<GearIcon size={15} color='' style='text-red-800' />} iconLabel="keunggulan kami" iconColor="bg-red-100" heading="mengapa memilih kami?" headingColor="text-gra-900" paragraph="Berbagai keunggulan dan alasan mengapa kami menjadi pilihan terbaik untuk partner bisnis Anda" paragraphColor="text-gray-600" />
          {/* heading */}

          {/* why us */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, idx:number) => (
              <WhyUsCard key={idx} item={{
                title: 'tim berpengalaman',
                paragraph: 'Didukung oleh tim profesional dengan pengalaman lebih dari 5 tahun di industri teknologi dan telah menangani berbagai proyek skala enterprise.',
                icon: <UserIcon size={20} color="white" />
              }} />
            ))}
          </div>

          {/* see more button */}
          <div className="w-full flex items-center justify-center">
            <Link href={'#'}>
              <BgButton style='w-full flex justify-center bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white' content={
                <div className='flex items-center gap-3'>
                  <span className='capitalize text-sm text-white'>mari berkolaborasi</span>
                  <ArrowRightIcon size={15} color='white' />
                </div>
              } />
            </Link>
          </div>
          {/* see more button */}
        </div>
      </section>

      <section id="article" className="py-20">
        <div className="content-wrapper container-px flex flex-col gap-10 items-center">
          {/* heading */}
          <SectionHeading icon={<GearIcon size={15} color='' style='text-purple-800' />} iconLabel="blog & insight" iconColor="bg-purple-100" heading="artikel terbaru" headingColor="text-gray-900" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta sit alias dignissimos!" paragraphColor="text-gray-600" />
          {/* heading */}

          {/* article */}
          <div className="w-full xl:w-[80%] grid gird-cols-1 md:grid-cols-2 gap-6 lg:flex lg:items-start lg:justify-between">
            {[...Array(3)].map((_, idx:number) => (
              <div className="" key={idx}>
                <ArticleCard item={ARTICLES} />
              </div>
            ))}
          </div>
          
          {/* see more button */}
          <div className="w-full flex items-center justify-center">
            <Link href={'#'}>
              <BgButton style='w-full flex justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white' content={
                <div className='flex items-center gap-3'>
                  <span className='capitalize text-sm text-white'>lihat semua artikel</span>
                  <ArrowRightIcon size={15} color='white' />
                </div>
              } />
            </Link>
          </div>
          {/* see more button */}
        </div>
      </section>
      
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800"></div>

        {/* decor */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-[2s]"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-[4s]"></div>
        </div>

        {/* overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px"></div>
        </div>

        {/* content */}
        <div className="relative content-wrapper container-px flex flex-col gap-10 items-center text-white">
          {/* heading */}
          <SectionHeading icon={<GearIcon size={15} color='' style='text-white' />} iconLabel="blog & insight" iconColor="bg-white-100" heading="siap memulai proyek impian anda?" headingColor="text-white" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta sit alias dignissimos!" paragraphColor="text-white" />
          {/* heading */}

          {/* contact */}
          <div className="flex items-center justify-center py-8 border-b border-white/20 w-full xl:w-[80%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-0 lg:flex items-center lg:justify-between xl:w-[90%]">
              {[...Array(3)].map((_, idx:number) => (
                <Link key={idx} href={'#'} className="group flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <UserIcon size={15} color="white" />
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <span className="text-sm opacity-80">Email</span>
                    <span className="font-semibold">info@digitalsolusi.com</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* trust indicator */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-sm opacity-70">Dipercaya oleh perusahaan terkemuka</span>

            <div className="w-full flex items-center justify-center opacity-60">
              <div className="flex items-center gap-6 text-white">
                {TRUST_INDICATOR.map((item:any) => (
                  <div key={item.id} className="flex flex-col items-center gap-1">
                    <span className="font-bold text-lg">{item.number}</span>
                    <span className="text-white text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* trust indicator */}
        </div>
      </section>
    </MainWrapper>
  );
}
