import BgButton from "@/components/buttons/BgButton";
import OutlineButton from "@/components/buttons/OutlineButton";
import EmployeeCard from "@/components/cards/EmployeeCard";
import WhyUsCard from "@/components/cards/WhyUsCard";
import { CallIcon, GearIcon, UserIcon } from "@/components/Icons";
import Jumbotron from "@/components/Jumbotron";
import MainWrapper from "@/components/MainWrapper";
import SectionHeading from "@/components/SectionHeading";
import { EMPLOYEE, TRUST_INDICATOR } from "@/constants";
import AboutSectionContent from "@/content/AboutSectionContent";
import Image from "next/image";

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

      <section id="vision" className="py-20 relative overflow-hidden">
        {/* BG Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="content-wrapper relative container-px flex flex-col gap-10 items-center">
          {/* heading */}
          <SectionHeading icon={<GearIcon size={15} color='' style='text-orange-800' />} iconLabel="portofolio kami" iconColor="bg-white shadow-md text-blue-800" heading="panduan langkah kami" headingColor="text-black" />
          {/* heading */}

          {/* visions */}
          <div className="w-full xl:w-[80%] gap-10 flex flex-col md:flex-row items-center justify-between">
            {[...Array(2)].map((_, idx:number) => (
              <WhyUsCard key={idx} item={{
                icon: <UserIcon size={20} color="white" />,
                title: 'visi kami',
                paragraph: 'Menjadi perusahaan teknologi terdepan di Indonesia yang memberikan solusi digital inovatif dan berkelanjutan'
              }} />
            ))}
          </div>
          {/* testimonies */}
        </div>
      </section>

      <section id="ourValue" className="py-20">
        <div className="content-wrapper container-px flex flex-col gap-10 items-center">
          {/* heading */}
          <SectionHeading icon={<GearIcon size={15} color='' style='text-blue-800' />} iconLabel="nilai-nilai kami" iconColor="bg-blue-100 text-blue-800" heading="fondasi kekuatan" headingColor="text-gra-900" paragraph="Berbagai keunggulan dan alasan mengapa kami menjadi pilihan terbaik untuk partner bisnis Anda" paragraphColor="text-gray-600" />
          {/* heading */}

          {/* why us */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[...Array(4)].map((_, idx:number) => (
              <div key={idx} className="card-hover text-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange-200 rounded-full -translate-y-10 translate-x-10 opacity-30"></div>
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <UserIcon size={20} color="white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Kolaborasi</h3>
                  <p className="text-gray-700 leading-relaxed font-medium">Membangun kemitraan jangka panjang yang saling menguntungkan</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="employees" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* bg element */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full -translate-x-48 -translate-y-48 opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full translate-x-48 translate-y-48 opacity-30"></div>

        {/* content */}
        <div className="content-wrapper container-px flex flex-col gap-10 items-center">
          {/* heading */}
          <SectionHeading icon={<GearIcon size={15} color='' style='text-blue-800' />} iconLabel="tim kami" iconColor="bg-white border shadow-md" heading="tim manajemen" headingColor="text-gray-900" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta sit alias dignissimos!" paragraphColor="text-gray-600" />
          {/* heading */}

          {/* employees */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(6)].map((_, idx:number) => (
              <EmployeeCard key={idx} item={EMPLOYEE} />
            ))}
          </div>
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
