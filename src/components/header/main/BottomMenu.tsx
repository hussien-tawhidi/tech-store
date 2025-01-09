"use client"

import Link from "next/link";
interface Props {
  title: string;
  icon: any;
}

const BottomMenu = ({ title, icon: Icon }: Props) => {
  return (
    <Link
      href='/'
      className='flex md:text-[16px] sm:text-[14px] text-[10px] items-center  md:gap-3 gap-2 animate__animated animate__fadeInUp'>
      {Icon && <Icon className='md:text-xl sm:text-[14px] text-[10px]' />}{" "}
      <span className=''>{title}</span>
    </Link>
  );
};

export default BottomMenu;
