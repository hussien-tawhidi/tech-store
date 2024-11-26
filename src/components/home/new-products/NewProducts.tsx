"use client";

import NewProductCard from "@/components/cards/NewProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { productProps } from "../best-sells/BestSells";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Autoplay } from "swiper/modules";
import { HiArrowLongRight } from "react-icons/hi2";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NewProducts = () => {
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
        const shuffled = products.sort(() => 0.5 - Math.random());
        const randomProducts = shuffled.slice(0, 5);
        setData(randomProducts); // Update data with the fetched response
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
  }, []);

  return (
    <div className=''>
      <h2 className='font-bold md:text-3xl text-xl text-slate-600 flex items-center gap-3'>
        New Products <HiArrowLongRight className="animate-pulse md:text-5xl text-3xl"/>
      </h2>
      <div className='my-10'>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            450: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            900: {
                     slidesPerView: 3,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Keyboard]}
          className=''>
          {data.map((d: productProps) => (
            <SwiperSlide key={d.id} className='bg-transparen!'>
              <NewProductCard
                key={d.title}
                brand={d.brand}
                descriptions={d.description}
                discount={d.discountPercentage}
                id={d.id}
                image={d.images[0]}
                price={d.price}
                title={d.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewProducts;
