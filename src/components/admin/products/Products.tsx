import { Button } from "@/components/ui/button";
import ProductLists from "./ProductLists";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
const Products = () => {
  return (
    <section className='my-5 px-3'>
      <Button variant={"outline"}>
        <Link href='/dashboard/products/create' className="flex gap-3 items-center">
          Add new <IoMdAdd />{" "}
        </Link>
      </Button>
      <div className=''>
        <ProductLists />
      </div>
    </section>
  );
};

export default Products;
