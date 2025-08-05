import BgButton from "@/components/buttons/BgButton";
import OutlineButton from "@/components/buttons/OutlineButton";
import Jumbotron from "@/components/Jumbotron";
import MainWrapper from "@/components/MainWrapper";
import { NUMBER_HOME_SECTION } from "@/constants";
import { cn } from "@/lib/utils";

const HomeJumbotronContent = () => {
  return (
    <div className="flex flex-col items-center text-center gap-[15px] w-[90%] md:w-[75%] 2xl:w-[50%]">
      <h1 className="font-bold text-[2rem] md:text-[3rem] lg:text-[4rem] lg:leading-[80px]">Solusi Digital Terdepan untuk Bisnis Modern</h1>
      <span className="text-[1rem] md:text-[1rem] lg:text-[1.7rem]">Kami menghadirkan inovasi teknologi terbaru untuk membantu transformasi digital perusahaan Anda dengan solusi yang efektif dan efisien</span>
      <div className="flex flex-col md:flex-row items-center gap-[20px]">
        <BgButton label="konsultasi gratis" style="bg-blue-500 hover:bg-blue-700 transition-all duration-300 ease-in-out" />
        <OutlineButton label="lihat portofolio" style="border border-white text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <MainWrapper>
      {/* section jumbotron */}
      <Jumbotron bg="/image/homeJumbotronBG.jpg" content={<HomeJumbotronContent />} />

      {/* Number section */}
      <section id="numberSection" className="flex items-center justify-center py-[1.5rem]">
        <ul className="grid grid-cols-2 md:flex md:items-center md:justify-between w-[90%] lg:w-[70%]">
          {NUMBER_HOME_SECTION.map((item:any) => (
            <li key={item.id} className="flex flex-col items-center">
              <span className={cn(
                'text-[2.3rem] font-bold'
              )}>{item.count}</span>
              <span className="text-[.9rem] md:text-[1rem] capitalize">{item.label}</span>
            </li>
          ))}
        </ul>
      </section>
    </MainWrapper>
  );
}
