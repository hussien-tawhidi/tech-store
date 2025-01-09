"use client";

import Image from "next/image";
import { BsCartPlus } from "react-icons/bs";
import { Button } from "../../ui/button";
import { BiSolidOffer } from "react-icons/bi";
import Brands from "../../Brands";
import ChooseColor from "../../ChooseColor";
import { useRouter } from "next/navigation";
import Rate from "../../Rate";
import Link from "next/link";
interface props {
  brand: string;
  name: string;
  price: number;
  discount: number | 0;
  _id: string;
  image: string;
  descriptions: string;
  rating: number;
  colors: { name: string; hex: string }[];
}
const MobileCard = ({
  name,
  brand,
  price,
  discount,
  _id,
  image,
  colors,
  descriptions,
  rating,
}: props) => {
  const router = useRouter();
  const discountedPrice = (price - (price * discount) / 100).toFixed(2);
  return (
    <div className='overflow-hidden rounded-lg'>
      <div className='relative flex flex-col justify-between rounded-lg mb-32 h-full shadow-xl'>
        <div className='relative overflow-hidden'>
          <div className='w-[20rem] h-[40vh]  overflow-hidden'>
            <Image
              src={image}
              width={500}
              height={500}
              alt={name}
              className='mx-auto object-cover h-full w-full'
            />
          </div>
        </div>
        <div className=' px-4'>
          <div className='font-semibold text-md mb-3 pt-3 justify-between flex gap-3 items-center text-slate-600'>
            <Button
              variant={"link"}
              className='shadow-xl py-3 px-5 rounded-md'
              onClick={() =>
                router.push(
                  `${process.env.NEXT_PUBLIC_BASE_URL}/product_detials/${_id}`
                )
              }>
              <BsCartPlus />
            </Button>
            <p className='flex flex-col items-center'>
              {discountedPrice}$
              <span className='text-[10px] flex items-center'>
                {price}$ - {discount}
                <BiSolidOffer className='' />
              </span>
            </p>
          </div>
          <Rate rating={rating} />
          <ChooseColor colors={colors} />
          <h3 className='text-slate-600 font-bold flex md:text-xl relative'>
            {name?.length > 10 ? <>{name?.slice(0, 15)}...</> : name}
            <Brands brand={brand} />
          </h3>
          <p className='text-slate-600 tracking-wide font-sans sm:text-[12px] text-[10px] h-[10vh]'>
            {descriptions?.length > 90 ? (
              <Link
                href={`/product_detials/${_id}`}
                className='text-muted-foreground'>
                {descriptions?.slice(0, 90)}{" "}
                <span className='font-semibold underline'>more...</span>
              </Link>
            ) : (
              <>
                {descriptions}
                <span className='font-semibold underline'>more...</span>
              </>
            )}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
