"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  alt: string;
  link: string;
  titleShow?: boolean;
}

const MenuCard = ({ src, title, alt, link, titleShow }: Props) => {
  return (
    <Link
      href={link}
      className='flex group flex-col items-center justify-center'
      target='_blank'
      rel='noopener noreferrer'>
      <div className='border-blue-400 group-hover:shadow group-hover:border-blue-600 transition-all border-[3px] rounded-full overflow-hidden  md:w-28 sm:w-20 w-14 flex items-center justify-center md:h-28 sm:h-20 h-14 group-hover:bg-slate-100 bg-slate-50'>
        <div className='border-blue-200 transition-all group-hover:border-blue-300 border-[3px] rounded-full overflow-hidden  sm:w-24 w-16 flex items-center justify-center sm:h-24 h-16 '>
          <Image
            src={src}
            alt={`image of ${alt}`}
            width={100}
            height={100}
            className='object-cover w-auto sm:h-16 h-12'
          />
        </div>
      </div>
      {titleShow && (
        <span className=' mt-4 md:text-sm sm:text-[15px] text-[12px] text-slate-600 capitalize'>
          {title.length > 13 ? <>{title.slice(0, 13)}...</> : title}
        </span>
      )}
    </Link>
  );
};

export default MenuCard;
