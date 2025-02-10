"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
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

interface props {
  buttonsShow?: boolean;
  titleShow?: boolean;
}

export default function Menu({ buttonsShow = true, titleShow = true }: props) {
  return (
    <div className='my-3'>
      <div>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={10}
          grabCursor={true}
         
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          loop={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 4,
              spaceBetween: 10,
            },

            450: {
              slidesPerView: 5,
              spaceBetween: 10,
            },

            900: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 8,
              spaceBetween: 10,
            },
          }}
          // modules={[FreeMode, Pagination]}
          modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
          className='mySwiper'>
          {mainMenu.map((menu) => (
            <SwiperSlide key={menu.id}>
              <MenuCard
                title={menu.title}
                src={menu.image}
                alt={menu.title}
                link={menu.link}
                titleShow={titleShow}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {buttonsShow && (
        <div className='flex gap-5 md:ml-20 sm:ml-10 ml-5 sm:mt-10 mt-5'>
          <Button className='arrow-left'>
            <IoMdArrowDropleft className='' />
          </Button>
          <Button className='arrow-right arrow'>
            <IoMdArrowDropright />
          </Button>
        </div>
      )}
    </div>
  );
}
