"use client";
import { usePathname } from "next/navigation";
import { adminSideBarMenu } from "../../../constant";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import SearchConainer from "../header/search/SearchConainer";
import { useState } from "react";
import { ToggleTheme } from "../providers/ToggleTheme";
import Logout from "../icons/Logout";
const SideBar = () => {
  const [searchField, setSearchField] = useState<boolean>(false);

  const handleSearchFeild = () => {
    setSearchField((prev) => !prev);
  };

  const pathame = usePathname();

  return (
    <div className='flex flex-col md:gap-10 border h-full md:py-10 md:px-10 w-full'>
      <div className='flex w-full shadow-md items-center gap-2 text-md py-3 px-10'>
        <Image
          src={"/avatar.jpg"}
          width={300}
          height={300}
          className='w-[100px] h-auto rounded-full object-cover'
          alt='admin avatar'
        />
        <p>Hussien Tawhidi</p>
      </div>
      <div className='flex gap-2 items-center'>
        <Button className='w-full' variant='outline'>
          <ToggleTheme />
        </Button>
        <Button variant='outline' className='w-full'>
          <Logout />
        </Button>
      </div>
      <div
        className='flex items-center gap-2 cursor-pointer'
        onClick={handleSearchFeild}>
        <CiSearch className='text-2xl font-semibold hover:text-gray-950 text-gray-600 cursor-pointer dark:text-gray-300 dark:hover:text-gray-50 transition-all' />
        <span>Search</span>
      </div>
      <SearchConainer
        searchField={searchField}
        setSearchField={setSearchField}
      />
      {adminSideBarMenu.map((menu) => (
        <Link
          href={menu.linkTo}
          key={menu.id}
          className={`flex items-center gap-3 ${
            pathame === menu.linkTo && "text-red-500 border-b-2 border-red-500"
          }`}>
          {menu.Icon ? <menu.Icon /> : null} {menu.title}
        </Link>
      ))}
      <div className={`flex items-center gap-3`}></div>
    </div>
  );
};

export default SideBar;
