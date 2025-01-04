import React from "react";
import { FaStar, FaRegThumbsUp, FaEllipsisH } from "react-icons/fa";

interface ReviewProps {
  user: string;
  date: string;
  rating: number;
  comment: string;
  images: string[];
  countryFlag: string; // Flag emoji or image URL
}

const Reviews= ({
  user,
  date,
  rating,
  comment,
  images,
  countryFlag,
}:ReviewProps) => {
  return (
    <div className='border rounded-lg p-4 shadow-sm bg-white'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          {/* User Avatar */}
          <img
            src='/avatar.jpg' // Replace with dynamic user image if available
            alt='User Avatar'
            className='w-10 h-10 rounded-full object-cover'
          />
          <div>
            <h3 className='font-semibold'>{user}</h3>
            <p className='text-sm text-gray-500 flex items-center gap-1'>
              {countryFlag} {date}
            </p>
          </div>
        </div>

        {/* Menu Button */}
        <button className='text-gray-500 hover:text-gray-700'>
          <FaEllipsisH />
        </button>
      </div>

      {/* Rating */}
      <div className='flex items-center gap-1 mt-3'>
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`text-yellow-500 ${
              index < rating ? "fill-current" : "text-gray-300"
            }`}
          />
        ))}
        <span className='text-sm text-gray-600 ml-2'>{comment}</span>
      </div>

      {/* Images */}
      <div className='flex gap-2 mt-3'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`review-image-${index}`}
            className='w-16 h-16 rounded-md object-cover'
          />
        ))}
      </div>

      {/* Like Button */}
      <button className='flex items-center gap-1 text-gray-500 mt-4 hover:text-gray-700'>
        <FaRegThumbsUp />
      </button>
    </div>
  );
};

export default Reviews;
