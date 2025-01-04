"use client";

import { useState } from "react";
import { mainMenu } from "../../../../constant";
import Link from "next/link";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Image from "next/image";

interface Props {
  // setMenu: (value: boolean) => void;
  menu: boolean;
  hideTheMenu: () => void;
}

const Menu = ({ hideTheMenu, menu }: Props) => {
  const [hoveredMenuId, setHoveredMenuId] = useState<number | null>(null);

  return (
    <div
      onClick={hideTheMenu}
      // className='bg-black/80 fixed top-0 left-0 w-[100vw] h-[100vh] text-white z-50'
      className={
        menu
          ? "fixed transition-all duration-300 opacity-100 top-0 left-0  backdrop-blur-sm bg-slate-900/50 pointer-events-auto w-[100vw] z-50"
          : "transition-all duration-300 opacity-0 pointer-events-none absolute  overflow-hidden"
      }>
      <ul
        onClick={(e) => e.stopPropagation()}
        className='flex lg:w-[40vw] relative bg-white sm:w-[70vw] pt-5 w-full [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-gray-100
           [&::-webkit-scrollbar-thumb]:bg-gray-300
           dark:[&::-webkit-scrollbar-track]:bg-neutral-700
           dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 flex-col overflow-y-auto overflow-x-hidden h-[100vh]'>
        <span
          className='absolute top-3 z-50 right-3 text-2xl cursor-pointer text-slate-600'
          onClick={hideTheMenu}>
          &times;
        </span>
        <li
          className={
            menu
              ? "flex items-center gap-2 translate-x-0 text-slate-600 py-3 transition-all duration-700 delay-200"
              : "opacity-0 translate-x-"
          }>
          <Link
            href='/'
            className='flex items-center gap-1 sm:text-xl text-[12px] font-semibold text-slate-600'>
            <Image
              src={"/dark.png"}
              alt='logo'
              width={100}
              height={100}
              className='object-cover animate__animated animate__fadeInUp w-8 ml-5'
            />{" "}
            <span>Home</span>
          </Link>
        </li>
        {mainMenu.map((menu) => (
          <li
            key={menu.id}
            className='flex flex-col pl-5 animate__animated animate__fadeInUp capitalize border-b justify-center pt-3  text-slate-600 transition-all bg-white'
            onMouseEnter={() => setHoveredMenuId(menu.id)}
            onMouseLeave={() => setHoveredMenuId(null)}>
            <Link
              href={"/"}
              className={
                menu
                  ? "transition-all flex gap-2 items-center p-1  duration-700 delay-200 py-3"
                  : "opacity-0 translate-x-[30vw] animate__animated animate__fadeInUp"
              }>
              {menu.icon && <menu.icon className='md:text-2xl text-[14px]' />}
              <span className='sm:text-sm text-[12px]'>{menu.title}</span>
              {hoveredMenuId === menu.id ? (
                <MdArrowDropUp />
              ) : (
                <MdArrowDropDown />
              )}
            </Link>
            {/* {hoveredMenuId === menu.id && ( */}
            <div
              className={
                hoveredMenuId === menu.id
                  ? "opacity-100 pl-10 text-sm flex sm:pt-5 pt-3 flex-col md:gap-4 gap-1 translate-x-0 transition-all duration-300 pb-3 relative"
                  : "opacity-0 translate-x-96 absolute gap-0 transition-all duration-300"
              }>
              {menu.subMenu.map((subMenu) => (
                <Link
                  href={"/"}
                  key={subMenu.id}
                  className='transition-all sm:text-sm text-[10px] hover:underline text-left'>
                  {subMenu.title}
                </Link>
              ))}
            </div>
            {/* )} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
