"use client"

import ResponsiveSlider from "./ResponsiveSlider";
import { ProductProps } from "../../../types";
import Image from "next/image";
import Rate from "@/components/Rate";
import { useEffect, useState } from "react";
import { fetchHotProducts } from "@/actions/products";
import Loading from "../Loading";

const ExampleSlider = () => {
 const [data, setData] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
     const loadProduct = async () => {
       setLoading(true);
       const { data } = await fetchHotProducts();
       setData(data);
       setLoading(false);
     };
     loadProduct();
   }, []);

  const renderProductCard = (product: ProductProps) => (
    <div className='bg-white rounded-md shadow-md h-full border p-2'>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Image
            width={1000}
            height={1000}
            src={product.images[0].url}
            alt={"image"}
            className='object-cover w-full h-[30vh] rounded-md'
          />
          <div className='text-center mt-2'>
            <Rate rating={product.rating || 4} />
            <p className='flex items-center justify-between px-4'>
              <span>
                {product.price &&
                  (
                    product.price -
                    (product.price * product.discountPrice) / 100
                  ).toFixed(2)}
                $
              </span>
              <del className='text-[10px]'>{product.price}$</del>
            </p>
            <h3 className='font-semibold text-[16px]'>
              {product.name.length > 20
                ? `${product.name.slice(0, 20)}...`
                : product.name}
            </h3>
          </div>
        </>
      )}
    </div>
  );

  return <ResponsiveSlider data={data} renderItem={renderProductCard} />;
};

export default ExampleSlider;
