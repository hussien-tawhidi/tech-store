"use client";

import { IconType } from "react-icons/lib";
interface Props {
  title: string;
  icon: IconType;
  
}

const BottomMenu = ({ title, icon: Icon }: Props) => {
  return (
    <span
      className='flex md:text-[16px] relative sm:text-[14px] group text-[10px] items-center  md:gap-3 gap-2 animate__animated animate__fadeInUp'>
      {Icon && <Icon className='md:text-xl sm:text-[14px] text-[10px]' />}{" "}
      <span className='relative'>{title}</span>
      <span className='absolute -bottom-1 left-0 right-0 w-full scale-0 group-hover:scale-100 h-[1px] bg-slate-500 transition-all duration-200'></span>
    </span>
  );
};

export default BottomMenu;
