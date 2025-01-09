import Laptops from "@/components/home/laptops/Laptops";
import BlogPosts from "@/components/home/blog/BlogPosts";
import Hero from "@/components/home/hero/Hero";
import HomeFeauters from "@/components/home/HomeFeauters";
import Menu from "@/components/home/menu/Menu";
import MobileBrands from "@/components/home/mobiles/mobileBrand/MobileBrands";
import Mobiles from "@/components/home/mobiles/Mobiles";
import Slider from "@/components/home/slider/Slider";
import SpecialProducts from "@/components/home/special-products/SpecialProducts";
import StoreOff from "@/components/home/store-off/StoreOff";
import TopRated from "@/components/home/top-rated/TopRated";
import WeeklyHotProducts from "@/components/home/weekly-hot-producrs/WeeklyHotProducts";
export default function Home() {
  return (
    <main className='overflow-hidden z-0 relative'>
      <Hero />
      <Menu />
      <HomeFeauters />
      <StoreOff />
      <div className='md:w-[90vw] mx-auto my-5 w-[95vw]'>
        <SpecialProducts />
        <Mobiles />
        <MobileBrands />

        <Slider />
        <Laptops />
        <WeeklyHotProducts />
        <TopRated />
        <BlogPosts />
      </div>
    </main>
  );
}
