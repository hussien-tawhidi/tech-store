"use client";

import { fetchBestSells } from "@/actions/products";
import BestSellsCard from "@/components/cards/BestSellsCard";
import CardLoader from "@/components/cards/CardLoader";
import { useEffect, useState } from "react";

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

const BestSells = () => {
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
      <h6 className='font-semibold text-3xl text-slate-600 relative b-3'>
        <span className='absolute -bottom-2 rounded w-10 h-[2px] bg-slate-600'></span>{" "}
        Best sells
      </h6>
      {loading ? (
        <CardLoader />
      ) : (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-5'>
          {data.map((d: productProps) => (
            <BestSellsCard
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

export default BestSells;
