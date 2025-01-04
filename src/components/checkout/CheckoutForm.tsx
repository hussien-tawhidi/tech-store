"use client";
import { CiUser } from "react-icons/ci";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { GiMatterStates } from "react-icons/gi";
import { PiCityLight, PiSignpostThin } from "react-icons/pi";
import { TbRouteAltRight } from "react-icons/tb";

type Errors = {
  name?: string;
  phone?: string;
  email?: string;
  province?: string;
  city?: string;
  street?: string;
  postCode?: string;
};

interface checkoutForm {
  handleSubmit: (e: React.FormEvent) => void;
  name: string;
  setName: (value: string) => void;
  setPhone: (value: string) => void;
  setEmail: (value: string) => void;
  setProvince: (value: string) => void;
  setCity: (value: string) => void;
  setStreet: (value: string) => void;
  setPostCode: (value: string) => void;
  phone: string;
  street: string;
  postCode: string;
  email: string;
  province: string;
  city: string;
  error: Errors;
}

export default function CheckoutForm({
  handleSubmit,
  name,
  province,
  setProvince,
  setName,
  setPhone,
  email,
  setEmail,
  phone,
  city,
  setCity,
  street,
  setStreet,
  setPostCode,
  error,
  postCode,
}: checkoutForm) {
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <div className='flex items-center  relative'>
        <span className='text-xl absolute right-0 bg-slate-200 px-3 flex items-center h-full'>
          <CiUser />
        </span>
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className='w-full shadow-none! p-2 outline-none! border-none! h-[6vh]'
          placeholder='full name ...'
          type='text'
          required
        />
      </div>
      {error.name && <span className='text-red-500'>{error.name}</span>}
      <div className='flex items-center  relative'>
        <span className='text-xl absolute right-0 bg-slate-200 px-3 flex items-center h-full'>
          <IoPhonePortraitOutline />
        </span>
        <Input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className='w-full shadow-none! p-2 outline-none! border-none! h-[6vh]'
          placeholder='Phone number ...'
          type='text'
          required
        />
      </div>
      {error.phone && <span className='text-red-500'>{error.phone}</span>}

      <div className='flex items-center  relative'>
        <span className='text-xl absolute right-0 bg-slate-200 px-3 flex items-center h-full'>
          <HiOutlineMail />
        </span>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className='w-full shadow-none! p-2 outline-none! border-none! h-[6vh]'
          placeholder='Your email ...'
          type='email'
          required
        />
      </div>
      {error.email && <span className='text-red-500'>{error.email}</span>}

      <div className='pl-10 text-slate-600 font-normal text-sm pt-5 flex flex-col gap-3'>
        <h5 className='font-semibold'>Address</h5>
        <div className='flex items-center  relative'>
          <span className='text-xl absolute right-0 bg-slate-200 px-3 flex items-center h-full'>
            <GiMatterStates />
          </span>
          <Input
            onChange={(e) => setProvince(e.target.value)}
            value={province}
            className='w-full shadow-none! p-2 outline-none! border-none! h-[5vh]'
            placeholder='Province ...'
            type='text'
            required
          />
        </div>
        {error.province && (
          <span className='text-red-500'>{error.province}</span>
        )}

        <div className='flex items-center  relative'>
          <span className='text-xl absolute right-0 bg-slate-200 px-3 flex items-center h-full'>
            <PiCityLight />
          </span>
          <Input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            className='w-full shadow-none! p-2 outline-none! border-none! h-[5vh]'
            placeholder='City ...'
            type='text'
            required
          />
        </div>
        {error.city && <span className='text-red-500'>{error.city}</span>}
        <div className='flex items-center  relative'>
          <span className='text-xl absolute right-0 bg-slate-200 px-3 flex items-center h-full'>
            <TbRouteAltRight />
          </span>
          <Input
            onChange={(e) => setStreet(e.target.value)}
            value={street}
            className='w-full shadow-none! p-2 outline-none! border-none! h-[5vh]'
            placeholder='Street number & name ...'
            type='text'
            required
          />
        </div>
        {error.street && <span className='text-red-500'>{error.street}</span>}
        <div className='flex items-center  relative'>
          <span className='text-xl absolute right-0 bg-slate-200 px-3 flex items-center h-full'>
            <PiSignpostThin />
          </span>
          <Input
            onChange={(e) => setPostCode(e.target.value)}
            value={postCode}
            className='w-full shadow-none! p-2 outline-none! border-none! h-[5vh]'
            placeholder='PostCode ...'
            type='text'
            required
          />
        </div>
      </div>
      {error.postCode && <span className='text-red-500'>{error.postCode}</span>}
      <Button
        className='text-slate-100 transition-all hover:text-slate-600 bg-slate-600 rounded-md!'
        type='submit'>
        Place Order
      </Button>
    </form>
  );
}
