import Laptops from "@/components/home/laptops/Laptops";
import BlogPosts from "@/components/home/blog/BlogPosts";
import Hero from "@/components/home/hero/Hero";
import HomeFeauters from "@/components/home/HomeFeauters";
import Menu from "@/components/home/menu/Menu";
import Mobiles from "@/components/home/mobiles/Mobiles";
import Slider from "@/components/home/slider/Slider";
import SpecialProducts from "@/components/home/SpecialProducts";
import StoreOff from "@/components/home/store-off/StoreOff";
import TopRated from "@/components/home/top-rated/TopRated";
import WeeklyHotProducts from "@/components/home/weekly-hot-producrs/WeeklyHotProducts";
import HandlesFree from "@/components/home/handsfree/HandlesFree";
import Applliance from "@/components/home/appliance/Applliance";
import OverlayForBanner from "@/components/home/OverlayForBanner";

export default function Home() {
  return (
    <main className='overflow-hidden z-0 relative mt-16'>
      <Hero />
      <Menu />
      <HomeFeauters />
      <StoreOff />
      <div className='md:w-[90vw] mx-auto my-5 w-[95vw]'>
        <SpecialProducts />
        <Mobiles />
        <Slider />
        <Laptops />
        <HandlesFree />
        <Applliance />
        <div className='grid sm:grid-cols-2 gap-3 my-10'>
          <OverlayForBanner
            des='Play game, with best and good quality, any genre...'
            title='Gamig features'
            src='/features/gaming.jpg'
          />
          <OverlayForBanner
            des='Want to enjoy from any video, must have good dislpay with best quality...'
            title='Display features'
            src='/features/display.jpg'
          />
        </div>
        <WeeklyHotProducts />
        <TopRated />
        <BlogPosts />
      </div>
    </main>
  );
}
