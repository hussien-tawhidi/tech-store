"use client";

import axios from "axios";
import HeroCard, { Product } from "./HeroCard";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Keyboard, Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const { products } = await response.data;
        console.log(products)
        setData(products); // Update data with the fetched response
      } catch (err) {
        if (axios.isAxiosError(err)) {
          // Axios-specific error handling
          setError(
            err.response?.data?.message ||
              "An error occurred while fetching data."
          );
        } else {
          // Generic error handling
          setError("An unexpected error occurred.");
        }
        console.error("Fetch error:", err);
      } finally {
        setLoading(false); // Always reset loading state
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div className='relative overflow-hidden'>
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
        {data.map((data: Product) => (
          <SwiperSlide key={data.id}>
            <HeroCard product={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
