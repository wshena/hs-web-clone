import BgButton from "@/components/buttons/BgButton";
import OutlineButton from "@/components/buttons/OutlineButton";
import ArticleCard from "@/components/cards/ArticleCard";
import EmployeeCard from "@/components/cards/EmployeeCard";
import WhyUsCard from "@/components/cards/WhyUsCard";
import BlogFilter from "@/components/filters/BlogFilter";
import JobFilter from "@/components/filters/JobFilter";
import { ArrowRightIcon, CallIcon, GearIcon, UserIcon } from "@/components/Icons";
import Jumbotron from "@/components/Jumbotron";
import MainWrapper from "@/components/MainWrapper";
import SectionHeading from "@/components/SectionHeading";
import { ARTICLES, EMPLOYEE, JOB, TRUST_INDICATOR } from "@/constants";
import AboutSectionContent from "@/content/AboutSectionContent";
import Image from "next/image";
import Link from "next/link";

const JumbotronSection = () => {
  return (
    <div className="flex flex-col items-center text-center gap-[15px] w-[90%] md:w-[75%] 2xl:w-[50%]">
      <h1 className="font-bold text-[2rem] md:text-[3rem] lg:text-[4rem] lg:leading-[80px]">Artikel & Blog</h1>
      <p className="text-[1rem] md:text-[1rem] lg:text-[1.7rem]">Dapatkan insight terbaru, tips praktis, dan informasi berharga dari para ahli di bidang teknologi dan bisnis</p>
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
      <Jumbotron bg="/image/blogJumbotronBG.jpg" content={<JumbotronSection />} />

      {/* article filter */}
      <section id="jobFilter" className="py-10">
        <div className="content-wrapper container-px flex items-center justify-center">
          <BlogFilter />
        </div>
      </section>



      {/* article grid */}
      <section className="articles py-10">
        <div className="content-wrapper container-px flex items-center justify-center">
          <div className="flex flex-col items-center gap-15">
            {/* big article */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-square overflow-hidden">
                  <Image src={ARTICLES.image} alt={ARTICLES.title} width={400} height={400} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>

                {/* article content */}
                <div className="p-3 md:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">{ARTICLES.type}</span>
                    <span className="text-sm text-gray-500">{ARTICLES.date}</span>
                  </div>
                  {/* title */}
                  <Link href={'#'}>
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">{ARTICLES.title}</h1>
                  </Link>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{ARTICLES.desc}</p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-sm text-gray-600">{ARTICLES.author}</span>
                    <span className="text-sm text-gray-600">{ARTICLES.time}</span>
                  </div>
                  <Link href={'#'} className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors self-start">
                    <span>Baca Selengkapnya</span>
                    <ArrowRightIcon size={20} color="white" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(5)].map((_, idx:number) => (
                <ArticleCard key={idx} item={ARTICLES} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* cta */}
      <section id="cta" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="content-wrapper container-px flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Jangan Lewatkan Artikel Terbaru</h1>
            <span className="text-xl text-blue-100 mb-8">Kirimkan CV Anda kepada kami. Kami akan menghubungi Anda ketika ada posisi yang sesuai</span>
            {/* buttons */}
            <div className="flex flex-col md:flex-row items-center gap-[20px]">
              <input type="email" name="email" id="email" placeholder="Masukan email anda..." className="p-3 border rounded-md text-white" />
              <BgButton style="border border-white text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out bg-white text-blue-700" content={
                <span>Berlangganan</span>
              } />
            </div>
          </div>
        </div>
      </section>
    </MainWrapper>
  );
}
