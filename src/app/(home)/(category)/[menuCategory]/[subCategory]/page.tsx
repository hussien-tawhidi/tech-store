
import Breadcrumbs from "@/components/product-destails/Breadcrumbs";
import React from "react";


const page = async ({ params }: any) => {
  const param = await params;
  const { subCategory } = param;
  return (
    <div className='mt-20'>
      <Breadcrumbs name={subCategory} />
      <div className='flex flex-nowrap custom-scrollbar whitespace-nowrap overflow-x-auto'>
        <span className='border p-4'>menu</span>
        <span className='border p-4'>menu</span>
        <span className='border p-4'>menu</span>
        <span className='border p-4'>menu</span>
        <span className='border p-4'>menu</span>
        <span className='border p-4'>menu</span>
        <span className='border p-4'>menu</span>
      </div>
    </div>
  );
};

export default page;
