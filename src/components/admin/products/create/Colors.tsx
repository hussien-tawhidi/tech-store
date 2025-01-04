"use client"

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { colorsName } from '../../../../../constant/colors';

type ColorType = { name: string; hex: string };


interface Props {
  handleColorChange: (color: ColorType) => void;
  colors: { name: string; hex: string }[];
}

const Colors = ({colors,handleColorChange}:Props) => {
  return (
    <div className='mt-4 flex flex-col items-center'>
      <p>Select Colors:</p>
      <ToggleGroup
        variant='outline'
        type='multiple'
        className='text-slate-600 dark:text-slate-300 flex flex-wrap'>
        {colorsName.map((color) => (
          <ToggleGroupItem
            key={color.name}
            value={color.name}
            onClick={() => handleColorChange(color)}
            aria-label={`Toggle ${color.name}`}
            className={
              colors.some((c) => c.name === color.name)
                ? "bg-primary text-white"
                : ""
            }>
            <span
              className='w-[20px] h-[20px] rounded-full'
              style={{ backgroundColor: color.hex }}></span>
            <span className='text-[10px]'>{color.name}</span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}

export default Colors