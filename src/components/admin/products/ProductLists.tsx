"use client";

import Loading from "@/components/Loading";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { deleteProduct } from "@/actions/products";
import ReactPaginate from "react-paginate";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import ProductItems from "./ProductItems";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";

interface productProps {
  _id: string;
  name: string;
  images: { url: string }[];
  category: string;
  subcategories: string[];
  sku: string;
  price: number;
  description: string;
}

const ProductLists = () => {
  const searchParams = useSearchParams();
  const [getProducts, setGetProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [deleteProductsLoading, setDeleteProductsLoading] = useState(false);

  // ******************************************************************
  // pagination
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + 10;
  const currentItems = getProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(getProducts.length / 10);
  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageClick = (event: any) => {
    const newPage = event.selected + 1;
    const newOffset = (event.selected * 10) % getProducts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    // Update URL with the new page number
    router.push(`?page=${newPage}`, { scroll: false });
  };

  // ******************************************************************
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get("/api/admin/products");
        if (data) setGetProducts(data?.products);

        // Set offset based on the current page number in URL
        const initialOffset = (currentPage - 1) * 10;
        setItemOffset(initialOffset);
      } catch (error) {
        console.log(error, "Error getting products admin data IN ADDMIN");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [currentPage]);
  const handleDelete = async (productId: string) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!isConfirmed) return;

    setDeleteProductsLoading(true);
    try {
      const result = await deleteProduct(productId);
      toast.success(result.message || "Product deleted successfully!");
      setGetProducts(
        getProducts.filter((product: productProps) => product._id !== productId)
      ); // Remove the deleted product from the list
    } catch (error) {
      toast.error("Failed to delete product.");
    } finally {
      setDeleteProductsLoading(false);
    }
  };
  return (
    <div className='overflow-hidden w-full m-5 z-10'>
      <div className='flex items-center gap-3'>
        <Button variant={"outline"}>
          <Link
            href='/dashboard/products/create'
            className='flex gap-3 items-center'>
            Add new <IoMdAdd />{" "}
          </Link>
        </Button>
        <Button className='text-[12px]'>{getProducts.length} Products</Button>
      </div>
      {loading && <Loading />}
      {/* products****************************************/}
      <ProductItems
        currentItems={currentItems}
        deleteProductsLoading={deleteProductsLoading}
        handleDelete={handleDelete}
        itemOffset={itemOffset}
      />
      {/* pagination setup****************************************/}
      <ReactPaginate
        breakLabel='...'
        nextLabel={
          <GrFormNextLink className='flex items-center justify-center mt-1 text-slate-600 hover:text-slate-950 transition-all' />
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <GrFormPreviousLink className='flex items-center justify-center mt-1 text-slate-600 hover:text-slate-950 transition-all' />
        }
        renderOnZeroPageCount={null}
        containerClassName='pagination flex justify-center mt-4'
        activeClassName='text-blue-500 font-bold text-slate-600 border border-slate-500'
        previousClassName='px-3 py-1 border rounded-md mr-2'
        nextClassName='px-3 py-1 border rounded-md ml-2'
        pageClassName='px-3 py-1 border rounded-md mx-1'
        disabledClassName='text-gray-400 cursor-not-allowed hidden'
      />
    </div>
  );
};

export default ProductLists;
