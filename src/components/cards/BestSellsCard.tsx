"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { BiSolidOffer } from "react-icons/bi";
import { useRouter } from "next/navigation";
import {  BsCartPlus } from "react-icons/bs";

interface props {
  brand: string;
  name: string;
  price: number;
  discount: number | 0;
  id: string;
  image: string;
  descriptions: string;
}

const BestSellsCard = ({
  name,
  price,
  discount,
  id,
  image,
  descriptions,
}: props) => {
  const router = useRouter();

  return (
    <div className='shadow-lg cursor-pointer'>
      <div className='relative w-full h-full p-5 rounded-md  overflow-hidden'>
        <div className='z-10 text-left'>
          <div className='relative text-left'>
            <h1 className='text-xl font-semibold -mb-14  w-full leading-6'>
              {name?.length > 10 ? (
                <>
                  {/* {name?.split(" ")[0]} First word */}
                  <strong className='block text-transparent stroke -z-10 text-6xl -inset-1'>
                    {name?.split(" ")?.slice(1)?.join(" ")}{" "}
                  </strong>
                </>
              ) : (
                name
              )}
            </h1>
            <Image
              src={image}
              alt='name'
              width={1000}
              height={1000}
              className='object-cover mx-auto z-10 w-auto h-[35vh]'
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
              variant='link'
              className='shadow-xl  text-slate-600 font-semibold'
              onClick={() => router.push(`/product_detials/${id}`)}>
              <BsCartPlus />
            </Button>
          </div>
          <p className='text-slate-600 font-semibold font-mono flex items-center gap-1'>
            %{discount} <BiSolidOffer />
          </p>
        </div>
        <p className='text-[10px] sm:w-[50%] w-[90%] leading-5 text-right ml-auto opacity-45 text-muted-foreground'>
          {descriptions}
          <span
            className='shadow-xl mx-1  text-slate-600 font-semibold'
            onClick={() =>
              router.push(
                `${process.env.NEXT_PUBLIC_BASE_URL}/product_detials/${id}`
              )
            }>
            more...
          </span>
        </p>
      </div>
    </div>
  );
};

export default BestSellsCard;
