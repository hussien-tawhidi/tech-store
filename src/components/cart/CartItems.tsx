"use client";

import { removeFromCart, updateQuantity } from "@/store/slice/cartSlice";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import ChooseColor from "../ChooseColor";
import { Button } from "../ui/button";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";

const CartItems = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      {cartItems.map((item) => (
        <li
          key={item?.name}
          className='flex sm:flex-row flex-col sm:mb-5 mb-3 shadow relative sm:p-5 p-3 items-center'>
          <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/product_detials/${item._id}`}
            className='flex items-center justify-start gap-2 w-full'>
            {item?.image && (
              <div className=' sm:w-[80px] w-[60px] rounded-xl sm:h-[80px] h-[60px] overflow-hidden'>
                <Image
                  src={item?.image[0]?.url}
                  width={200}
                  height={200}
                  alt={`image for ${item.name}`}
                  className='object-cover'
                />
              </div>
            )}
            <span className='flex flex-col font-semibold md:text-xl text-sm'>
              {item.name}
              <span className='text-[12px] mt-2'>
                $
                {(item.price - (item.price * item.discountPrice) / 100).toFixed(
                  2
                )}{" "}
                x {item.quantity}
              </span>
            </span>
          </Link>
          <div className='flex items-center justify-end w-full gap-3'>
            <ChooseColor colors={item.color} />
            {/* price */}
            <span className='font-semibold text-sm'>
              $
              {(
                parseFloat(
                  (
                    item.price -
                    (item.price * item.discountPrice) / 100
                  ).toFixed(2)
                ) * item.quantity
              ).toFixed(2)}
            </span>
            <Button
              variant={"ghost"}
              className='absolute top-0 right-0 transition-all text-red-500 rounded-full'
              onClick={() => handleRemove(item._id)}>
              <AiOutlineDelete />
            </Button>
            <span className='absolute top-0 right-0 w-[35px] h-[2px] rounded-md bg-red-500'></span>
            <div>
              <Button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      _id: item._id,
                      quantity: item.quantity - 1,
                    })
                  )
                }
                disabled={item.quantity === 1}>
                -
              </Button>
              <span className='px-3 text-sm'>{item.quantity}</span>
              <Button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      _id: item._id,
                      quantity: item.quantity + 1,
                    })
                  )
                }>
                +
              </Button>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default CartItems;
