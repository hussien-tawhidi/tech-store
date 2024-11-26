"use client";

import { usePathname } from "next/navigation";
import { headerData } from "../../../constant";
import Link from "next/link";

const HeaderBottom = () => {
  const pathname = usePathname();

  return (
    <div className='p-2'>
      <div className='flex justify-center items-center lg:gap-5 gap-3'>
        <Link
          href='/'
          className={`text-slate-600 dark:text-slate-300 capitalize text-sm hover:text-sky-950 transition-all hover:border-b hover:border-slate-500 dark:hover:text-slate-50 ${
            pathname === "/" &&
            "border-b-2 text-slate-700 dark:text-slate-500 border-slate-700 font-semibold"
          }`}>
          Home
        </Link>
        <Link
          href='/products'
          className={`text-slate-600 dark:text-slate-300 capitalize text-sm hover:text-sky-950 transition-all hover:border-b hover:border-slate-500 dark:hover:text-slate-50 ${
            pathname === "/products" &&
            "border-b-2 text-slate-700 dark:text-slate-500 border-slate-700 font-semibold"
          }`}>
          all
        </Link>
        {headerData.map((header) => {
          const linkPath = `/${header.title}/${header.id}`;
          const isActive = pathname === linkPath;

          return (
            <Link
              href={linkPath}
              key={header.id}
              className={`text-slate-600 dark:text-slate-300 capitalize text-sm hover:text-sky-950 transition-all hover:border-b hover:border-slate-500 dark:hover:text-slate-50 ${
                isActive &&
                "border-b-2 text-slate-700 dark:text-slate-500 border-slate-700 font-semibold"
              }`}>
              {header.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderBottom;
