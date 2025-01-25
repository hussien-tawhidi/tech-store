// app/confirm-email/page.tsx
"use client";

import Link from "next/link";
import { GrFormCheckmark } from "react-icons/gr";
import { MdErrorOutline } from "react-icons/md";
import { useEffect, useState } from "react";

export default function ConfirmEmailPage() {
  const token = window?.location?.pathname?.split("/")?.pop();

  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const confirmEmail = async () => {
      if (!token) {
        setStatus("Invalid token");
        return;
      }

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/confirm-email?token=${token}`
        );
        if (response.ok) {
          setStatus("Email confirmed successfully!");
        } else {
          setStatus("Failed to confirm email.");
        }
      } catch (error) {
        console.log(error);
        setStatus("An error occurred.");
      }
    };

    confirmEmail();
  }, [token]);

  return (
    <div className='text-center my-5 text-slate-600 font-semibold'>
      {status === "Email confirmed successfully!" && (
        <h1 className='flex items-center justify-center'>
          <span
            role='img'
            aria-label='Checkmark'
            className='text-green-500 flex items-end justify-center gap-2'>
            <GrFormCheckmark className='text-2xl' /> {status}
            <Link
              href={process.env.NEXT_PUBLIC_BASE_URL as string}
              className='text-slate-600 underline'>
              Store
            </Link>
          </span>
        </h1>
      )}
      {status === "Failed to confirm email." && (
        <h1 className='flex items-center justify-center'>
          <span
            role='img'
            aria-label='Checkmark'
            className='text-red-600 flex items-end justify-center gap-2'>
            <MdErrorOutline className='text-2xl' /> {status}
          </span>
        </h1>
      )}
      {status === "Invalid token" && (
        <h1 className='flex items-center justify-center'>
          <span
            role='img'
            aria-label='Checkmark'
            className='text-red-600 flex items-end justify-center gap-2'>
            <MdErrorOutline className='text-2xl' /> {status}
          </span>
        </h1>
      )}
    </div>
  );
}
