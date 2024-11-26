"use client";

import ProductCard from "@/components/cards/ProductCard";
import ProductBanner from "@/components/products/ProductsHero";
import ProductsHero from "@/components/products/ProductsHero";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const { products } = await response?.data;
        setData(products); // Update data with the fetched response
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
    <div className=''>
      <ProductBanner
        image='/assets/accessories/MMMQ3.png'
        off={59}
        title='All products'
      />
      {/* <ProductsHero /> */}
      <div className='sm:mx-10 mx-3 my-5'>
        <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 md:gap-5 gap-5'>
          {data.map((product: { id: string; thumbnail: string }) => (
            <ProductCard
              imageSrc={product.thumbnail}
              href={`/product_detials/${product.id}`}
              title='Some title'
              key={product.id}
              // onClick={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
