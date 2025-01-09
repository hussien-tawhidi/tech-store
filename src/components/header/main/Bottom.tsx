"use client";

import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import Menu from "./Menu";
import BottomMenu from "./BottomMenu";
import { bottomMenu } from "../../../../constant";

const Bottom = () => {
  const [menu, setMenu] = useState<boolean>(false);
  
  const showMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className='flex items-center md:gap-5 gap-3 overflow-x-auto flex-wrap md:py-3 py-2 md:px-3 overflow-hidden'>
      <span
        onClick={showMenu}
        className='md:text-[16px] cursor-pointer text-[12px] animate__animated animate__fadeInUp font-normal flex items-center gap-2'>
        <HiOutlineMenu /> Menu
      </span>

      {bottomMenu.map((menu) => (
        <BottomMenu key={menu.id} icon={menu.icon} title={menu.title} />
      ))}
      <Menu hideTheMenu={showMenu} menu={menu} />
    </div>
  );
};

export default Bottom;
