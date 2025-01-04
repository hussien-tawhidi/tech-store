"use client";
import { GrInbox } from "react-icons/gr";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
const EmptyCart = () => {
  const router = useRouter();

  return (
    <div className='flex items-center justify-center flex-col text-slate-600 font-bold my-10'>
      <p className='flex items-center gap-3 text-3xl'>
        <span>Your cart is Empty</span>
        <GrInbox />
      </p>
      <Button
        className='border border-slate-600 my-5 hover:border-slate-900 hover:text-slate-800 transition-all'
        variant={"ghost"}
        onClick={() => router.push("/")}>
        Go all products
      </Button>
    </div>
  );
};

export default EmptyCart;
