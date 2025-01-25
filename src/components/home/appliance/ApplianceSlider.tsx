"use client";
import { useEffect, useState } from "react";
import AppllianceCard from "./AppllianceCard";
import { fetchApplliance } from "@/actions/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { productProps } from "../laptops/Laptops";
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
import Loading from "@/components/Loading";
const ApplianceSlider = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApp = async () => {
      try {
        setLoading(true);
        const result = await fetchApplliance();
        if (result.error) setError(result.error);
        setData(result.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchApp();
  }, []);
  return (
    <div className='mt-10'>
      {error && <p className='text-red-500 p-3 text-center'>{error}</p>}
      <div className='flex gap-5'>
        <Button className='arrow-left'>
          <IoMdArrowDropleft className='' />
        </Button>
        <Button className='arrow-right arrow'>
          <IoMdArrowDropright />
        </Button>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <Swiper
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          slidesPerView={4}
          spaceBetween={30}
          grabCursor={true}
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
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}>
          {data.map((d: productProps) => (
            <SwiperSlide key={d?._id} className='bg-transparen!'>
              <AppllianceCard
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
  );
};

export default ApplianceSlider;
