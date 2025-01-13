"use client";

import Rate from "@/components/Rate";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LiaCartPlusSolid } from "react-icons/lia";

interface Props {
  images: any[];
  index: number;
  rating: number;
  price: number;
  discountPrice: number;
  name: string;
  description: string;
}

const WeeklyHotProductCard = ({
  name,
  images,
  index,
  price,
  discountPrice,
  description,
  rating,
}: Props) => {
  return (
    <div className='bg-white rounded-md shadow-md h-full border'>
      <Image
        width={1000}
        height={1000}
        src={images[0].url}
        alt={`Slide ${index}`}
        className='object-cover w-full h-[20vh] rounded-md'
      />
      <div className='text-center mt-2'>
        <Rate rating={rating || 4} />
        <p className='flex items-center justify-between px-4 bg-red-300'>
          <span>
            {price && (price - (price * discountPrice) / 100).toFixed(2)}$
          </span>
          <del className='text-[10px]'>{price}$</del>
        </p>
        <h3 className='font-semibold text-[16px]'>
          {name.length > 20 ? `${name.slice(0, 20)}...` : name}
        </h3>
        <p className='text-xs text-slate-500 my-2'>
          {description && description.length > 30
            ? `${description.slice(0, 30)}...`
            : description}
        </p>
        <Button className='w-full border bg-slate-600 text-white hover:bg-slate-500'>
          <LiaCartPlusSolid />
        </Button>
      </div>
    </div>
  );
};

export default WeeklyHotProductCard;
