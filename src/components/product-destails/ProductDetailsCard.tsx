"use client";

import Images from "./Images";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useState } from "react";
import { Button } from "../ui/button";
import Brands from "../Brands";
import Rate from "../Rate";
import { ProductDetailsProps } from "../../../types";
import AddToCartButton from "../AddToCartButton";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity } from "@/store/slice/cartSlice";
import { RootState } from "@/store/store";
import AddTofavButton from "../AddTofavButton";
import ReviewSection from "./review/ReviewSection";
import Link from "next/link";
import ImageFullScreen from "./ImageFullScreen";

interface SelectedColor {
  name: string;
  hex: string;
}

const ProductDetailsCard = ({
  title,
  brand,
  category,
  description,
  price,
  discountPercentage,
  stock,
  rating,
  features,
  images,
  colors,
  quantity,
  id,
}: ProductDetailsProps) => {
  const cartItem = useSelector((state: RootState) => state.cart.items);
  const existItem = cartItem?.find((item) => item?._id === id);

  const dispatch = useDispatch();

  const [selectedColors, setSelectedColors] = useState<SelectedColor[]>([]);
  const handleColorChange = (selectedColor: SelectedColor) => {
    setSelectedColors((prev) =>
      prev.some((color) => color.name === selectedColor.name)
        ? prev.filter((color) => color.name !== selectedColor.name)
        : [...prev, selectedColor]
    );
  };

  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2
  );

  return (
    <div className='container relative mx-auto p-4 md:p-8 text-slate-600 '>
    
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
        {/* Product Images */}
        <div className='lg:col-span-5 relative'>
          <div className='flex flex-col items-center justify-center gap-4'>
            {images && (
              <Images
                images={images}
                active={0}
                className='w-[30vw] h-full object-cover mx-auto'
              />
            )}
          </div>

          <div className='absolute top-0 right-0'>
            <AddTofavButton
              _id={id}
              color={colors}
              discountPrice={discountPercentage}
              image={images}
              name={title}
              price={price}
              quantity={quantity ? quantity : 1}
            />
          </div>
        </div>

        {/* Product Details */}
        <div className='lg:col-span-7'>
          <h1 className='text-2xl flex items-center font-bold relative'>
            {title}
            <Brands brand={brand} />
          </h1>
          <div className='flex items-center gap-1'>
            <Rate rating={rating} />{" "}
            <Link href={"#reviews"} className='text-blue-500 text-[12px]'>
              See all
            </Link>
          </div>
          <p className='text-muted-foreground mt-2 text-sm my-3'>
            {description}
          </p>

          <p className='text-slate-600'>
            <strong>Category:</strong> {category}
          </p>
          <ToggleGroup
            type='multiple'
            className='text-slate-600 dark:text-slate-300 flex flex-wrap items-start justify-start'>
            {colors?.map((color, index) => (
              <ToggleGroupItem
                key={index}
                value={color.name}
                onClick={() => handleColorChange(color)}
                aria-label={`Toggle ${color.name}`}
                className={
                  selectedColors.some(
                    (selected) => selected.name === color.name
                  )
                    ? "bg-primary text-slate-600" // Selected styles
                    : ""
                }>
                <span
                  className='w-[15px] h-[15px] rounded-full'
                  style={{ backgroundColor: color.hex }}></span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <div className='mt-4 flex items-center justify-between'>
            <p className='mt-4'>
              <strong>Price:</strong>{" "}
              <span className='text-xl font-bold'>${discountedPrice}</span>{" "}
              {discountPercentage > 0 && (
                <span className='line-through text-slate-500'>
                  ${price.toFixed(2)}
                </span>
              )}
              {discountPercentage > 0 && (
                <span className='text-slate-500'>
                  ({discountPercentage}% off)
                </span>
              )}
            </p>
            <span
              className={`mt-2  py-2 text-slate-100 px-3 rounded-xl ${
                stock > 5 ? "bg-green-500 " : "bg-red-600"
              }`}>
              <span>{stock} in stock</span>
            </span>
          </div>
          <div className='my-5'>
            {!existItem ? (
              <AddToCartButton
                color={selectedColors}
                image={images}
                _id={id}
                name={title}
                price={price}
                title='Add to Cart'
                Icon={HiOutlineShoppingBag}
                discountPrice={discountPercentage}
              />
            ) : (
              <div>
                <Button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        _id: id,
                        quantity: quantity ? quantity - 1 : 0,
                      })
                    )
                  }
                  disabled={quantity === 1}>
                  -
                </Button>
                <span className='px-3 text-sm'>{quantity}</span>
                <Button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        _id: id,
                        quantity: quantity ? quantity + 1 : 0,
                      })
                    )
                  }>
                  +
                </Button>
              </div>
            )}
          </div>
          <div className='mt-6'>
            {features
              ?.filter((feature) => feature.trim() !== "") // Filter out empty or whitespace-only strings
              .map((feature, index) => {
                // Split the feature string into two parts: before and after the colon
                const [prefix, suffix] = feature.split(":");

                return (
                  <div
                    className='shadow-md shadow-slate-100 my-5 p-2 text-slate-600 flex items-center'
                    key={index}>
                    <div className='capitalize w-32 leading-relaxed'>
                      {prefix?.trim()}
                    </div>{" "}
                    {/* Render the part before the colon */}
                    <div className=''>
                      {suffix && (
                        <p className='font-light text-sm ml-10'>
                          {suffix.trim()}
                        </p>
                      )}{" "}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div id='reviews'>
        <ReviewSection productId={id} />
      </div>
    </div>
  );
};

export default ProductDetailsCard;
