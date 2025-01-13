"use client";

import Image from "next/image";

interface Props {
  title: string;
  des: string;
  src: string;
  width?: number;
  height?: number;
}

const OverlayForBanner = ({ title, des, src, width, height }: Props) => {
  return (
    <div className='group overflow-hidden relative cursor-pointer'>
      <div className='absolute text-left  text-white z-20 transition-all backdrop-blur-[2px] top-0 left-0 bg-black/0 opacity-0 group-hover:opacity-100 group-hover:bg-black/50 w-full h-full flex items-center justify-center'>
        <div className='w-[90%] p-5'>
          <h6 className='font-bold text-xl opacity-0 group-hover:opacity-100 translate-x-32 group-hover:translate-x-0 transition-all duration-500'>
            {title}
          </h6>
          <p className='text-sm font-light opacity-0 group-hover:opacity-100 translate-x-32 group-hover:translate-x-0 transition-all duration-500 delay-200'>
            {des}
          </p>
        </div>
      </div>
      <Image
        src={src}
        alt={`Image ${title}`}
        width={width || 2000}
        height={height || 1000}
        className='object-cover group-hover:scale-125 duration-700 cursor-pointer rounded transition-all'
      />
    </div>
  );
};

export default OverlayForBanner;
