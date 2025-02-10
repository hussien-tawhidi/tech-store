"use client";

import Banner from "@/components/home/Banner";
import { useEffect, useState } from "react";
import HeaderTop from "./HeaderTop";
import Bottom from "./main/Bottom";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true); // Navbar visibility state
  const [lastScrollY, setLastScrollY] = useState(0); // Last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY); // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up listener
    };
  }, [lastScrollY]);
  return (
    <nav
      className={`fixed z-50 top-0 w-full bg-white shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
      <Banner />
      <div className='sm:px-5 px-2 md:py-3 py-1.5 border-b'>
        <HeaderTop />
        <Bottom />
      </div>
    </nav>
  );
};

export default Header;
