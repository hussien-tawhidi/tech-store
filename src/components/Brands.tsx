"use client";

import { AiOutlineApple } from "react-icons/ai";
import { SiAsus, SiLg, SiSamsung, SiXiaomi } from "react-icons/si";

interface props {
  brand: string;
}

const Brands = ({ brand }: props) => {
  return (
    <div>
      <span className='text-sm'>
        {brand === "apple" && <AiOutlineApple />}
        {brand === "lg" && <SiLg />}
        {brand === "samsung" && <SiSamsung />}
        {brand === "asus" && <SiAsus />}
        {brand === "xiami" && <SiXiaomi />}
      </span>
    </div>
  );
};

export default Brands;
