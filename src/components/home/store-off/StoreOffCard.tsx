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
  imageClassName?: string;
}

const StoreOffCard = ({
  src,
  title,
  description,
  price,
  _id,
  loading,
  off,
  imageClassName,
}: props) => {
  const router = useRouter();
  const discountedPrice = (price - (price * off) / 100).toFixed(2);

  return (
    <div className="relative mb-5 w-full mx-auto h-full min-w-full">
      {loading ? (
        <LoadingSkillate />
      ) : (
        <div className='border rounded-lg text-slate-600 capitalize w-full mx-auto'>
          <div className='md:p-5 p-3 flex relative flex-col items-center justify-center h-full'>
            <div className='overflow-hidden '>
              <span className='bg-slate-700 text-white px-2 py-1 absolute top-0 right-0'>
                {off}%
              </span>
              <Image
                loading='lazy'
                src={src}
                alt={`${title} image`}
                width={400}
                height={400}
                className={`object-cover w-auto mx-auto ${imageClassName}`}
              />
            </div>
            <h2 className='md:text-[16px] sm:text-[13px] text-[12px] md:mt-5'>
              {title.length > 20 ? <>{title.slice(0, 18)}...</> : title}
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
              <del className='opacity-65 md:text-[12px] italic font-thin text-[10px]'>
                {price}$
              </del>
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
    </div>
  );
};

export default StoreOffCard;
