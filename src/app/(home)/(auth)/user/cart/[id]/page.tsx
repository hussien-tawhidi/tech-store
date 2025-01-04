"use client";
import CartItems from "@/components/cart/CartItems";
import EmptyCart from "@/components/cart/empty";
import OrderSummary from "@/components/cart/OrderSummary";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <div className='flex flex-col relative md:p-10 p-3 text-slate-600'>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className=''>
            <p>{cartItems.length} Items</p>
            <h2 className='md:text-3xl text-xl font-bold'>Shopping cart</h2>
          </div>
          <div className='md:grid grid-cols-5'>
            <ul className='lg:col-span-4 md:col-span-3 md:mb-16 mb-10 md:mr-10'>
              <CartItems />
            </ul>
            <div className='lg:col-span-1 md:col-span-2 sm:w-full w-[80vw] mx-auto'>
              <OrderSummary />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
