import BgButton from "@/components/buttons/BgButton";
import OutlineButton from "@/components/buttons/OutlineButton";
import EmployeeCard from "@/components/cards/EmployeeCard";
import ProjectCard from "@/components/cards/ProjectCard";
import WhyUsCard from "@/components/cards/WhyUsCard";
import JobFilter from "@/components/filters/JobFilter";
import ContactForm from "@/components/form/ContactForm";
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
      <h1 className="font-bold text-[2rem] md:text-[3rem] lg:text-[4rem] lg:leading-[80px]">Hubungi Kami</h1>
      <p className="text-[1rem] md:text-[1rem] lg:text-[1.7rem]">Mari diskusikan bagaimana kami dapat membantu mengembangkan bisnis Anda dengan solusi teknologi terdepan</p>
      <div className="flex flex-col md:flex-row items-center gap-[20px]">
        <BgButton style="bg-blue-500 hover:bg-blue-700 transition-all duration-300 ease-in-out" content={
          <span>konsultasi gratis</span>
        } />
        <OutlineButton style="border border-white text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out" content={
          <span>lihat layanan</span>
        } />
      </div>
    </div>
  )
}

const ContactBlock = () => {
  return (
    <div className="flex items-start">
      <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
        <i className="fas fa-map-marker-alt text-blue-600"></i>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Alamat Kantor</h3>
        <p className="text-gray-600">Jl. Sudirman No. 123, Jakarta Pusat 10220, Indonesia</p>
      </div>
    </div>
  )
}

const WhatsappBlock = () => {
  return (
    <div className="flex items-start">
      <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
        <i className="fab fa-whatsapp text-green-600"></i>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
        <p className="text-gray-600">+62 812 3456 7890</p>
        <Link href="#" target="_blank" className="inline-block mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
          <i className="fab fa-whatsapp mr-1"></i>
          Chat WhatsApp
        </Link>
      </div>
    </div>
  )
}

export default function page() {
  return (
    <MainWrapper>
      {/* section jumbotron */}
      <Jumbotron bg="/image/contactJumbotronBG.jpg" content={<JumbotronSection />} />

      {/* contact section */}
      <section id="contact" className="py-20">
        <div className="content-wrapper container-px">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* contact info */}
            <div className="flex flex-col items-start gap-5">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Informasi Kontak</h2>
              <div className="space-y-6">
                {[...Array(3)].map((_, idx:number) => (
                  <ContactBlock key={idx} />
                ))}
                <WhatsappBlock />
              </div>
              {/* social media */}
              <div className="">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Ikuti Kami</h3>
                <div className="flex flex-wrap md:flex-nowrap gap-4">
                  {[...Array(5)].map((_,idx:number) => (
                    <Link key={idx} href="#" target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-lg flex items-center justify-center transition-colors">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* form */}
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* map section */}
      <section id="map" className="py-20 bg-gray-50">
        <div className="content-wrapper container-px flex flex-col items-center gap-12">
          {/* heading */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lokasi Kantor</h2>
            <span className="text-xl text-gray-600">Kunjungi kantor kami untuk konsultasi langsung</span>
          </div>

          {/* map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-96">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.429567515652!2d106.74122750759125!3d-6.216511037883081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7a8f4617e2f%3A0xa4321d2dfd4e98d7!2sSinergi%20Marmer!5e0!3m2!1sen!2sid!4v1752674545937!5m2!1sen!2sid" width="600" height="450" className="w-fit" style={{
                border: '0px'
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="content-wrapper container-px flex flex-col items-center gap-12">
          {/* heading */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pertanyaan yang Sering Diajukan</h2>
            <span className="text-xl text-gray-600">Temukan jawaban untuk pertanyaan umum tentang layanan kami</span>
          </div>

          {/* FAQ */}
          <div className="flex flex-col items-start gap-5 w-full md:w-[60%]">
            {[...Array(5)].map((_, idx:number) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Lorem ipsum dolor sit amet.</h3>
                <p className="text-gray-600">Waktu pengembangan tergantung pada kompleksitas project. Aplikasi sederhana biasanya 2-3 bulan, sementara aplikasi enterprise bisa 6-12 bulan. Kami akan memberikan timeline yang detail setelah analisis requirement.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section id="cta" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="content-wrapper container-px flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Siap Memulai Project Anda?</h1>
            <span className="text-xl text-blue-100 mb-8">Tim ahli kami siap membantu mewujudkan ide digital Anda menjadi kenyataan</span>
            {/* buttons */}
            <div className="flex flex-col md:flex-row items-center gap-[20px]">
              <BgButton style="bg-green-700 text-white hover:opacity-80 transition-all duration-300 ease-in-out" content={
                <span>Chat Whatsapp</span>
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
