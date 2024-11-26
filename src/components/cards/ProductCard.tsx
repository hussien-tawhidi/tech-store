"use client";

import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  imageSrc: string;
  onClick?: () => void;
  href: string;
}

const ProductCard = ({ title, href, imageSrc, onClick }: CardProps) => {
  return (
    <Link
      href={href}
      className='flex flex-col items-center justify-between p-4 bg-blue-50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer'
      onClick={onClick}>
      {/* Image */}
      <div className='w-full h-40 flex items-center justify-center'>
        <Image
          width={400}
          height={400}
          src={imageSrc}
          alt={title}
          className='h-24 w-24 object-contain'
        />
      </div>

      {/* Title */}
      <h3 className='mt-4 text-lg font-semibold text-gray-800'>{title}</h3>

      <div className='flex items-center justify-between w-full'>
        {/* Plus Icon */}
        <div className='mt-2 flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-full text-slate-500 font-bold'>
          +
        </div>
        <p className='relative'>
          12.89 <span className='absolute -top-2 text-sm'>$</span>
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
