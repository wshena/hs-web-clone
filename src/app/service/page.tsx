import BgButton from "@/components/buttons/BgButton";
import OutlineButton from "@/components/buttons/OutlineButton";
import ServiceCard from "@/components/cards/ServiceCard";
import { GearIcon, UserIcon } from "@/components/Icons";
import Jumbotron from "@/components/Jumbotron";
import MainWrapper from "@/components/MainWrapper";
import SectionHeading from "@/components/SectionHeading";
import { SERVICES } from "@/constants";
import Link from "next/link";

const JumbotronSection = () => {
  return (
    <div className="flex flex-col items-center text-center gap-[15px] w-[90%] md:w-[75%] 2xl:w-[50%]">
      <h1 className="font-bold text-[2rem] md:text-[3rem] lg:text-[4rem] lg:leading-[80px]">Layanan Kami</h1>
      <span className="text-[1rem] md:text-[1rem] lg:text-[1.7rem]">Solusi teknologi komprehensif untuk mengembangkan bisnis Anda dengan standar kualitas internasional</span>
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

const ProcessCard = ({number}:{number:number}) => {
  return (
    <div className="relative group">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 transform hover:-translate-y-2">
          <div className="absolute -top-4 left-8">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
              {number}
            </div>
          </div>
          <div className="pt-4">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
              </div>
               <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Deployment &amp; Support</h3>
              <p className="text-gray-600 text-center leading-relaxed">Go-live dan dukungan berkelanjutan untuk kesuksesan jangka panjang</p>
          </div>
      </div>
    </div>
  )
}

const GlassmorphCard = () => {
  return (
    <div className="text-center counter-animation">
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 card-hover flex flex-col items-center gap-5">
        <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          <UserIcon size={20} color="white" />
        </div>
        <span className="text-xl font-bold mb-4 text-center">Teknologi Terdepan</span>
        <p className="opacity-90 text-center leading-relaxed">Menggunakan teknologi dan framework terbaru seperti Laravel, React, Vue.js untuk menghasilkan solusi yang optimal, scalable dan future-proof.</p>
      </div>
    </div>
  )
}

export default function page() {
  return (
    <MainWrapper>
      {/* section jumbotron */}
      <Jumbotron bg="/image/serviceJumbotronBG.jpg" content={<JumbotronSection />} />

      <section id="service" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* bg decoration */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-element"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-element" style={{
          animationDelay: '-3s'
        }}></div>

        <div className="content-wrapper container-px flex flex-col gap-10 items-center">
          {/* heading */}
          <SectionHeading icon={<GearIcon size={15} color='' style='text-blue-800' />} iconLabel="nilai-nilai kami" iconColor="bg-white text-blue-800" heading="solusi teknologi terdepan" headingColor="text-gra-900" paragraph="Berbagai keunggulan dan alasan mengapa kami menjadi pilihan terbaik untuk partner bisnis Anda" paragraphColor="text-gray-600" />
          {/* heading */}

          {/* service grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, idx:number) => (
              <ServiceCard content={SERVICES[0]} key={idx} />
            ))}
          </div>
        </div>
      </section>

      <section id="whyChooseUs" className="py-20 relative overflow-hidden">
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
          <SectionHeading icon={<GearIcon size={15} color='' style='text-white' />} iconLabel="keunggulan kami" iconColor="bg-white-100" heading="mengapa memilih kami" headingColor="text-white" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta sit alias dignissimos!" paragraphColor="text-white" />
          {/* heading */}

          {/* stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 w-full">
            {[...Array(8)].map((_, idx:number) => (
              <GlassmorphCard key={idx} />
            ))}
          </div>
        </div>
      </section>
      
      <section id="process" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* bg decoration */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating-element"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating-element" style={{
          animationDelay: '-2s'
        }}></div>

        {/* content */}
        <div className="relative content-wrapper container-px flex flex-col gap-6 items-center text-white">
          {/* heading */}
          <SectionHeading icon={<GearIcon size={15} color='' style='text-yellow-600' />} iconLabel="metodologi kami" iconColor="text-blue-800 bg-white shadow-md" heading="proses kerja kami" headingColor="text-black" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta sit alias dignissimos!" paragraphColor="text-gray-900" />
          {/* heading */}

          {/* process card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[...Array(4)].map((_, idx:number) => (
              <ProcessCard key={idx} number={idx+1} />
            ))}
          </div>
        </div>
      </section>

      <section id="CTA" className="py-20 relative overflow-hidden">
        {/* animated bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900"></div>

        {/* floating */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl floating-element"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-xl floating-element" style={{
          animationDelay: '-3s'
        }}></div>

        {/* content */}
        <div className="relative content-wrapper container-px flex flex-col gap-10 items-center text-white">
          {/* heading */}
          <SectionHeading icon={<GearIcon size={15} color='' style='text-white' />} iconLabel="mulai proyek anda" iconColor="border-none bg-white/20 backdrop-blur-sm" heading="siap memulai proyek anda" headingColor="text-white" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta sit alias dignissimos!" paragraphColor="text-white" />
          {/* heading */}

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="#" className="inline-flex items-center bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              Konsultasi Gratis
            </Link>
            <Link href="#" className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              Lihat Portfolio
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center text-lg">
            <Link href={'#'} className="group flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <UserIcon size={15} color="white" />
              </div>
              <span className="font-semibold">+81345782310</span>
            </Link>
            <Link href={'#'} className="group flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <UserIcon size={15} color="white" />
              </div>
              <span className="font-semibold">info@digitalsolusi.com</span>
            </Link>
          </div>
        </div>
      </section>
    </MainWrapper>
  );
}
