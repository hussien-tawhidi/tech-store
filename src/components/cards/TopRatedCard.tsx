"use client";

import Link from "next/link";

interface TopRatedCardProps {
  productName: string;
  productDescription: string;
  productImage: string;
  price: number;
  onAddToCart?: () => void;
  title: string;
  id: string;
}

const TopRatedCard: React.FC<TopRatedCardProps> = ({
  productName,
  productDescription,
  productImage,
  price,
  title,
  id,
  onAddToCart,
}) => {
  return (
    <div className='relative mx-auto max-w-sm bg-slate-200 rounded-3xl shadow-xl text-slate-600 p-6 w-full flex flex-col  justify-center'>
      {/* Product Image */}
      <div className='flex justify-center'>
        <img
          src={productImage}
          alt={productName}
          className='h-48 w-auto object-contain rounded-xl'
        />
      </div>

      {/* Product Info */}
      <div className='mt-6 text-center'>
        <h2 className='text-lg font-semibold'>{productName}</h2>
        <p className='text-sm text-gray-400'>{productDescription}</p>
        <p className='text-lg font-bold mt-3'>${price.toFixed(2)}</p>
      </div>

      {/* Buttons */}
      <div className='flex justify-between items-center mt-6'>
        <div className='flex space-x-2'>
          <button className='h-3 w-3 bg-white rounded-full' />
          <button className='h-3 w-3 bg-gray-400 rounded-full' />
          <button className='h-3 w-3 bg-gray-400 rounded-full' />
        </div>
        <button
          onClick={() => {}}
          className='bg-white text-gray-800 px-6 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition'>
          <Link href={`/product_detials/${id}`}>See the info...</Link>
        </button>
      </div>

      {/* Specifications Link */}
      <div className='mt-6 text-center'>
        <button className='text-gray-400 underline text-sm'>
          Specifications
        </button>
      </div>
    </div>
  );
};

export default TopRatedCard;
