"use client";

import { fetchBestSells } from "@/actions/products";
import CardLoader from "@/components/cards/CardLoader";
import { useEffect, useState } from "react";
import LaptopsCard from "./LaptopsCard";
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowRight } from "react-icons/md";

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
  const [data, setData] = useState([]);
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

  return (
    <div className='flex flex-col my-20'>
      <div className=''>
        <Button
          variant={"outline"}
          className='flex items-center font-normal gap-2 text-sm hover:text-slate-950 border-slate-500 hover:border-slate-900'>
          all laptops <MdKeyboardArrowRight className='text-2xl mt-1' />
        </Button>
      </div>
      {loading ? (
        <CardLoader />
      ) : (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-5'>
          {data.map((d: productProps) => (
            <LaptopsCard
              descriptions={d.description}
              key={d._id}
              brand={d.brand}
              discount={d.discountPrice}
              id={d._id}
              price={d.price}
              name={d.name}
              image={d?.images?.[0]?.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Laptops;
