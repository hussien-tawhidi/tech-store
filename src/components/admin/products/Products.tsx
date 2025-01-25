"use client";

import { Button } from "@/components/ui/button";
import ProductLists from "./ProductLists";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
const Products = () => {
  return (
    <section className='my-5 px-3'>
     
      <div className=''>
        <ProductLists />
      </div>
    </section>
  );
};

export default Products;
