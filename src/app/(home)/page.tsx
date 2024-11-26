import Banner from "@/components/home/Banner";
import BestSells from "@/components/home/best-sells/BestSells";
import BlogPosts from "@/components/home/blog/BlogPosts";
import Hero from "@/components/home/hero/Hero";
import HomeFeauters from "@/components/home/HomeFeauters";
import NewProducts from "@/components/home/new-products/NewProducts";
import TopCategory from "@/components/home/top-category/TopCategory";
import TopRated from "@/components/home/top-rated/TopRated";
import TopCollection from "@/components/home/TopCollection";
import WeeklyHotProducts from "@/components/home/weekly-hot-producrs/WeeklyHotProducts";

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='md:w-[90vw] mx-auto my-5 w-[95vw]'>
        <HomeFeauters />
        <TopCategory />
        <NewProducts />
        <TopCollection />
        <BestSells />
        <Banner />
        <WeeklyHotProducts />
        <TopRated />
        <BlogPosts />
      </div>
    </main>
  );
}
