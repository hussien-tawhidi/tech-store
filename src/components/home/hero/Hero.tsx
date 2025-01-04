"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeBanners } from "../../../../constant";

import { Keyboard, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Hero = () => {
  return (
    <>
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
          modules={[Keyboard, Pagination, Autoplay, EffectFade]}
          className='mySwiper'
          effect='fade'>
          {homeBanners?.map((data) => (
            <SwiperSlide key={data?.id}>
              <Link href={"/"}>
                <Image
                  width={2000}
                  height={900}
                  className='object-cover'
                  src={data?.src}
                  alt={"home banner"}
                  loading='lazy'
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='swiper-pagination'></div>
      </div>
    </>
  );
};

export default Hero;
