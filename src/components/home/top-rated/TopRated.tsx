"use client";

import TopRatedCard from "@/components/cards/TopRatedCard";
import { useEffect, useState } from "react";
import { productProps } from "../laptops/Laptops";
import { fetchTopRatedProducts } from "@/actions/products";
import ResponsiveSlider from "@/components/sliders/ResponsiveSlider";
import Loading from "@/components/Loading";

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
  console.log(colors);
  const renderLaptopCard = (product: productProps) => (
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
  );
  return (
    <div className='my-10'>
      <div className='flex items-center text-slate-600 '>
        <p className='text-3xl font-semibold my-3'>Top rated products</p>
      </div>
      {error && <p className='text-red-600'>Error fetching data: {error}</p>}
      {loading && <Loading />}
      <ResponsiveSlider data={data} renderItem={renderLaptopCard} />
    </div>
  );
};

export default TopRated;
