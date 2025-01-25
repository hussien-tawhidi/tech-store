"use client";

import { fetchBestSells } from "@/actions/products";
import CardLoader from "@/components/cards/CardLoader";
import { useEffect, useState } from "react";
import LaptopsCard from "./LaptopsCard";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";
import { laptopsBrand } from "../../../../constant";
import OverlayForBanner from "../OverlayForBanner";
import ResponsiveSlider from "@/components/sliders/ResponsiveSlider";

export interface productProps {
  ratings: number;
  name: string;
  description: string;
  images: any;
  brand: string;
  id: string;
  _id: string;
  discountPrice: number;
  price: number;
  colors: { name: string; hex: string }[];
}

const Laptops = () => {
  const [data, setData] = useState<productProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const { data, error } = await fetchBestSells();
      setData(data);
      setError(error);
      setLoading(false);
    };

    loadProduct();
  }, []);

  const renderLaptopCard = (product: productProps) => (
    <LaptopsCard
      descriptions={product.description}
      key={product._id}
      brand={product.brand}
      discount={product.discountPrice}
      id={product._id}
      price={product.price}
      name={product.name}
      image={product?.images?.[0]?.url}
      className='w-auto h-[35vh]'
    />
  );

  return (
    <div className=''>
      {/* All Laptops Button */}
      <div className='flex flex-col my-20 border py-10'>
        <div className=''>
          <Button
            variant={"outline"}
            className='flex items-center font-normal gap-2 text-sm hover:text-slate-950 border-slate-500 hover:border-slate-900'>
            all laptops <MdKeyboardArrowRight className='text-2xl mt-1' />
          </Button>
        </div>
        {error && <p className="text-red-500 border border-red-500 py-2 px-5 rounded">{error}</p>}
        {/* Slider */}
        {loading ? (
          <CardLoader />
        ) : (
          <ResponsiveSlider data={data} renderItem={renderLaptopCard} />
        )}
      </div>

      {/* Laptops Brand Grid */}
      <div className='grid md:grid-cols-5 grid-cols-2 md:gap-3 gap-2 my-10'>
        {laptopsBrand.map((laptops) => (
          <OverlayForBanner
            src={laptops.image}
            des={laptops.des}
            title={laptops.title}
            key={laptops.id}
          />
        ))}
      </div>

      {/* Additional Banner Section */}
      <div className='my-10 grid sm:gap-4 gap-2 sm:grid-cols-2'>
        <OverlayForBanner
          des='We suggest the best laptop, those our user satisfy with using of that'
          src='/features/laptopSuggestBanner.jpg'
          title='Laptop Suggested'
        />
        <OverlayForBanner
          des='We suggest the best laptop, those our user satisfy with using of that'
          src='/features/laptopAccessories.jpg'
          title='Laptop Accessories'
        />
      </div>
    </div>
  );
};

export default Laptops;
