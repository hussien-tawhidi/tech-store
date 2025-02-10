"use client";

import FileInput from "@/components/FileInput";
import { ChangeEvent } from "react";
import { LuHardDriveUpload } from "react-icons/lu";

interface props {
  handleImageChange: (files: File[]) => void;
  handleBannerChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BannerUpload = ({ handleBannerChange, handleImageChange }: props) => {
  return (
    <div className='flex items-center justify-evenly gap-3 mt-6'>
      <div>
        <FileInput onChange={handleImageChange} />
      </div>
      <div>
        <label
          htmlFor='banner'
          className='mb-2 text-slate-200 transition-all hover:bg-slate-50 hover:text-slate-700 cursor-pointer text-sm gap-5 p-5 bg-slate-600 rounded-md  flex items-center justify-center relative'>
          <input
            type='file'
            id='banner'
            className='hidden'
            onChange={handleBannerChange}
          />
          <p className='flex items-center gap-3'>
            <LuHardDriveUpload className='text-xl' /> Banner of product
          </p>
        </label>
      </div>
    </div>
  );
};

export default BannerUpload;
