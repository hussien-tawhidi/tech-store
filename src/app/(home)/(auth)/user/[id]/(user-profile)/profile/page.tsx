"use client";

import UserInfo from "@/components/auth/user-profile/UserInfo";
import { useSession } from "next-auth/react";
import { userMenuData } from "../../../../../../../../constant";
import Link from "next/link";

const page = () => {
  const { data: session } = useSession();
  return (
    <div className='relative'>
      <UserInfo />
      <div className='grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2  gap-3 md:text-3xl text-xl text-slate-600 mt-10'>
        {userMenuData.map((menu) => (
          <Link
            key={menu.id}
            href={`/user/${session?.user?._id}/${menu.link}`}
            className='shadow-md transition-all hover:bg-slate-200 hover:text-slate-900 bg-slate-100 flex items-center justify-center text-center flex-col py-4 rounded-md'>
            {menu.icon && <menu.icon />}{" "}
            <span className='sm:text-sm text-[12px]'>{menu.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
