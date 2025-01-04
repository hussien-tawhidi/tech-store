"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CiLocationOn, CiSearch, CiUser } from "react-icons/ci";
import { HiMiniLanguage, HiOutlineShoppingBag } from "react-icons/hi2";
import { useState } from "react";
import SearchConainer from "./SearchConainer";
import { Dialog, DialogTrigger } from "../ui/dialog";
import Register from "../auth/Register";
import Login from "../auth/Login";
import { useSession } from "next-auth/react";
import UserMenu from "./UserMenu";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const HeaderTop = () => {
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const { data: session } = useSession();
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
          className='md:w-7 w-5 h-auto object-cover cursor-pointer animate__animated animate__backInDown'
        />
        {/* <ToggleTheme /> */}
        <HiMiniLanguage className='animate__animated animate__backInDown' />
        <CiLocationOn className='animate__animated animate__backInDown' />
      </div>
      <div className='flex items-center md:text-2xl md:gap-3 gap-2 text-xl font-bold'>
        <CiSearch
          onClick={handleShowSearchFiled}
          className='cursor-pointer hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-100 text-slate-600 transition-all font-semibold animate__animated animate__backInDown'
        />

        {/* {searchField && ( */}
        <SearchConainer
          searchField={searchField}
          setSearchField={setSearchField}
        />

        <Link
          href={`/user/cart/${session?.user?._id}=${session?.user.name}`}
          className='relative animate__animated animate__backInDown'>
          <span className='absolute -top-2 -right-1 w-4 h-4 rounded-full bg-red-500 text-slate-200 flex items-center justify-center text-[8px] '>
            {cartItems.length}
          </span>
          <HiOutlineShoppingBag className='cursor-pointer hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-100 text-slate-600 transition-all font-semibold' />
        </Link>
        {session ? (
          <UserMenu />
        ) : (
          <div className='flex items-center justify-center gap-3 text-slate-600'>
            <Link href={"/user-register"} className='flex items-center'>
              {/* <CiUser className='cursor-pointer hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-100 text-slate-600 transition-all font-semibold animate__animated animate__backInDown' /> */}
              <span className='text-[12px] cursor-pointer hover:text-slate-900 transition-all'>
                SignUp
              </span>
            </Link>

            <Link
              href={"/user-login"}
              className='text-sm cursor-pointer hover:text-slate-900 transition-all'>
              SignIn
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderTop;
