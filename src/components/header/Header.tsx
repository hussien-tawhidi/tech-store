"use client";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
import Bottom from "./main/Bottom";
import Mobile from "./mobile/Mobile";

interface Props {}

const Header = () => {
  return (
    <div className='sm:px-5 px-2 md:py-3 py-1.5 border-b'>
      {/* <div className='block md:hidden z-50'>
        <Mobile />
      </div> */}
      {/* <div className='hidden md:block'> */}
        <HeaderTop />
        {/* <HeaderBottom /> */}
        <Bottom />
      {/* </div> */}
    </div>
  );
};

export default Header;
