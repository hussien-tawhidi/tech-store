"use client";

import  { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Autoplay } from "swiper/modules";
import { HeroProductProps } from "../../../../types";
import { fetchHeroProducts } from "@/actions/products";
import SliderCard from "./SliderCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const { data, error, loading } = await fetchHeroProducts();
      setData(data);
      setError(error);
      setLoading(false);
      setLoading(loading);
    };

    loadProduct();
  }, []);

  return (
    <>
      <div className='relative overflow-hidden'>
        {error && <p className='text-red-600 font-semibold'>{error}</p>}
        {loading ? (
          <div className='flex items-center justify-center min-h-screen p-5 bg-gray-100 min-w-screen'>
            <div className='flex space-x-2 animate-pulse'>
              <div className='w-3 h-3 bg-gray-500 rounded-full'></div>
              <div className='w-3 h-3 bg-gray-500 rounded-full'></div>
              <div className='w-3 h-3 bg-gray-500 rounded-full'></div>
            </div>
          </div>
        ) : (
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={false}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            // navigation={true}
            modules={[Keyboard, Pagination, Autoplay]}
            className='mySwiper'>
            {data?.map((data: HeroProductProps) => (
              <SwiperSlide key={data?._id}>
                <SliderCard product={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
};

export default Slider;
