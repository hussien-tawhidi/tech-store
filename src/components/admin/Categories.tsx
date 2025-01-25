"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const Categories = ({
  setCategory,
  category,
  categoriesData,
}: {
  setCategory: (value: string) => void;
  category?: string;
  categoriesData: string[];
}) => {
  return (
    <div className=''>
      <Select value={category} onValueChange={(value) => setCategory(value)}>
        <SelectTrigger className='border-none shadow-lg  py-5 mt-2'>
          <SelectValue placeholder='Select a category' />
        </SelectTrigger>
        <SelectContent className='bg-slate-50'>
          <SelectGroup>
            <SelectLabel>Category</SelectLabel>
            {categoriesData.map((category) => (
              <SelectItem value={category} key={category} className='w-full'>
                <span className='transition-all hover:text-black cursor-pointer min-w-full p-1'>
                  {category}
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Categories;
