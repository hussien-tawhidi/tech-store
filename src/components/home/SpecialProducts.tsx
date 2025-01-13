"use client";
import { specialProduct } from "../../../constant";
import Link from "next/link";
import OverlayForBanner from "./OverlayForBanner";

const SpecialProducts = () => {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-5 relative py-5'>
      {specialProduct.map((photo) => (
        <Link
          href={photo.link}
          className='relative overflow-hidden rounded group '
          key={photo.id}>
          <OverlayForBanner
            src={photo.image}
            des={photo.des}
            title={photo.title}
          />
        </Link>
      ))}
    </div>
  );
};

export default SpecialProducts;
