"use client";

import Image from "next/image";
import { homeTopCollection } from "../../../constant";
import { Button } from "../ui/button";
import Link from "next/link";

const TopCollection = () => {
  return (
    <div className='relative mt-16'>
      <div className='flex md:flex-row flex-col md:gap-5 gap-3'>
        {homeTopCollection.map((t) => (
          <div
            className='flex items-center justify-end w-full relative shadow-md'
            key={t.id}>
            <Image
              src={t.image}
              alt='top'
              width={500}
              height={500}
              className='object-cover mx-auto h-auto'
            />
            <div className='absolute bottom-0 left-0 bg-white/80 sm:p-5 p-3 sm:w-[70%] w-[90%] leading-5'>
              <p className='text-slate-500 sm:text-[12px] text-[10px] font-semibold tracking-wider'>
                With more you need OFF
              </p>
              <p className='text-muted-foreground sm:text-[16px] text-slate-600 text-[12px] sm:my-3 my-1.5 '>
                {t.description}
              </p>
              <Button
                variant={"outline"}
                className='bg-slate-500 py-3 bg-transparent text-slate-600 rounded-none sm:text-[16px] text-[12px]'>
                <Link href={t.linkTo}>Go to {t.title}</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCollection;
