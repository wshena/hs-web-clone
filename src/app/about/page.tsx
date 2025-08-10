import BgButton from "@/components/buttons/BgButton";
import OutlineButton from "@/components/buttons/OutlineButton";
import ArticleCard from "@/components/cards/ArticleCard";
import ProjectCard from "@/components/cards/ProjectCard";
import ServiceCard from "@/components/cards/ServiceCard";
import TestimoniCard from "@/components/cards/TestimoniCard";
import WhyUsCard from "@/components/cards/WhyUsCard";
import { ArrowRightIcon, CallIcon, GearIcon, UserIcon } from "@/components/Icons";
import Jumbotron from "@/components/Jumbotron";
import MainWrapper from "@/components/MainWrapper";
import SectionHeading from "@/components/SectionHeading";
import { ARTICLES, NUMBER_HOME_SECTION, PROJECTS, SERVICES, TESTIMONIES, TRUST_INDICATOR } from "@/constants";
import AboutSectionContent from "@/content/AboutSectionContent";
import HomeJumbotronContent from "@/content/HomeJumbotronContent";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const JumbotronSection = () => {
  return (
    <div className="flex flex-col items-center text-center gap-[15px] w-[90%] md:w-[75%] 2xl:w-[50%]">
      <h1 className="capitalize font-bold text-[2rem] md:text-[3rem] lg:text-[4rem] lg:leading-[80px]">tentang kami</h1>
      <span className="text-[1rem] md:text-[1rem] lg:text-[1.7rem]">Kami menghadirkan inovasi teknologi terbaru untuk membantu transformasi digital perusahaan Anda dengan solusi yang efektif dan efisien</span>
      <BgButton style="bg-blue-500 hover:bg-blue-700 transition-all duration-300 ease-in-out" content={
        <span>hubungi kami</span>
      } />
    </div>
  )
}

const ContactBlock = () => {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <CallIcon size={15} color="blue" />
      </div>
      <h4 className="font-semibold text-gray-900 mb-2">Telepon</h4>
      <p className="text-gray-600">+62 812-3456-7890</p>
    </div>
  )
}

const StatsCard = () => {
  return (
    <div className="text-center counter-animation">
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 card-hover">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <UserIcon size={20} color="white" />
        </div>
        <div className="text-5xl font-bold mb-4">500+</div>
        <p className="text-lg opacity-90 font-medium">Proyek Selesai</p>
        <p className="text-sm opacity-70 mt-2">Berbagai industri &amp; skala</p>
      </div>
    </div>
  )
}

export default function page() {
  return (
    <MainWrapper>
      {/* section jumbotron */}
      <Jumbotron bg="/image/aboutJumbotronBG.jpg" content={<JumbotronSection />} />

      {/* about section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="content-wrapper container-px">
          <AboutSectionContent image={
            <div className='relative'>
              <Image src={'/image/companyBuilding.jpg'} width={570} height={570} className="relative rounded-3xl shadow-2xl h-[200px] lg:w-[450px] xl:w-[570px] md:h-96 object-cover" alt="company-building" />

              {/* floating stats */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 glass-effect">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Proyek Selesai</div>
              </div>
              <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-6 glass-effect">
                <div className="text-3xl font-bold text-purple-600">200+</div>
                <div className="text-sm text-gray-600">Klien Puas</div>
              </div>
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

      <section id="stats" className="py-20 relative overflow-hidden">
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
          <SectionHeading icon={<GearIcon size={15} color='' style='text-white' />} iconLabel="pencapaian kami" iconColor="bg-white-100" heading="angka berbicara" headingColor="text-white" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta sit alias dignissimos!" paragraphColor="text-white" />
          {/* heading */}

          {/* stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-0 lg:flex lg:items-center lg:justify-between w-full xl:w-[70%]">
            {[...Array(4)].map((_, idx:number) => (
              <StatsCard key={idx} />
            ))}
          </div>

          {/* trust indicator */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-full flex items-center justify-center opacity-60">
              <div className="flex flex-col md:flex-row items-center gap-10 text-white">
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
      
      <section id="contact" className="py-20 relative overflow-hidden bg-white">
        {/* content */}
        <div className="relative content-wrapper container-px flex flex-col gap-6 items-center text-white">
          {/* heading */}
          <SectionHeading icon={<GearIcon size={15} color='' style='text-yellow-600' />} iconLabel="mari berkolaborasi" iconColor="text-blue-800 bg-blue-100" heading="siap bekerja sama dengan kami" headingColor="text-black" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta sit alias dignissimos!" paragraphColor="text-gray-900" />
          {/* heading */}

          {/* contact button */}
          <div className="flex items-center justify-center py-8 w-full">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <BgButton style="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl" content={
                <span>hubungi kami sekarang</span>
              } />
              <OutlineButton style="border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white transition-all duration-300 ease-in-out" content={
                <span>lihat layanan kami</span>
              } />
            </div>
          </div>

          {/* contact block */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[...Array(3)].map((_, idx:number) => (
              <ContactBlock key={idx} />
            ))}
          </div>
        </div>
      </section>
    </MainWrapper>
  );
}
