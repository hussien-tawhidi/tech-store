"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ProductImageProps {
  images: { url: string }[]; // Define `images` as an array of objects with `url`
  active: number;
  className?: string;
}

export default function ProductImage({
  images,
  active,
  className,
}: ProductImageProps) {
  const [changeImage, setChangeImage] = useState(images[active]?.url || "");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (images && images[active]?.url) {
      setIsLoading(false);
      setChangeImage(images[active]?.url);
    }
  }, [images, active]);

  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <div
          className={`flex flex-col-reverse items-center justify-between h-full xl:items-start xl:flex-row gap-4 w-[90%] mx-0 overflow-hidden ${className}`}>
          {/* Thumbnails */}
          <div className='flex xl:flex-col items-center  gap-4 w-fit justify-between h-full cursor-pointer'>
            {!images
              ? "Loading..."
              : images.map((image, idx) => (
                  <Image
                    className='object-contain'
                    key={idx}
                    src={image?.url}
                    alt={`Thumbnail ${idx + 1}`}
                    width={60}
                    height={60}
                    onMouseEnter={() => setChangeImage(image?.url)} // Update the main image on hover
                  />
                ))}
          </div>

          {/* Main Image */}
          <div className='flex justify-center items-center overflow-hidden w-[400px] h-[70vh]'>
            <Image
              data-cy='imageItem'
              src={changeImage}
              alt='Main product image'
              width={400}
              height={500}
              className='object-cover w-full h-auto cursor-pointer'
            />
          </div>
        </div>
      )}
    </>
  );
}
