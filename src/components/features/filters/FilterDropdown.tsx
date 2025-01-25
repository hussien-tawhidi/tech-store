"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

interface FilterDropdownProps {
  title: string; // The title of the filter, e.g., "Brand", "Ram", etc.
  options: string[]; // List of options to display in the dropdown
  selectedOptions: string[]; // Currently selected options
  setSelectedOptions: (options: string[]) => void; // Function to update selected options
}

const FilterDropdown = ({
  title,
  options,
  selectedOptions,
  setSelectedOptions,
}: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

   const toggleDropdown = () => setIsOpen(!isOpen);

   const handleOptionChange = (option: string) => {
     // Toggle the option in the selectedOptions array
     if (selectedOptions.includes(option)) {
       setSelectedOptions(selectedOptions.filter((o) => o !== option));
     } else {
       setSelectedOptions([...selectedOptions, option]);
     }
   };

  return (
    <div className='p-2 border-b rounded w-full'>
      <div
        className='flex justify-between items-center cursor-pointer'
        onClick={toggleDropdown}>
        <p className='font-semibold'>{title}</p>
        <span>
          {isOpen ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdOutlineKeyboardArrowDown />
          )}
        </span>
      </div>
      {isOpen && (
        <div className='mt-2'>
          {options.map((option) => (
            <div key={option} className='flex items-center gap-2 mb-2'>
              <Checkbox
                id={option}
                checked={selectedOptions.includes(option)}
                onCheckedChange={() => handleOptionChange(option)}
                className='cursor-pointer h-3 w-3'
              />
              <label htmlFor={option} className='cursor-pointer text-[12px]'>
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
