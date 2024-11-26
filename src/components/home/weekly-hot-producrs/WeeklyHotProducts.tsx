"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { productProps } from "../best-sells/BestSells";
import { MdOutlineHotelClass } from "react-icons/md";
import WeeklyHotProductsCard from "@/components/cards/WeeklyHotProductsCard";

interface Props {}

const WeeklyHotProducts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const { products } = await response.data;
        const shuffled = products.sort(() => 0.5 - Math.random());
        const randomProducts = shuffled.slice(0, 4);
        setData(randomProducts);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          // Axios-specific error handling
          setError(
            err.response?.data?.message ||
              "An error occurred while fetching data."
          );
        } else {
          // Generic error handling
          setError("An unexpected error occurred.");
        }
        console.error("Fetch error:", err);
      } finally {
        setLoading(false); // Always reset loading state
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div className=''>
      <h5 className='flex items-center gap-2 md:my-5 my-3 md:text-3xl text-xl text-gray-600 font-semibold'>
        <MdOutlineHotelClass /> Best of the week
      </h5>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-3'>
        {data.map((data: productProps) => (
          <WeeklyHotProductsCard
            key={data.id}
            brand={data.brand}
            discount={data.discountPercentage}
            id={data.id}
            image={data.images[0]}
            price={data.price}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WeeklyHotProducts;
