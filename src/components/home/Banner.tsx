"use client";

import { useState } from "react";
import { GrEmoji } from "react-icons/gr";
import { Button } from "../ui/button";
import { IoMdClose } from "react-icons/io";

const Banner = () => {
  const [showBanners, hideBanners] = useState(true);

  const handleBanner = () => {
    hideBanners(false);
  };

  return (
    <div
      className={
        showBanners
          ? "py-2 w-full animate__animated animate__backInDown bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 transition-all delay-300 bg-slate-800 capitalize font-mono text-white flex items-center justify-center"
          : "opacity-0 hidden pointer-events-none py-0"
      }>
      <p className='flex items-center gap-2 md:text-[18px] text-[12px]'>
        <GrEmoji className='animate-bounce' /> get bonus form every purchase
        <GrEmoji className='animate-bounce' />
        <Button variant={"link"} onClick={handleBanner}>
          <IoMdClose className='text-red-500' />
        </Button>
      </p>
    </div>
  );
};

export default Banner;
