"use client";

import TopRatedCard from "@/components/cards/TopRatedCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { productProps } from "../best-sells/BestSells";
import { fetchTopRatedProducts } from "@/actions/products";
import CardLoader from "@/components/cards/CardLoader";

interface Product {
  id: number;
  name: string;
  price: number;
  createdDate: string;
  colors: string[]; // Assuming createdDate is an ISO date string
  // Add other fields as needed
}

const TopRated = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const { data, error } = await fetchTopRatedProducts();
      setData(data);
      setError(error);
      setLoading(false);
    };

    loadProduct();
  }, []);

  return (
    <div className='my-10'>
      <div className='flex items-center text-slate-600 '>
        <p className='text-3xl font-semibold my-3'>Top rated products</p>
      </div>
      {loading ? (
        <CardLoader />
      ) : (
        <div className='grid lg:col-span-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-3 gap-5'>
          {data.map((product: productProps) => (
            <TopRatedCard
              colors={product.colors}
              setColors={setColors}
              key={product._id}
              id={product.id}
              title={product.name}
              productName={product.name}
              productDescription={product.description}
              productImage={product?.images[0]?.url}
              price={product.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopRated;
