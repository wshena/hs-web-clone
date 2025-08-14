import ProductCard from "@/components/cards/ProductCard";
import ProductCategoryCard from "@/components/cards/ProductCategoryCard";
import ProductFilter from "@/components/filters/ProductFilter";
import { UserIcon } from "@/components/Icons";
import Jumbotron from "@/components/Jumbotron";
import MainWrapper from "@/components/MainWrapper";
import ProductPagination from "@/components/pagination/ProductPagination";
import { PRODUCT } from "@/constants";

const JumbotronSection = () => {
  return (
    <div className="flex flex-col items-center text-center gap-[15px] w-[90%] md:w-[75%] 2xl:w-[50%]">
      <h1 className="capitalize font-bold text-[2rem] md:text-[3rem] lg:text-[4rem] lg:leading-[80px]">lihat product terbaik kami</h1>
      <span className="text-[1rem] md:text-[1rem] lg:text-[1.7rem]">Kami memiliki beberapa produk dengan berbagai macam kategori pilihan</span>
    </div>
  )
}

export default async function page({searchParams}:{searchParams:any}) {
  const {page} = await searchParams;
  console.log(await searchParams)
  return (
    <MainWrapper>
      {/* jumbotron */}
      <Jumbotron bg="/image/productJumbotronBG.jpg" content={<JumbotronSection />} />

      {/* prdouct filter */}
      <section id="filter" className="py-10">
        <div className="content-wrapper container-px">
          <ProductFilter />
        </div>
      </section>

      {/* product section */}
      <section id="products" className="pb-20">
        {/* products grid */}
        <div className="content-wrapper container-px">
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(17)].map((_, idx:number) => (
              <ProductCard key={idx} item={PRODUCT} />
            ))}
          </div>
        </div>
      </section>

      {/* product pagination */}
      <section id="pagination" className="pb-20">
        <div className="container-px content-wrapper">
          <ProductPagination count={17} pageSize={12} defaultPage={1} />
        </div>
      </section>

      {/* catagory section */} 
      <section id="productCategories" className="py-16 bg-gray-50">
        <div className="relative content-wrapper container-px flex flex-col gap-6 items-center text-white">
          {/* heading */}
          <div className="flex items-center justify-center w-full mb-10">
            <div className="flex flex-col items-center gap-1">
              <h1 className="capitalize text-3xl font-bold text-gray-900 mb-4">Jelajahi Kategori</h1>
              <h2 className="text-lg text-gray-600 capitalize">temukan produk berdasarkan kategori yang diinginkan</h2>
            </div>
          </div>

          {/* categories grid */}
          <div className="w-full gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[...Array(10)].map((_, idx:number) => (
              <ProductCategoryCard key={idx} item={{
                icon: <UserIcon size={15} color="" style="text-blue-800" />,
                title: 'Elektronik',
                quantity: '2 Produck',
                link: '#'
              }} />
            ))}
          </div>
        </div>
      </section>
    </MainWrapper>
  );
}
