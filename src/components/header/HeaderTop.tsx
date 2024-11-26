"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CiLocationOn, CiSearch, CiUser } from "react-icons/ci";
import { HiMiniLanguage, HiOutlineShoppingBag } from "react-icons/hi2";
import { useState } from "react";
import SearchConainer from "./SearchConainer";
import { ToggleTheme } from "../providers/ToggleTheme";

const HeaderTop = () => {
  const router = useRouter();
  const [searchField, setSearchField] = useState<boolean>(false);

  const handleShowSearchFiled = () => {
    setSearchField((prev) => !prev);
  };

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center md:gap-3 gap-2 md:text-2xl text-xl font-bold'>
        <Image
          onClick={() => router.push("/")}
          src={"/dark.png"}
          alt='Page logo'
          width={100}
          height={100}
          className='md:w-7 w-5 h-auto object-cover cursor-pointer'
        />
        <ToggleTheme/>
        <HiMiniLanguage />
        <CiLocationOn />
      </div>
      <div className='flex items-center md:text-2xl md:gap-3 gap-2 text-xl font-bold'>
        <CiSearch
          onClick={handleShowSearchFiled}
          className='cursor-pointer hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-100 text-slate-600 transition-all font-semibold'
        />

        {/* {searchField && ( */}
        <SearchConainer
          searchField={searchField}
          setSearchField={setSearchField}
        />
        {/* )} */}
        <CiUser className='cursor-pointer hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-100 text-slate-600 transition-all font-semibold' />
        <div className='relative'>
          <span className='absolute -top-2 -right-1 w-4 h-4 rounded-full bg-red-500 text-slate-200 flex items-center justify-center text-[8px] '>
            0
          </span>
          <HiOutlineShoppingBag className='cursor-pointer hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-100 text-slate-600 transition-all font-semibold' />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
