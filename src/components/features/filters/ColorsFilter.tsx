"use client";

import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
interface Props {
  colors: [string, string][]; // Array of [name, hex] pairs
  selectedColor: string;
  setSelectedColor: (selectedColor: string) => void;
}

const ColorsFilter = ({ selectedColor, setSelectedColor, colors }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='my-4 relative'>
      <div
        className='ml-2 p-2 border rounded cursor-pointer relative'
        onClick={() => setIsOpen(!isOpen)}>
        <span>
          {selectedColor || "All Colors"}{" "}
          {selectedColor &&
            colors.find(([name]) => name === selectedColor)?.[1] && (
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  backgroundColor: colors.find(
                    ([name]) => name === selectedColor
                  )?.[1],
                  borderRadius: "50%",
                  marginLeft: "5px",
                }}></span>
            )}
        </span>
        <span className='absolute right-2'>
          {isOpen ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdOutlineKeyboardArrowDown />
          )}
        </span>
      </div>
      {isOpen && (
        <SimpleBar
          autoHide
          style={{ maxHeight: 300 }}
          className='absolute z-10 bg-white border rounded shadow-md mt-1'>
          <li
            className='p-2 cursor-pointer hover:bg-gray-100'
            onClick={() => {
              setSelectedColor("");
              setIsOpen(false);
            }}>
            All Colors
          </li>
          {colors.map(([name, hex]) => (
            <li
              key={name + hex}
              className='p-2 overflow-hidden capitalize cursor-pointer flex items-center md:gap-3 gap-1.5 hover:bg-gray-100'
              onClick={() => {
                setSelectedColor(name);
                setIsOpen(false);
              }}>
              <span
                style={{
                  backgroundColor: hex,
                }}
                className='w-[10px] h-[10px] rounded-full'></span>
              {name.toLowerCase().slice(0, 7)}...
            </li>
          ))}
        </SimpleBar>
      )}
    </div>
  );
};

export default ColorsFilter;
