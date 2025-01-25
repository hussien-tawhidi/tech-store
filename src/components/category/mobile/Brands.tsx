"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { phoneBrands } from "../../../../constant/categoryData";

const Brands = ({ menuCategory }: { menuCategory: string }) => {
  return (
    <div>
      <div className='flex justify-between gap-5'>
        <Button className='arrow-left arrow'>
          <IoMdArrowDropleft className='' />
        </Button>
        <Button className='arrow-right arrow'>
          <IoMdArrowDropright />
        </Button>
      </div>
      <Swiper
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        slidesPerView={4}
        spaceBetween={10}
        grabCursor={true}
        breakpoints={{
          300: {
            slidesPerView: 6,
          },

          450: {
            slidesPerView: 8,
          },

          900: {
            slidesPerView: 10,
          },
          1000: {
            slidesPerView: 12,
          },
        }}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}>
        {phoneBrands.map((phone, index) => (
          <SwiperSlide key={phone.name + index} className='bg-transparen! p-2'>
            <Link
              href={menuCategory + "/" + phone.link}
              key={index}
              className='md:text-[12px] text-[10px] font-light py-1 md:px-4 px-2 border rounded'>
              {phone.name}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
