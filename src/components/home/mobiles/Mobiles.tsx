"use client";

import { useEffect, useState } from "react";
import { productProps } from "../laptops/Laptops";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
import { fetchSmartPhones } from "@/actions/products";
import MobileCard from "./MobilesCard";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "@/components/ui/button";
import MobileBrands from "./MobileBrands";
import MobileBanners from "./MobileBanners";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Mobiles = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const { data, error } = await fetchSmartPhones();
      setData(data);
      setError(error);
      setLoading(false);
    };

    loadProduct();
  }, []);

  return (
    <>
      <div className='border rounded-2xl'>
        {error && <p className='text-red-500'>{error}</p>}
        <h2 className='font-bold md:text-2xl justify-between p-5 text-xl text-slate-600 flex items-center gap-3'>
          <Button
            variant={"outline"}
            className='flex items-center font-normal gap-2 text-sm hover:text-slate-950 border-slate-500 hover:border-slate-900'>
            Choose your smart phones{" "}
            <MdKeyboardArrowRight className='text-2xl mt-1' />
          </Button>
        </h2>

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
          modules={[Keyboard]}>
          {data.map((d: productProps) => (
            <SwiperSlide key={d?._id} className='bg-transparen!'>
              <MobileCard
                rating={d.ratings}
                colors={d.colors}
                brand={d.brand}
                descriptions={d.description}
                discount={d.discountPrice}
                _id={d._id}
                image={d?.images?.[0]?.url}
                price={d.price}
                name={d.name}
                loading={loading}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <MobileBrands />
      {/* banner */}
      <MobileBanners />
    </>
  );
};

export default Mobiles;
