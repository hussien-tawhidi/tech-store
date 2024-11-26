"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
  title: string;
  category: string;
  description: string;
  className?: string;
}

const TopCateCard = ({
  description,
  image,
  title,
  category,
  className,
}: Props) => {
  return (
    <Link
      href={`/products/${category}`}
      className='relative overflow-hidden cursor-pointer'>
      <Image
        src={image}
        alt={`image for ${title}`}
        width={500}
        height={500}
        className={`w-full object-cover grayscale-0 hover:grayscale hover:scale-110 duration-300 ${className}`}
      />
      <div className='absolute top-0 left-0'>
        <div className='flex flex-col bg-slate-800/50 p-3 text-white text-left relative overflow-hidden'>
          <span className='sm:text-sm text-[12px]'>
            {title}
            <p className='sm:text-sm text-[12px]'>{description}</p>
            <p className='font-bold text-xl'>Go to category ...</p>
          </span>
          <span className='w-[50%] h-1 bg-white absolute bottom-2 left-3'></span>
        </div>
      </div>
    </Link>
  );
};

export default TopCateCard;
