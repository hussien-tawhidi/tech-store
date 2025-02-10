"use client";
import { mobileBrands } from "../../../../constant";
import Link from "next/link";
import OverlayForBanner from "../OverlayForBanner";

const MobileBrands = () => {
  return (
    <div className='my-10 text-center'>
      <h3 className='md:text-5xl text-3xl mb-2 font-bold font-sans'>
        Best smart phones brands
      </h3>
      <div className='grid lg:grid-cols-5 md:gap-3 text-slate-600 grid-cols-2 gap-2 md:grid-cols-3'>
        {mobileBrands.map((brand) => (
          <Link
            href={"/mobile-brand"}
            className='relative overflow-hidden rounded group '
            key={brand.id}
            target='_blank'>
            <OverlayForBanner
              src={brand.image}
              title={brand.title}
              des={brand.des}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileBrands;
