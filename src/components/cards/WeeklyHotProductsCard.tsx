"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { BiSolidOffer } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Brands from "../Brands";
import Rate from "../Rate";
import { BsCartPlus } from "react-icons/bs";

interface props {
  brand: string;
  title: string;
  price: number;
  discount: number | 0;
  _id: string;
  image: string;
  description: string;
  rate: number;
}

const WeeklyHotProductsCard = ({
  title,
  brand,
  price,
  discount,
  _id,
  rate,
  image,
  description,
}: props) => {
  const router = useRouter();

  const discountedPrice = (price - (price * discount) / 100).toFixed(2);

  return (
    <div className='border overflow-hidden'>
      <div className='relative w-full h-full p-5 rounded-md flex flex-col justify-between overflow-hidden'>
        <div className='z-10 text-left flex flex-col justify-between h-full'>
          <Brands brand={brand} />

          <div className='relative text-left my-5'>
            {image && (
              <Image
                src={image}
                alt='title'
                width={500}
                height={500}
                className='object-cover mx-auto z-10 w-[10rem] h-[30vh]'
              />
            )}
          </div>
          <div className='relative flex items-center justify-between'>
            <Rate rating={rate} />
            <p className='relative font-bold text-xl text-slate-600'>
              {discountedPrice}
              <span className='absolute font-normal -top-1 text-[12px]'>$</span>
              <del className='opacity-85 text-red-600 text-[10px] justify-end flex items-center gap-1'>
                <span className='flex items-center text-red-600'>
                  {discount}%
                </span>
                -<span className='text-red-600'>{price}$</span>
              </del>
            </p>
          </div>

          <div className='flex gap'>
            <div className=''>
              <h3 className='text-slate-600 font-bold text-2xl relative my-3'>
                {title.length > 20 ? <>{title.slice(0, 20)}...</> : title}
                {/* <span className='w-[30%] h-[3px] absolute -bottom-1 left-0 bg-slate-600'></span> */}
              </h3>
              <p className='text-muted-foreground text-[12px] leading-5 tracking-wide opacity-80'>
                {description.length > 50 ? (
                  <>{description.slice(0, 50)}...</>
                ) : (
                  <>{description}</>
                )}
              </p>
            </div>
          </div>
        </div>
        <Button
          className='w-full mt-10 border-slate-500! text-slate-600'
          variant={"outline"}
          onClick={() =>
            router.push(
              `${process.env.NEXT_PUBLIC_BASE_URL}/product_detials/${_id}`
            )
          }>
          See & Add to <BsCartPlus />
        </Button>
      </div>
    </div>
  );
};

export default WeeklyHotProductsCard;
