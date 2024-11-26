"use client"

import Image from "next/image";
import { Button } from "../ui/button";
import { RiFacebookLine } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

interface props{
  image: string
  title: string
  off:number
}

const ProductBanner = ({image,title,off}:props) => {
  return (
    <div className='relative text-slate-600 w-full py-10 px-6 md:px-16 lg:flex lg:items-center lg:justify-between'>
      {/* Left Section */}
      <div className='max-w-lg'>
        <Button className='bg-slate-700 text-slate-100'>{title}</Button>
        <h1 className='text-3xl md:text-5xl font-bold mb-4'>NEW ARRIVAL</h1>
        {/* <p className='text-lg mb-6'>Special Offer</p> */}
        <p className='text-5xl md:text-7xl font-bold'>
          SALE <span className='text-slate-800'>{off}%</span> OFF
        </p>
      </div>

      {/* Right Section (Image) */}
      <div className='mt-8 lg:mt-0'>
        <Image
          width={500}
          height={500}
          src={image} // Replace with your image
          alt='Promo'
          className='w-full max-w-md mx-auto lg:max-w-sm rounded-lg'
        />
      </div>

      {/* Bottom Social Links */}
      <div className='absolute bottom-4 left-16 flex gap-3 justify-center text-sm'>
        <RiFacebookLine />
        <CiInstagram />
        <FaXTwitter />
      </div>
    </div>
  );
};

export default ProductBanner;
