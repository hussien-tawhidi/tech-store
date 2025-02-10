"use client";
import Image from "next/image";
import Link from "next/link";
import { BsCartPlus } from "react-icons/bs";
import ChooseColor from "../ChooseColor";
import { Button } from "../ui/button";

interface TopRatedCardProps {
  productName: string;
  productDescription: string;
  productImage: string;
  price: number;
  onAddToCart?: () => void;
  title: string;
  id: string;
  colors: { name: string; hex: string }[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
}

const TopRatedCard: React.FC<TopRatedCardProps> = ({
  productName,
  productDescription,
  productImage,
  price,
  colors,
  id,
}) => {
  return (
    <div className='relative mx-auto mb-10 max-w-sm rounded-3xl shadow-xl text-slate-600 p-6 w-full flex flex-col  justify-between'>
      {/* Product Image */}
      <div className='flex justify-center'>
        <Image
          width={400}
          height={400}
          src={productImage}
          alt={`image ${productName}`}
          className='h-48 w-auto object-contain rounded-xl'
        />
      </div>

      {/* Product Info */}
      <div className='mt-2 text-center'>
        <h2 className='text-lg font-semibold'>
          {productName.length > 15 ? (
            <span>{productName.slice(0, 15)}...</span>
          ) : (
            productName
          )}
        </h2>
        <p className='text-sm text-gray-400'>
          {productDescription.length > 45 ? (
            <span>{productDescription.slice(0, 45)}...</span>
          ) : (
            productDescription
          )}
        </p>
        <p className='text-lg font-bold mt-3'>${price.toFixed(2)}</p>
      </div>

      {/* Buttons */}
      <div className='flex justify-between items-center'>
        <ChooseColor colors={colors.length > 3 ? colors.slice(0, 3) : colors} />

        <Button
          onClick={() => {}}
          className='hover:text-slate-800 text-slate-600 transition-all border-none!'>
          <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/product_detials/${id}`}>
            <BsCartPlus />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default TopRatedCard;
