"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import {
  audioBrands,
  beautyBrands,
  computerBrands,
  gamingBrands,
  headphoneBrands,
  homeApplianceBrands,
  jewelryBrands,
  laptopTabletBrands,
  networkConnectivityBrands,
  phoneBrands,
  videoBrands,
  watchBrands,
} from "../../../../constant/categoryData";
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

const Brands = ({ menuCategory = "" }: { menuCategory?: string }) => {
  const [brands, setBrands] = useState<{ name: string; link: string }[]>([]);

  useEffect(() => {
    let selectedBrands: { name: string; link: string }[] = [];

    switch (menuCategory) {
      case "smartphone":
        selectedBrands = phoneBrands;
        break;

      case "handsfree,headphone":
        selectedBrands = headphoneBrands;
        break;

      case "laptop,tablet,ipad ...":
        selectedBrands = laptopTabletBrands;
        break;

      case "watches":
        selectedBrands = watchBrands;
        break;

      case "computer":
        selectedBrands = computerBrands;
        break;

      case "networks & connectivities":
        selectedBrands = networkConnectivityBrands;
        break;

      case "home appliance":
        selectedBrands = homeApplianceBrands;
        break;

      case "audio":
        selectedBrands = audioBrands;
        break;

      case "video":
        selectedBrands = videoBrands;
        break;

      case "gaming":
        selectedBrands = gamingBrands;
        break;

      case "jeweleries":
        selectedBrands = jewelryBrands;
        break;

      case "beauty":
        selectedBrands = beautyBrands; // No brands available for these categories
        break;

      default:
        console.warn("Unknown category:", menuCategory);
        selectedBrands = []; // Fallback for undefined or unknown categories
        break;
    }

    setBrands(selectedBrands);
  }, [menuCategory]);

  return (
    <div>
      <div className='flex justify-between gap-5'>
        <Button className='arrow-left arrow'>
          <IoMdArrowDropleft />
        </Button>
        <Button className='arrow-right arrow'>
          <IoMdArrowDropright />
        </Button>
      </div>
      <Swiper
        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
        slidesPerView={4}
        spaceBetween={10}
        grabCursor={true}
        breakpoints={{
          300: { slidesPerView: 6 },
          450: { slidesPerView: 8 },
          900: { slidesPerView: 10 },
          1000: { slidesPerView: 12 },
        }}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}>
        {brands.map((brand, index) => (
          <SwiperSlide
            key={`${brand.name}-${index}`}
            className='bg-transparent p-2'>
            <Link
              href={`${menuCategory}/${brand.link}`}
              className='md:text-[12px] text-[10px] font-light py-1 md:px-4 px-2 border rounded whitespace-nowrap'>
              {brand.name}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
