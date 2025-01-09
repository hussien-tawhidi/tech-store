"use client";

import { useRouter } from "next/navigation";
import { specialProduct } from "../../../../constant";
import Image from "next/image";
import Link from "next/link";

const SpecialProducts = () => {
  const router = useRouter();
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-5 relative py-5'>
      {specialProduct.map((photo) => (
        <Link
          href={photo.link}
          className='relative overflow-hidden rounded group '
          key={photo.id}>
          <div className='absolute  transition-all top-0 left-0 bg-black/10 group-hover:bg-black/0 w-full h-full'></div>
          <Image
            onClick={() => router.push(photo.link)}
            src={photo.image}
            alt='image'
            width={2000}
            height={1000}
            className='object-cover cursor-pointer'
          />
        </Link>
      ))}
    </div>
  );
};

export default SpecialProducts;
