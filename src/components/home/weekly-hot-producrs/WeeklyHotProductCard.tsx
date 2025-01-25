"use client";

import Colors from "@/components/admin/products/create/Colors";
import ChooseColor from "@/components/ChooseColor";
import { LiaCartPlusSolid } from "react-icons/lia";

interface ProductCardProps {
  images: any[];
  title: string;
  description: string;
  price: string;
  colors: any[];
}

const WeeklyHotProductCard = ({
  images,
  title,
  description,
  colors,
  price,
}: ProductCardProps) => {
  const colorWidth = () => {
    if (colors.length > 3) {
      <span>{colors}...</span>;
    }
    return colors;
  };

  return (
    <div className='max-w-xs bg-white shadow-md rounded-lg overflow-hidden mb-1'>
      <div className='p-4'>
        <img
          src={images[0].url}
          alt={title}
          className='h-40 w-full object-contain'
        />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-slate-800'>{title}</h3>
        <p className='text-sm text-slate-600 my-2'>
          {description.length > 45 ? (
            <span>{description.slice(0, 45)}...</span>
          ) : (
            description
          )}
        </p>
        <div className='flex justify-center space-x-2 my-4'>
          <ChooseColor
            colors={colors.length > 3 ? (colors.length = 3) : colors}
          />
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-lg font-bold text-gray-800'>${price}</span>
          <button className='px-4 py-2 bg-slate-800 text-white text-sm rounded-lg hover:bg-slate-700 flex items-center'>
            Add to
            <LiaCartPlusSolid />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeeklyHotProductCard;
