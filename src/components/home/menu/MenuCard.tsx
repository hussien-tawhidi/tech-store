"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  alt: string;
  link: string;
}

const MenuCard = ({ src, title, alt, link }: Props) => {
  return (
    <Link href={link} className='flex flex-col items-center justify-center'>
      <div className='border-blue-400 border-[3px] rounded-full overflow-hidden  sm:w-28 w-20 flex items-center justify-center sm:h-28 h-20 '>
        <div className='border-blue-200 border-[3px] rounded-full overflow-hidden  sm:w-24 w-16 flex items-center justify-center sm:h-24 h-16 '>
          <Image
            src={src}
            alt={alt}
            width={100}
            height={100}
            className='object-cover w-auto sm:h-16 h-12'
          />
        </div>
      </div>
      <span className=' mt-4 md:text-sm sm:text-[15px] text-[12px] text-slate-600 capitalize'>
        {title.length > 13 ? <>{title.slice(0, 13)}...</> : title}
      </span>
    </Link>
  );
};

export default MenuCard;
