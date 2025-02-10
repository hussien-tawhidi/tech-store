"use client";

import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import Menu from "./Menu";
import BottomMenu from "./BottomMenu";
import { bottomMenu } from "../../../../constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Bottom = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const showMenu = () => {
    setMenu((prev) => !prev);
  };
  const pathname = usePathname();
  return (
    <div className='flex items-center md:gap-16 gap-3 overflow-x-auto flex-wrap md:py-2 py-2 md:px-3 overflow-hidden'>
      <p onClick={showMenu} className='cursor-pointer'>
        <BottomMenu icon={HiOutlineMenu} title={"Menu"} />
      </p>

      {bottomMenu.map((menu) => (
        <Link
          href={menu.link}
          key={menu.id}
          target='_blank'
          className={"relative"}>
          <BottomMenu icon={menu.icon} title={menu.title} />
          {pathname === menu.link && (
            <span className='absolute -bottom-1 left-0 right-0 w-full h-[1px] bg-slate-500 transition-all duration-200'></span>
          )}
        </Link>
      ))}
      <Menu hideTheMenu={showMenu} menu={menu} />
    </div>
  );
};

export default Bottom;
