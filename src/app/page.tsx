import MainWrapper from "@/components/MainWrapper";

const Jumbotron = ({bg, content}:{bg:string, content:React.ReactNode}) => {
  return (
    <div className="relative w-full h-[750px]" style={{
      backgroundImage: `url("${bg}")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      <div className="absolute w-full h-full top-0 left-0 bg-black/50 flex items-center justify-center text-white">
        {content}
      </div>
    </div>
  )
}

const HomeJumbotronContent = () => {
  return (
    <div className="flex flex-col text-center gap-[15px] w-[75%]">
      <h1 className="font-bold text-[4rem] leading-[80px]">Solusi Digital Terdepan untuk Bisnis Modern</h1>
      <span className="text-[1.7rem]">Kami menghadirkan inovasi teknologi terbaru untuk membantu transformasi digital perusahaan Anda dengan solusi yang efektif dan efisien</span>
      <div className="flex items-center gap-[20px]">
        <button>1</button>
        <button>2</button>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <MainWrapper>
      {/* section jumbotron */}
      <Jumbotron bg="/image/homeJumbotronBG.jpg" content={<HomeJumbotronContent />} />
    </MainWrapper>
  );
}
