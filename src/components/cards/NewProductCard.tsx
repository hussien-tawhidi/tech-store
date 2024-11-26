"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { BsCartPlus } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { GiNewShoot } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";

interface props {
  brand: string;
  title: string;
  price: number;
  discount: number | 0;
  id: string;
  image: string;
  descriptions: string;
}
const NewProductCard = ({
  title,
  brand,
  price,
  discount,
  id,
  image,
  descriptions,
}: props) => {
  const router = useRouter();

  return (
    <div className='bg-slate-200 h-full'>
      <div className='relative flex flex-col justify-between rounded-lg mb-16 h-full shadow-xl'>
        <div className=' flex justify-between'>
          <span className=' bg-slate-600 py-1 px-2 sm:text-md text-[10px] text-white spin-in-6 flex items-center'>
            <GiNewShoot /> NEW
          </span>
          <div className='py-1 relative px-2 md:gap-1 text-xl  sm:text-md text-[10px] text-slate-600 spin-in-6 flex items-center'>
            %{discount} <BiSolidOffer />
            <span className='w-[50%] h-[2px] absolute bottom-0 left-0 right-0 mx-auto bg-slate-600'></span>
          </div>
        </div>
        <div className='relative'>
          <Image
            src={image}
            width={500}
            height={500}
            alt={title}
            className='sm:h-[30vh] h-auto mx-auto object-cover w-[200px]'
          />
          <div className='absolute md:-bottom-4 bottom-0 bg-slate-200/50 left-0 text-slate-600 backdrop-blur-sm sm:p-3 p-2 rounded-tl-md overflow-hidden'>
            <p className='md:text-sm text-[12px] tracking-tight font-semibold border-b'>
              {title.length > 10 ? <>{title.slice(0, 15)}...</> : title}
            </p>
            <p className='md:text-sm text-[10px] flex justify-between sm:my-2 my-0 capitalize'>
              price : <span>${price}</span>
            </p>
            <button
              className='text-slate-600'
              onClick={() =>
                router.push(
                  `/product_detials/${id}`
                )
              }>
              <BsCartPlus />
            </button>
          </div>
        </div>
        <div className='sm:mt-5 mt-1 p-4'>
          <p className='font-semibold text-[10px] pt-3 text-slate-600 border-t-2 border-slate-600'>
            Brand: {brand ? brand : "Brand Name"}
          </p>
          <p className='text-slate-600 tracking-wide font-sans sm:text-sm text-[10px] h-[10vh]'>
            {descriptions.length > 70 ? (
              <>{descriptions.slice(0, 50)} ...</>
            ) : (
              descriptions
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewProductCard;
