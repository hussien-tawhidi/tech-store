"use client";

import TopRatedCard from "@/components/cards/TopRatedCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { productProps } from "../best-sells/BestSells";

const TopRated = () => {
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
        const randomProducts = shuffled.slice(0, 3);
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
    <div className='my-10'>
      <div className='flex items-center text-slate-600 '>
        <p className='text-3xl font-semibold my-3'>Top rated products</p>
      </div>
      <div className='grid lg:col-span-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-3 gap-5'>
        {data.map((product: productProps) => (
          <TopRatedCard
            key={product.id}
            id={product.id}
            title={product.title}
            productName={product.title}
            productDescription={product.description}
            productImage={product.images[0]} // Replace with your image path
            price={product.price}
            // onAddToCart={() => alert("Added to cart!")}
          />
        ))}
      </div>
    </div>
  );
};

export default TopRated;
