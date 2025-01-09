"use client";

import LoadingSkillate from "@/components/product-destails/LoadingSkillate";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";

interface props {
  src: string;
  title: string;
  description: string;
  price: number;
  _id: string;
  loading: boolean;
  off: number;
}

const StoreOffCard = ({
  src,
  title,
  description,
  price,
  _id,
  loading,
  off,
}: props) => {
  const router = useRouter();
  const discountedPrice = (price - (price * off) / 100).toFixed(2);

  return (
    <>
      {loading ? (
        <LoadingSkillate />
      ) : (
        <div className='border rounded-lg text-slate-600 capitalize h-full! relative overflow-hidden'>
          <div className='md:p-5 p-3 flex flex-col items-center justify-center h-full'>
            <div className='overflow-hidden relative'>
              <span className='bg-slate-700 text-white px-2 py-1 absolute top-0 right-0'>
                {off}%
              </span>
              <Image
                loading='lazy'
                src={src}
                alt={`${title} image`}
                width={400}
                height={400}
                className='object-cover h-full w-auto mx-auto'
              />
            </div>
            <h2 className='md:text-[16px] sm:text-[13px] text-[12px] md:mt-5'>
              {title.length > 20 ? <>{title.slice(0, 20)}...</> : title}
            </h2>
            <p className='md:text-[12px] text-center text-slate-500 mt-1 font-light'>
              {description.length > 50 ? (
                <>{description.slice(0, 50)}...</>
              ) : (
                description
              )}
            </p>
            <p className='text-slate-700 flex gap-2 border-t mt-2'>
              <span>{discountedPrice}$</span>
              <del className="opacity-65 text-sm">{price}$</del>
            </p>
          </div>
          <Button
            className='w-full bg-slate-600 flex items-center text-white hover:text-slate-600'
            onClick={() =>
              router.push(
                `${process.env.NEXT_PUBLIC_BASE_URL}/product_detials/${_id}`
              )
            }>
            Buy now <CiShoppingCart />
          </Button>
        </div>
      )}
    </>
  );
};

export default StoreOffCard;
