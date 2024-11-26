import Create from "@/components/admin/products/Create";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";

const page = () => {
  return (
    <div className=''>
      <div className='flex items-center m-5 border-b pb-3'>
        <Button variant='outline'>
          <Link href={"/dashboard/products"} className='flex items-center gap-3'>
            <IoChevronBackOutline /> Products
          </Link>
        </Button>
      </div>
      <div className='w-[70vw] mt-10 mx-auto'>
        <Create />
      </div>
    </div>
  );
};

export default page;
