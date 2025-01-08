"use client";

import HeaderTop from "./HeaderTop";
import Bottom from "./main/Bottom";

const Header = () => {
  return (
    <div className='sm:px-5 px-2 md:py-3 py-1.5 border-b'>
      <HeaderTop />

      <Bottom />
    </div>
  );
};

export default Header;
