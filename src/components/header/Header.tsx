"use client";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
import Mobile from "./mobile/Mobile";

interface Props {}

const Header = () => {
  return (
    <div className='px-5 md:py-3 py-1.5 border-b overflow-hidden'>
      <div className='block md:hidden z-50'>
        <Mobile/>
      </div>
      <div className='hidden md:block'>
        <HeaderTop />
        <HeaderBottom />
      </div>
    </div>
  );
};

export default Header;
