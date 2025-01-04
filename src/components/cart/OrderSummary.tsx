"use client";

import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { RootState } from "@/store/store";
import { CartItem } from "@/store/slice/cartSlice";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// interface props {
//   price: number;
//   discountPrice: number;
//   quantity: number;
//   shipping: number;
// }

const OrderSummary = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  let shipping = 10;

  const items = cartItems.map(
    (item: CartItem) =>
      item.quantity * (item.price - (item.price * item.discountPrice) / 100)
  );

  // calculate the price
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum += items[i];
  }
  // shipping ++ price
  for (let i = 0; i < items.length; i++) {
    shipping += items[i];
  }

  return (
    <div className='text-slate-600 w-full mx-2 h-full'>
      <h6 className='font-semibold md:text-xl text-md my-5'>Order summary</h6>
      <div className='flex flex-col shadow-md p-3 gap-3'>
        <div className='flex items-center justify-between mb-2'>
          <p className='text-sm'>Subtotal</p>
          <p className='text-sm text-slate-500'>${sum}</p>
        </div>
        <div className='flex items-center justify-between mb-2'>
          <p className='text-sm'>Shipping</p>
          <p className='text-sm text-slate-500'>$10</p>
        </div>
        <div className='flex items-center justify-between mb-2 border-t p-1 font-bold text-slate-600'>
          <p className='text-sm'>Total</p>
          <p className='text-sm'>${shipping}</p>
        </div>
        <Button
          className=''
          onClick={() =>
            router.push(`/user/${session?.user?._id}/checkout-order`)
          }>
          Process the payment
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;
