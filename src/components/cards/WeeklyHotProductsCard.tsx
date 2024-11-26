"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { BiSolidOffer } from "react-icons/bi";
import { useRouter } from "next/navigation";

interface props {
  brand: string;
  title: string;
  price: number;
  discount: number | 0;
  id: string;
  image: string;
  description: string;
}

const WeeklyHotProductsCard = ({
  title,
  brand,
  price,
  discount,
  id,
  image,
  description,
}: props) => {
  const router = useRouter();
  return (
    <div className='shadow-lg'>
      <div className='relative w-full h-full bg-slate-200 p-5 rounded-md  overflow-hidden'>
        <div className='z-10 text-left'>
          <p className='text-slate-600 text-sm font-semibold text-left capitalize h-5'>
            {brand}
          </p>
          <p className='text-slate-600 font-semibold font-mono flex items-center gap-1 text-xl justify-center shadow-xl py-2 px-3 rounded-md border-slate-600 w-[100px]'>
            %{discount}
            <BiSolidOffer />
          </p>

          <div className='relative text-left '>
            <Image
              src={image}
              alt='title'
              width={500}
              height={500}
              className='object-cover mx-auto z-10 w-auto h-[30vh]'
            />
          </div>
          <div className='relative'>
            <p className='relative font-semibold text-slate-600'>
              {price}
              <span className='absolute -top-1 text-[10px]'>$</span>
            </p>
          </div>

          <div className='flex gap'>
            <div className=''>
              <h3 className='text-slate-600 font-bold text-2xl relative my-3'>
                {title}
                <span className='w-[30%] h-[3px] absolute -bottom-1 left-0 bg-slate-600'></span>
              </h3>
              <p className='text-muted-foreground text-sm tracking-wide'>
                {description.length > 50 ? (
                  <>{description.slice(0, 70)}...</>
                ) : (
                  <>{description}</>
                )}
              </p>
            </div>
            <div className='flex justify-end'>
              <Button
                variant='outline'
                className='shadow-lg text-slate-600 font-semibold'
                onClick={() => router.push(`/product_detials/${id}`)}>
                Buy now
              </Button>
            </div>
          </div>
        </div>
        {/* <span className='w-[90%] -z-0 bottom-2 h-1 bg-red-500 absolute rounded-md'></span> */}
      </div>
    </div>
  );
};

export default WeeklyHotProductsCard;
