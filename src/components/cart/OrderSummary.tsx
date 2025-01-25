"use client";

import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { RootState } from "@/store/store";
import { CartItem } from "@/store/slice/cartSlice";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const OrderSummary = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const shipping = 10; // Fixed shipping fee

  // Calculate item prices after discounts
  const items = cartItems.map(
    (item: CartItem) =>
      item.quantity * (item.price - (item.price * item.discountPrice) / 100)
  );

  // Calculate the sum of item prices
  const sum = items.reduce((acc, item) => acc + item, 0);

  // Total price including shipping
  const total = sum + shipping;

  // Check if session is available
  if (!session?.user?._id) {
    return <p>Loading...</p>;
  }

  return (
    <div className='text-slate-600 w-full mx-2 h-full'>
      <h6 className='font-semibold md:text-xl text-md my-5'>Order summary</h6>
      <div className='flex flex-col shadow-md p-3 gap-3'>
        <div className='flex items-center justify-between mb-2'>
          <p className='text-sm'>Subtotal</p>
          <p className='text-sm text-slate-500'>${sum.toFixed(2)}</p>
        </div>
        <div className='flex items-center justify-between mb-2'>
          <p className='text-sm'>Shipping</p>
          <p className='text-sm text-slate-500'>${shipping}</p>
        </div>
        <div className='flex items-center justify-between mb-2 border-t p-1 font-bold text-slate-600'>
          <p className='text-sm'>Total</p>
          <p className='text-sm'>${total.toFixed(2)}</p>
        </div>
        <Button
          onClick={() =>
            router.push(`/user/${session.user._id}/checkout-order`)
          }>
          Process the payment
        </Button>
      </div>
    </div>
  );
};

export default OrderSummary;
