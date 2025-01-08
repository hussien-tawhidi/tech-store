"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Keyboard,
  Pagination,
  Autoplay,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

// import { FreeMode, Pagination } from "swiper/modules";
import { mainMenu } from "../../../../constant";
import MenuCard from "./MenuCard";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Button } from "@/components/ui/button";

export default function Menu() {
  return (
    <div className='md:my-10 my-5'>
      <div>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          // pagination={{
          //   type: "fraction",
          // }}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          loop={true}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            450: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            900: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          // modules={[FreeMode, Pagination]}
          modules={[
            Keyboard,
            Pagination,
            Navigation,
            Autoplay,
            EffectCoverflow,
          ]}
          className='mySwiper'>
          {mainMenu.map((menu) => (
            <SwiperSlide key={menu.id}>
              <MenuCard
                title={menu.title}
                src={menu.image}
                alt={menu.title}
                link='/'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='flex gap-5 md:ml-20 sm:ml-10 ml-5 sm:mt-10 mt-5'>
        <Button className='arrow-left'>
          <IoMdArrowDropleft className="" />
        </Button>
        <Button className='arrow-right arrow'>
          <IoMdArrowDropright />
        </Button>
      </div>
    </div>
  );
}
