"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { productProps } from "../best-sells/BestSells";
import { MdOutlineHotelClass } from "react-icons/md";
import WeeklyHotProductsCard from "@/components/cards/WeeklyHotProductsCard";
import { fetchHotProducts } from "@/actions/products";
import CardLoader from "@/components/cards/CardLoader";

interface Product {
  id: number;
  name: string;
  price: number;
  createdDate: string; // Assuming createdDate is an ISO date string
  // Add other fields as needed
}
const WeeklyHotProducts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const { data, error } = await fetchHotProducts();
      setData(data);
      setError(error);
      setLoading(false);
    };

    loadProduct();
  }, []);
  return (
    <div className='mt-20'>
      <h5 className='flex items-center gap-2 md:my-5 my-3 md:text-3xl text-xl text-gray-600 font-semibold'>
        <MdOutlineHotelClass className='animate-ping' /> Best of the week
      </h5>
      {loading ? (
        <CardLoader />
      ) : (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3'>
          {data.map((data: productProps) => (
            <WeeklyHotProductsCard
              rate={data.ratings}
              key={data._id}
              brand={data.brand}
              discount={data.discountPrice}
              _id={data._id}
              image={data?.images[0]?.url}
              price={data.price}
              title={data.name}
              description={data.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WeeklyHotProducts;
