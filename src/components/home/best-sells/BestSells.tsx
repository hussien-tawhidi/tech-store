"use client";

import BestSellsCard from "@/components/cards/BestSellsCard";
import axios from "axios";
import { useEffect, useState } from "react";

export interface productProps {
  title: string;
  description: string;
  images: string;
  brand: string;
  id: string;
  discountPercentage: number;
  price: number;
}

const BestSells = () => {
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
        setData(randomProducts); // Update data with the fetched response
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
  }, []);

  return (
    <div className='flex flex-col my-10'>
      <h6 className='font-semibold text-3xl text-slate-600 relative b-3'>
        <span className='absolute bottom-0 w-10 h-1 bg-slate-600'></span> Best
        sells
      </h6>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-5'>
        {data.map((d: productProps) => (
          <BestSellsCard
            key={d.id}
            brand={d.brand}
            discount={d.discountPercentage}
            id={d.id}
            price={d.price}
            title={d.title}
            image={d.images[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSells;
