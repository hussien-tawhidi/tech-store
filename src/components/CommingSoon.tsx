"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
export default function CommingSoon() {
  const router = useRouter();
  return (
    <section className=''>
      <div className='min-h-screen flex flex-col justify-center items-center'>
        <Image
          width={200}
          height={200}
          src='https://www.svgrepo.com/show/426192/cogs-settings.svg'
          alt='Logo'
          className='mb-8 h-40 w-auto object-cover'
        />
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4'>
          Site is under maintenance
        </h1>
        <p className='text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8'>
          We&apos;re working hard to improve the user experience. Stay tuned!
        </p>
        <div className='flex space-x-4'>
          <Link
            href='/contact'
            className='bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded dark:bg-gray-700 dark:hover:bg-gray-600'>
            Contact Us
          </Link>
          <Button
            onClick={() => router.refresh()}
            className='border-2 h-full border-gray-800 text-black font-bold py-3 px-6 rounded dark:text-white dark:border-white'>
            Reload
          </Button>
        </div>
      </div>
    </section>
  );
}
