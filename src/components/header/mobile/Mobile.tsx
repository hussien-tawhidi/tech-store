"use client";

import { usePathname } from "next/navigation";
import { IoMdMenu } from "react-icons/io";
import Image from "next/image";
import { CiSearch, CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useState } from "react";
import SearchConainer from "../SearchConainer";
import { headerData } from "../../../../constant";
import Link from "next/link";

const Mobile = () => {
  const [searchField, setSearchField] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const pathName = usePathname();

  const handleSearchContainerToggle = (e: any) => {
    setSearchField((prev) => !prev);
  };

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-3 text-xl'>
        <Image
          src='/dark.png'
          alt='logo'
          width={100}
          height={100}
          className='object-cover w-6 h-auto'
        />
        <SearchConainer
          searchField={searchField}
          setSearchField={setSearchField}
        />
        <HiOutlineShoppingBag className='cursor-pointer hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-100 text-slate-600 transition-all font-semibold' />
        <CiSearch
          onClick={handleSearchContainerToggle}
          className='cursor-pointer hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-100 text-slate-600 transition-all font-semibold'
        />
      </div>
      <div className='flex items-center gap-3 font-semibold text-xl'>
        <CiUser className='cursor-pointer hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-100 text-slate-600 transition-all font-semibold' />
        <IoMdMenu
          className='cursor-pointer hover:text-slate-950 text-2xl dark:text-slate-300 dark:hover:text-slate-100 text-slate-600 transition-all font-semibold'
          onClick={handleMenu}
        />
      </div>
      {menu && (
        <div
          className={
            menu
              ? "absolute z-10 top-0 transition-all duration-100 right-0 left-0 h-screen pointer-events-auto bg-black/50"
              : "-left-96 opacity-0 transition-all duration-100 pointer-events-none"
          }
          onClick={handleMenu}>
          <div className='h-screen absolute top-0 w-[70vw] left-0 bg-slate-600'>
            <ul
              className={
                menu
                  ? "flex text-slate-300 transition-all duration-700 delay-100 flex-col pt-5 pl-7 gap-3 capitalize"
                  : "opacity-0 transition-all translate-x-[30vw]"
              }>
              {headerData.map((header) => (
                <li key={header.id} onClick={handleMenu}>
                  <Link
                    href={header.linkTo}
                    onClick={handleMenu}
                    className={`${
                      pathName === header.linkTo &&
                      "border-b border-slate-300 text-slate-300 transition-all delay-700"
                    } ${
                      !menu &&
                      "translate-x-56 transition-all delay-500 opacity-0"
                    }`}>
                    {header.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mobile;
