"use client";

import LoadingSkillate from "@/components/product-destails/LoadingSkillate";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface props {
  src: string;
  title: string;
  description: string;
  price: number;
  _id: string;
  loading: boolean;
}

const StoreOffCard = ({
  src,
  title,
  description,
  price,
  _id,
  loading,
}: props) => {
  const router = useRouter();
  return (
    <>
      {loading ? (
        <LoadingSkillate />
      ) : (
        <div className='border rounded-lg text-slate-600 capitalize h-full! relative overflow-hidden'>
          <div className='md:p-5 p-3 flex flex-col items-center justify-center h-full'>
            <div className='overflow-hidden'>
              <Image
                src={src}
                alt={`${title} image`}
                width={400}
                height={400}
                className='object-cover h-auto w-[100%] mx-auto'
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
            <p className='text-slate-700'>{price}$</p>
          </div>
          <Button
            className='w-full bg-slate-600 text-white hover:text-slate-600'
            onClick={() => router.push(`/product_details/${_id}`)}>
            Buy now
          </Button>
        </div>
      )}
    </>
  );
};

export default StoreOffCard;
