"use client";

import Link from "next/link";
import OverlayForBanner from "../OverlayForBanner";
const MobileBanners = () => {
  return (
    <div className='my-10 relative overflow-hidden grop  grid sm:gap-3 gap-2 sm:grid-cols-2 cursor-pointer'>
      <Link href='/phone/cheap-phone' target='_blank'>
        <OverlayForBanner
          src='/features/cheapPhone.jpg'
          title='Cheap mobile'
          des='Cheap mobile for someone in searching less price or want to spent less money fot mobile'
        />
      </Link>
      <Link href='/phone/phone-accessories' target='_blank'>
        <OverlayForBanner
          src='/features/phoneBanner.jpg'
          title='Accessories for mobile'
          des='Check out mobile accessory, like chager,cable, usb ...'
        />
      </Link>
    </div>
  );
};

export default MobileBanners;
