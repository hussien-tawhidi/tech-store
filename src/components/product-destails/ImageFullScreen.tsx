"use client";

import { Swiper, SwiperSlide } from "swiper/react"; // Import from "swiper/react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// Import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules"; // Correct imports
import { Swiper as SwiperType } from "swiper"; // Import Swiper type explicitly
import { useState } from "react";

export default function ImageFullScreen() {
  // State to store the thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null); // Explicitly define the type

  return (
    <>
      {/* Main Image Swiper */}
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        } // Explicitly type style
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]} // Modules for Swiper
        className='mySwiper2'>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-1.jpg'
            alt='Nature 1'
            className=''
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-2.jpg'
            alt='Nature 2'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-3.jpg'
            alt='Nature 3'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-4.jpg'
            alt='Nature 4'
          />
        </SwiperSlide>
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper as SwiperType)} // Explicitly cast the swiper instance
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]} // Modules for Swiper
        className='mySwiper'>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-1.jpg'
            alt='Nature 1'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-2.jpg'
            alt='Nature 2'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-3.jpg'
            alt='Nature 3'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-4.jpg'
            alt='Nature 4'
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
