"use client";

import { fetchNewProduct } from "@/actions/products";

import { productProps } from "@/components/home/laptops/Laptops";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

const WhishLists = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const { data, error } = await fetchNewProduct();
      setData(data);
      setError(error);
      setLoading(false);
    };

    loadProduct();
  }, []);

  return (
    <div className='sm:p-5 p-2'>
      {error && <p className='text-red-500'>Error fetching products: {error}</p>}
      <div className='flex items-center justify-between my-10 text-2xl text-gray-900'>
        <h2 className=''>My Whishlists</h2> <Button>Clear lists</Button>
      </div>
      {loading ? (
        <div className='flex items-center justify-center  p-5 bg-gray-100 w-full h-[20vh]'>
          <div className='flex space-x-2 animate-pulse'>
            <div className='w-3 h-3 bg-gray-500 rounded-full'></div>
            <div className='w-3 h-3 bg-gray-500 rounded-full'></div>
            <div className='w-3 h-3 bg-gray-500 rounded-full'></div>
          </div>
        </div>
      ) : (
        <ul className='grid md:grid-cols-4 grid-cols-2 gap-4'>
          {data?.map((product: productProps) => (
            <li key={product._id} className='overflow-hidden rounded-lg'>
              <Image
                src={product.images[0].url}
                alt={product.name}
                width={400}
                height={400}
                className='object-cover w-[300px] h-full'
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WhishLists;
