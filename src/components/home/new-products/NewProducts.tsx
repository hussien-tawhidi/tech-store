"use client";

import NewProductCard from "@/components/cards/NewProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { productProps } from "../best-sells/BestSells";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import { HiArrowLongRight } from "react-icons/hi2";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { fetchNewProduct } from "@/actions/products";
import CardLoader from "@/components/cards/CardLoader";

interface Product {
  id: number;
  name: string;
  price: number;
  createdDate: string; // Assuming createdDate is an ISO date string
  // Add other fields as needed
}

const NewProducts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true)
      const { data, error } = await fetchNewProduct();
      setData(data);
      setError(error);
      setLoading(false);
    };

    loadProduct();
  }, []);

  return (
    <div className=''>
      <h2 className='font-bold md:text-3xl text-xl text-slate-600 flex items-center gap-3'>
        New Products{" "}
        <HiArrowLongRight className='animate-pulse md:text-5xl text-3xl' />
      </h2>
      <div className='my-10'>
        {loading ? (
          <CardLoader />
        ) : (
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
                slidesPerView: 1,
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
              <SwiperSlide key={d?._id} className='bg-transparen!'>
                <NewProductCard
                  rating={d.ratings}
                  colors={d.colors}
                  brand={d.brand}
                  descriptions={d.description}
                  discount={d.discountPrice}
                  _id={d._id}
                  image={d?.images?.[0]?.url}
                  price={d.price}
                  name={d.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default NewProducts;
