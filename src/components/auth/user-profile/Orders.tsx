"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("Active");

  const tabs = ["Active", "Archive", "Review", "Dispute"];

  return (
    <div className='p-6 font-sans'>
      {/* Title */}
      <h1 className='text-2xl font-bold mb-6'>Orders</h1>

      {/* Tabs */}
      <div className='flex items-center gap-4 mb-6'>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm ${
              activeTab === tab
                ? "bg-slate-800 text-white"
                : "bg-slate-200 text-slate-700"
            }`}>
            {tab}
          </button>
        ))}
        {/* Search Input */}
        <Input
          type='text'
          placeholder='Search all orders'
          className='ml-auto px-4 py-2 border border-slate-300 rounded-lg'
        />
      </div>

      {/* Speed up delivery section */}
      <div className='flex items-center justify-between p-4 bg-slate-100 rounded-lg mb-6'>
        <div className='flex items-center gap-3'>
          <FaTruck className='text-green-500 text-lg' />
          <div>
            <h3 className='font-semibold'>Speed up the delivery</h3>
            <p className='text-sm text-slate-500'>
              Add your passport to receive your next orders faster
            </p>
          </div>
        </div>
        <button className='px-4 py-2 bg-slate-200 rounded-lg hover:bg-slate-300'>
          Add
        </button>
      </div>

      {/* Empty Orders Section */}
      <div className='flex flex-col items-center justify-center p-16 bg-slate-50 rounded-lg'>
        {/* Icon */}
        <div className='mb-4 text-4xl'>
          <FaBoxOpen />
        </div>
        <p className='text-lg'>You have no active orders</p>
        <Link href='/' className='text-blue-500 mt-2 underline'>
          To the main
        </Link>
      </div>
    </div>
  );
};

export default Orders;
