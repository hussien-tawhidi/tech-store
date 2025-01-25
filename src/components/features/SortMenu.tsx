"use client";

import { CiFilter } from "react-icons/ci";
import Filter from "./filters/Filter";
import { GoDatabase } from "react-icons/go";
import { sortMenuProps } from "../../../types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const sortOptions = [
  { label: "Most Sells", value: "mostSells" },
  { label: "Most Offers", value: "mostOffers" },
  { label: "High Price", value: "highPrice" },
  { label: "Low Price", value: "lowPrice" },
  { label: "Newest", value: "newest" },
];

const SortMenu = ({
  sortType,
  setSortType,
  allNetworkTypes,
  maxPrice,
  minPrice,
  onlyAvailable,
  rams,
  roms,
  selectedBrands,
  selectedNetWork,
  setMaxPrice,
  setMinPrice,
  setOnlyAvailable,
  setSelectedBrands,
  selectedRam,
  setSelectedNetWork,
  allBrands,
  setSelectedRam,
  selectRoms,
  setSelectRoms,
  products,
  selectedColor,
  setSelectedColor,
  colors,
}: sortMenuProps) => {
  return (
    <div className='flex flex-nowrap justify-between overflow-x-auto items-center md:gap-5 gap-3  md:text-[14px] text-[12px] bg-slate-600 p-2 rounded w-full text-slate-200'>
      <div className='flex custom-scrollbar items-center justify-center md:gap-5 gap-3'>
        <Dialog>
          <DialogTrigger asChild>
            <p className='flex md:hidden items-center gap-1 cursor-pointer whitespace-nowrap'>
              <CiFilter /> Filter
            </p>
          </DialogTrigger>
          <DialogContent className='sm:max-w-md h-full bg-slate-50'>
            <DialogTitle></DialogTitle>
            <Filter
              allBrands={allBrands}
              allNetworkTypes={allNetworkTypes}
              maxPrice={maxPrice}
              minPrice={minPrice}
              onlyAvailable={onlyAvailable}
              rams={rams}
              roms={roms}
              selectRoms={selectRoms}
              selectedBrands={selectedBrands}
              selectedNetWork={selectedNetWork}
              selectedRam={selectedRam}
              setMaxPrice={setMaxPrice}
              setMinPrice={setMinPrice}
              setOnlyAvailable={setOnlyAvailable}
              setSelectRoms={setSelectRoms}
              setSelectedBrands={setSelectedBrands}
              setSelectedNetWork={setSelectedNetWork}
              setSelectedRam={setSelectedRam}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              colors={colors}
            />
          </DialogContent>
        </Dialog>
        <p className='flex items-center gap-1 cursor-pointer whitespace-nowrap'>
          <GoDatabase /> SortBY:
        </p>
        <div className='flex items-center custom-scrollbar md:gap-5 gap-2  whitespace-nowrap'>
          {sortOptions.map((option) => (
            <p
              key={option.value}
              onClick={() => setSortType(option.value)}
              className='relative px-2 flex items-center justify-center'>
              <span
                className={
                  sortType === option.value
                    ? "bg-slate-700 h-[70%] w-[1px] absolute bottom-auto top-auto right-0"
                    : " h-[70%] w-[1px] bg-slate-300 absolute bottom-auto top-auto right-0"
                }></span>
              <span
                className={
                  sortType === option.value
                    ? "text-slate-50 font-normal cursor-pointer shadow-none"
                    : "text-slate-200 font-light cursor-pointer shadow-none hover:text-slate-50 transition-all"
                }>
                {option.label}
              </span>
            </p>
          ))}
        </div>
      </div>
      <p className='py-1 px-3 rounded border-slate-400 shadow whitespace-nowrap'>
        {products} Products
      </p>
    </div>
  );
};

export default SortMenu;
