"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

interface SelectedColor {
  name: string;
  hex: string;
}

const ChooseColor = ({ colors }: any) => {
  const [selectedColors, setSelectedColors] = useState<SelectedColor[]>([]);

  const handleColorChange = (selectedColor: SelectedColor) => {
    setSelectedColors(
      (prev) =>
        prev.some((color) => color.name === selectedColor.name)
          ? prev.filter((color) => color.name !== selectedColor.name) // Remove if already selected
          : [...prev, selectedColor] // Add if not selected
    );
  };

  return (
    <ToggleGroup
      type='multiple'
      className='text-slate-600 dark:text-slate-300 flex flex-wrap items-start justify-start'>
      {colors?.map((color: SelectedColor, index: number) => (
        <ToggleGroupItem
          key={index}
          value={color.name}
          onClick={() => handleColorChange(color)}
          aria-label={`Toggle ${color.name}`}
          className={
            selectedColors.some((selected) => selected.name === color.name)
              ? "bg-primary text-slate-600" // Selected styles
              : ""
          }>
          <span
            className='w-[15px] h-[15px] rounded-full'
            style={{ backgroundColor: color.hex }}></span>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default ChooseColor;
