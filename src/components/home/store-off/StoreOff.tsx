"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { PiPercentLight } from "react-icons/pi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { productProps } from "../best-sells/BestSells";
import { Button } from "@/components/ui/button";
import StoreOffCard from "./StoreOffCard";
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

const StoreOff = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDate = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/admin/products", {
          method: "PATCH",
        });
        const result = await response.json();

        if (result.ok) setData(result?.products);
      } catch (error) {
        console.log(error, "Error getting products admin data [store-off]");
      } finally {
        setLoading(false);
      }
    };
    getDate();
  }, []);

  return (
    <div className='shadow-lg'>
      <div className='flex items-center text-slate-100 bg-gradient-to-r animated-background from-slate-800  via-slate-700 to-slate-600 md:p-5 p-3 justify-between'>
        <Button className='' variant={"outline"}>
          all
        </Button>
        <p className='flex items-center font-semibold md:text-xl sm:text-sm text-[12px]'>
          <PiPercentLight className='md:text-5xl sm:text-3xl text-3xl' />
          <span>
            Tech <br /> store OFF
          </span>
        </p>
      </div>
      {/* products */}
      <div className=''>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
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
            750: {
              slidesPerView: 4,
              spaceBetween: 10,
            },

            900: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          // modules={[FreeMode, Pagination]}
          modules={[Keyboard, Pagination, Navigation, Autoplay]}>
          {data.slice(16, data.length).map((menu: productProps) => (
            <SwiperSlide key={menu._id}>
              <StoreOffCard
                _id={menu._id}
                off={menu.discountPrice}
                description={menu.description}
                loading={loading}
                price={menu.price}
                src={menu?.images[0]?.url}
                title={menu.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='flex gap-5 md:ml-20 sm:ml-10 ml-5 sm:mt-10 mt-5 md:pb-5 pb-3'>
        <Button className='arrow-left'>
          <BsArrowLeft className='' />
        </Button>
        <Button className='arrow-right arrow'>
          <BsArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default StoreOff;
