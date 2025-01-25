"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

interface Props {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
}

const PriceFilter = ({
  minPrice,
  maxPrice,
  setMaxPrice,
  setMinPrice,
}: Props) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className='p-2 border-b rounded'>
      <div
        className='flex justify-between items-center cursor-pointer'
        onClick={toggleOpen}>
        <p className='font-semibold'>Price</p>
        <span>
          {open ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
        </span>
      </div>
      {open && (
        <>
          <div className='flex flex-col w-full mt-2 gap-3'>
            <input
              type='range'
              min='0'
              max='1000'
              value={minPrice}
              className='w-full accent-slate-600'
              onChange={(e) => setMinPrice(Number(e.target.value))}
            />
            <input
              type='range'
              min='0'
              max='10000'
              value={maxPrice}
              className='w-full accent-slate-600'
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>
          <div className='flex items-center w-full justify-between mt-2'>
            {/* Minimum Price */}
            <div className='flex flex-col'>
              <label htmlFor='minPrice' className='text-sm font-medium'>
                Minimum
              </label>
              <Input
                id='minPrice'
                type='number'
                min='0'
                max={maxPrice} // Ensure it doesn't exceed maxPrice
                value={minPrice}
                onChange={(e) => {
                  const value = Math.min(Number(e.target.value), maxPrice - 1); // Prevent overlap
                  setMinPrice(value);
                }}
                className='w-full'
              />
            </div>
            {/* Maximum Price */}
            <div className='flex flex-col'>
              <label htmlFor='maxPrice' className='text-sm font-medium'>
                Maximum
              </label>
              <Input
                id='maxPrice'
                type='number'
                min={minPrice + 1} // Ensure it doesn't go below minPrice
                max='10000'
                value={maxPrice}
                onChange={(e) => {
                  const value = Math.max(Number(e.target.value), minPrice + 1); // Prevent overlap
                  setMaxPrice(value);
                }}
                className='w-full'
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PriceFilter;
