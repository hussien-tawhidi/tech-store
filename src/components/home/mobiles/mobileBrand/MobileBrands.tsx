"use client";

import Image from "next/image";
import { mobileBrands } from "../../../../../constant";
import Link from "next/link";

const MobileBrands = () => {
  return (
    <div className='my-10 text-center'>
      <h3 className='md:text-5xl text-3xl mb-2 font-bold font-sans'>
        Best smart phones brands
      </h3>
      <div className='grid lg:grid-cols-5 md:gap-3 text-slate-600 grid-cols-2 gap-2 md:grid-cols-3'>
        {mobileBrands.map((brand) => (
          <Link
            href={brand.link}
            className='relative overflow-hidden rounded group '
            key={brand.id}>
            <div className='absolute  transition-all top-0 left-0 bg-slate-600/10 group-hover:bg-black/0 w-full h-full'></div>
            <Image
              src={brand.image}
              alt='mobile brand'
              width={1000}
              height={1000}
              className='object-cover transition-all duration-300 group-hover:scale-105'
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileBrands;
