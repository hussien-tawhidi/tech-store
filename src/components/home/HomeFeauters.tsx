"use client";

import { homeFeatures } from "../../../constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeFeauters = () => {
  return (
    <section className=''>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
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
        modules={[Keyboard, Pagination, Autoplay]}
        className='mySwiper'>
        {homeFeatures.map((f) => (
          <SwiperSlide key={f.id}>
            <div
              key={f.id}
              className='flex animate__animated animate__lightSpeedInRight items-center md:gap-5 gap-3 md:p-5 p-3 h-full text-slate-600 shadow-md'>
              {f.icon && (
                <f.icon className='text-3xl text-slate-500 font-extrabold' />
              )}
              <div className=''>
                <p className='flex items-center md:gap-3 gap-2 tracking-wider font-semibold text-sm uppercase'>
                  {f.title}
                </p>
                <p className='text-[12px] md:leading-normal text-slate-600 leading-4 text-muted-foreground'>
                  {f.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeFeauters;
