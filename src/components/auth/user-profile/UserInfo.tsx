"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { TbFilePencil } from "react-icons/tb";
const UserInfo = () => {
  const { data: session } = useSession();
  return (
    <div className='relative'>
      <div className='text-slate-600'>
        <Image
          src={"/avatar.jpg"}
          width={400}
          height={400}
          alt=''
          className='object-cover w-[100px] h-[100px] rounded-full'
        />
        <p className='font-semibold text-md my-3 mx-3 flex flex-col text-left'>
          <span>{session?.user?.name}</span>
          <span className='sm:text-sm text-[10px]'>{session?.user?.email}</span>
        </p>
      </div>
      <Button className='mx-3 flex items-center text-sm gap-3 mb-4 hover:text-slate-900 text-slate-600 transition-all hover:underline'>
        <TbFilePencil className='text-xl' />
        Edit profile
      </Button>
    </div>
  );
};

export default UserInfo;
