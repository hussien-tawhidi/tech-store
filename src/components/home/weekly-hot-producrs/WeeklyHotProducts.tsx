"use client";

import { useEffect,  useState } from "react";
import { ProductProps } from "../../../../types";
import { fetchHotProducts } from "@/actions/products";
import ResponsiveSlider from "@/components/sliders/ResponsiveSlider";
import WeeklyHostProduct from "./WeeklyHotProductCard";
import Loading from "@/components/Loading";
const WeeklyHotProducts = () => {
  const [data, setData] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);
  // Fetch products on mount
  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const { data } = await fetchHotProducts();
      setData(data);
      setLoading(false);
    };
    loadProduct();
  }, []);

  return (
    <div className='relative flex flex-col items-center w-full overflow-hidden'>
      <h4 className='text-center font-bold md:text-3xl text-xl my-3'>
        Hot of the week
      </h4>
      {loading&&<Loading/>}
      <ResponsiveSlider data={data} renderItem={WeeklyHostProduct} />
    </div>
  );
};

export default WeeklyHotProducts;
