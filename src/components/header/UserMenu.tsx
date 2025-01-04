import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiHeart, CiLogout } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { Button } from "../ui/button";
import { IoEyeOutline } from "react-icons/io5";
import { userMenuData } from "../../../constant";

interface Props {}

const UserMenu = () => {
  const { data: session } = useSession();
  const [userMenu, setUserMenu] = useState(false);

  const handleToggleUserMenu = () => setUserMenu(!userMenu);

  return (
    <div className="relative">
      <div
        className='flex items-center justify-center relative animate__fadeInDown animate__animated cursor-pointer'
        onClick={handleToggleUserMenu}>
        <span className='w-[12px] text-slate-100 flex items-center justify-center rounded-full h-[12px] bg-slate-600/50  absolute text-[10px] -bottom-1 -right-1'>
          <FaAngleDown className='animate__fadeInDown animate__animated animate__infinite	' />
        </span>
        <Image
          width={40}
          height={40}
          src={"/avatar.jpg"}
          alt={session?.user?.name || "use name"}
          className='object-cover rounded-full overflow-hidden'
        />
      </div>
      {userMenu && (
        <div
          className='absolute z-[1000] h-[100vh] -right-5  -top-3.5 bottom-0 w-[100vw] text-slate-600  bg-slate-800/50 rounded-md shadow-md'
          style={{ zIndex: 1000 }}
          onClick={handleToggleUserMenu}>
          <div className='bg-slate-100 md:w-[30vw] sm:w-[50vw] w-[90vw] ml-auto md:p-10'>
            <div className='flex flex-col'>
              <Link
                href={`/user/${session?.user?._id}/profile`}
                className='flex justify-between items-center  gap-3 mb-5 py-2 border-b-[1px]'>
                <div className='flex items-center gap-3'>
                  <Image
                    width={50}
                    height={50}
                    src={"/avatar.jpg"}
                    alt={session?.user?.name || "use name"}
                    className='rounded object-cover overflow-hidden'
                  />
                  <div className='flex flex-col'>
                    <p className='h-6 font-semibold capitalize'>
                      {session?.user?.name}
                    </p>
                    <span className='text-sm font-thin'>
                      {session?.user?.email &&
                        (session?.user?.email?.length > 10 ? (
                          <div className=''>
                            {session?.user?.email?.slice(0, 10)} ...
                          </div>
                        ) : (
                          session?.user?.email
                        ))}
                    </span>
                  </div>
                </div>
                <Button variant={"link"}>
                  <IoEyeOutline />
                </Button>
              </Link>
              {userMenuData.map((menu) => (
                <Link href={""}
                  className='flex items-center text-sm gap-3 mb-4 hover:text-slate-900 transition-all hover:underline'
                  key={menu.id}>
                  {menu.icon && <menu.icon />} <span>{menu.title}</span>
                </Link>
              ))}

              <Button
                onClick={() => signOut()}
                className='flex items-center text-sm gap-3 mb-4 hover:text-slate-300 transition-all hover:underline'>
                <CiLogout className='text-xl' />
                SignOut
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
