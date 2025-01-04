"use client";
import Link from "next/link";
import { userMenuData } from "../../../../constant";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FiLogOut } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function UserProfileMenu() {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div className='min-h-screen shadow-lg'>
      <div className='flex flex-col justify-between h-full rounded-r-3xl overflow-hidden'>
        <ul>
          {userMenuData.map((userMenu) => {
            const isActive =
              pathname === `/user/${session?.user?._id}/${userMenu.link}`;
            return (
              <li key={userMenu?.id}>
                <Link
                  href={`/user/${session?.user?._id}/${userMenu?.link}`}
                  className={` flex flex-row items-center h-12 transform transition-transform ease-in duration-200 
                ${
                  isActive
                    ? "translate-x-2 text-slate-600 font-semibold border-l-4 border-slate-600 bg-slate-100" // Active styles
                    : "hover:translate-x-2 text-slate-500 hover:text-slate-800" // Non-active styles
                }`}>
                  <span
                    className={`inline-flex items-center justify-center h-12 w-12 text-lg 
                  ${isActive ? "text-slate-600" : "text-slate-400"}`}>
                    {userMenu.icon && <userMenu.icon />}
                  </span>
                  <span className='text-sm font-medium'>{userMenu.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Button
          onClick={() => signOut()}
          className='mx-3 flex items-center text-sm gap-3 mb-4 hover:text-slate-900 text-slate-600 transition-all hover:underline'>
          <FiLogOut className='text-xl' />
          SignOut
        </Button>
      </div>
    </div>
  );
}
