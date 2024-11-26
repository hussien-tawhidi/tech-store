"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsArrowRight, BsCartPlus } from "react-icons/bs";
import { FaStar, FaRegStar } from "react-icons/fa";

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

interface Review {
  reviewer: string;
  comment: string;
  rating: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number | 0;
  discountPercentage: number;
  category: string;
  brand: string;
  stock: number;
  availabilityStatus: string;
  tags: string[];
  thumbnail: string;
  images: string[];
  dimensions: Dimensions;
  weight: number;
  minimumOrderQuantity: number;
  rating: number;
  returnPolicy: string;
  shippingInformation: string;
  warrantyInformation: string;
  sku: string;
  meta: Meta;
  reviews: Review[];
}

interface ProductCardProps {
  product: Product;
}

const HeroCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  return (
    <section className='relative w-[100vw] h-full '>
      <Image
        src={
          product?.thumbnail ||
          "/assets/AirPods/airpods_3rd_gen__dhy5bknhvtqq_large.jpg"
        }
        width={1000}
        height={1000}
        alt={product?.title}
        className='object-cover absolute left-0 right-0 mx-auto w-auto h-[80vh]'
      />
      <div className='relative mx-auto max-w-screen-xl px-4 sm:py-32 py-10 sm:px-6 lg:flex h-screen lg:justify-between items-end lg:px-8'>
        <div className='max-w-xl ltr:sm:text-left rtl:sm:text-right bg-white/50'>
          <h1 className='text-3xl font-extrabold text-slate-500 dark:text-slate-300 sm:text-5xl'>
            {product.title.split(" ")[0]} {/* First word */}
            <strong className='block font-extrabold text-slate-700'>
              {product.title.split(" ").slice(1).join(" ")}{" "}
              {/* Remaining words */}
            </strong>
          </h1>

          <p className='mt-4 max-w-lg text-slate-600 dark:text-slate-300 sm:text-xl'>
            {product.description.length < 70 ? (
              product.description
            ) : (
              <>{product.description.slice(0, 100)} ...</>
            )}
          </p>

          <div className='mt-8 flex flex-wrap gap-4 text-center'>
            <Button
              variant={"outline"}
              className='bg-slate-600 text-slate-100 flex gap-3'>
              Buy <BsCartPlus />
            </Button>

            <Button
              className='bg-transparent text-slate-600'
              variant={"outline"}
              onClick={() => router.push(`/product_detials/${product.id}`)}>
              Read More <BsArrowRight />
            </Button>
          </div>
        </div>

        <div className='sm:flex items-end hidden'>
          <div className='p-4'>
            <h3 className='text-lg font-medium text-slate-600 mb-2'>Reviews</h3>
            {product.reviews.map((review, index) => (
              <div key={index} className='mb-2'>
                <p className='text-sm text-slate-600 dark:text-slate-200'>
                  {review.reviewer}
                </p>
                <p className='text-xs text-slate-600 dark:text-slate-400'>
                  {review.comment}
                </p>
                <p className='text-xs text-slate-600 flex items-center'>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                      {i < review.rating ? <FaStar /> : <FaRegStar />}
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

export default HeroCard;
