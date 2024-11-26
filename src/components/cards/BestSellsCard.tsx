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
}

const BestSellsCard = ({ title, brand, price, discount, id, image }: props) => {
    
  const router = useRouter();

  return (
    <div className='shadow-lg'>
      <div className='relative w-full h-full bg-slate-200 p-5 rounded-md  overflow-hidden'>
        <div className='z-10 text-left'>
          <p className='text-slate-600 text-[12px] font-semibold text-left '>
            {brand}
          </p>
          <div className='relative text-left'>
            <span className='absolute right-0 text-2xl font-semibold text-slate-600 w-full leading-6'>
              {title}
            </span>
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
              {price} <span className='absolute -top-1 text-[10px]'>$</span>
            </p>
            <span className='w-10 h-[3px] absolute -bottom-2 bg-slate-600'></span>
          </div>
          <div className='flex justify-end'>
            <Button
              variant='outline'
              className='shadow-xl  text-slate-600 font-semibold'
              onClick={() => router.push(`/product_detials/${id}`)}>
              Buy now
            </Button>
          </div>
          <p className='text-slate-600 font-semibold font-mono flex items-center gap-1'>
            %{discount} <BiSolidOffer />
          </p>
        </div>
        {/* <span className='w-[90%] -z-0 bottom-2 h-1 bg-gray-600 absolute rounded-md'></span> */}
      </div>
    </div>
  );
};

export default BestSellsCard;
