"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsCartPlus } from "react-icons/bs";
import { FaStar, FaRegStar } from "react-icons/fa";
import { HeroProductProps } from "../../../../types";

interface ProductCardProps {
  product: HeroProductProps;
}

const SliderCard = ({ product }: ProductCardProps) => {
  const router = useRouter();
  return (
    <section className='relative w-[100vw] h-full animate__fadeInRightBig  animate__animated '>
      {product.banner && (
        <Image
          src={
            product?.banner ||
            "/assets/AirPods/airpods_3rd_gen__dhy5bknhvtqq_large.jpg"
          }
          width={1000}
          height={1000}
          alt={product?.name}
          className='object-cover w-[100vw] md:h-[100vh] h-auto'
        />
      )}
      <div className='md:absolute top-0 md:p-10 p-5'>
        <h1 className='text-xl font-extrabold text-slate-500 dark:text-slate-300 sm:text-5xl animate__animated animate__fadeInDown '>
          {product?.name?.length > 10 ? (
            <>
              {product?.name?.split(" ")[0]} {/* First word */}
              <strong className='block font-extrabold text-slate-700'>
                {product?.name?.split(" ")?.slice(1)?.join(" ")}{" "}
                {/* Remaining words */}
              </strong>
            </>
          ) : (
            product?.name
          )}
        </h1>

        <p className='md:mt-4 mt-2 max-w-lg md:w-[50%] w-full text-slate-600 dark:text-slate-300 sm:text-sm text-[10px]'>
          {product?.description?.length < 70 ? (
            product?.description
          ) : (
            <>{product?.description?.slice(0, 100)} ...</>
          )}
        </p>

        <div className='md:mt-8 mt-3 flex flex-wrap gap-4 text-center'>
          <Button
            className='bg-slate-600 text-slate-100 capitalize'
            variant={"outline"}
            onClick={() =>
              router.push(
                `${process.env.NEXT_PUBLIC_BASE_URL}/product_detials/${product?._id}`
              )
            }>
            See & add
            <BsCartPlus />
          </Button>
        </div>
      </div>
      <div className=''>
        <div className='sm:flex items-end hidden'>
          <div className='p-4'>
            {product?.reviews?.map((review, index) => (
              <div key={index} className='mb-2'>
                <p className='text-sm text-slate-600 dark:text-slate-200'>
                  {review?.reviewer}
                </p>
                <p className='text-xs text-slate-600 dark:text-slate-400'>
                  {review.comment}
                </p>
                <p className='text-xs text-slate-600 flex items-center'>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                      {i < review?.rating ? <FaStar /> : <FaRegStar />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderCard;
