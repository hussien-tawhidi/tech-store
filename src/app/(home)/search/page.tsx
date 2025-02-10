"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductProps } from "../../../../types";
import Loading from "@/components/header/search/Loading";
import StoreOffCard from "@/components/home/store-off/StoreOffCard";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const category = searchParams.get("category") || "";
  const [results, setResults] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(results.length / 10);
  const queryParams = new URLSearchParams();
  if (query) queryParams.append("query", query);
  if (category) queryParams.append("category", category);
  queryParams.append("allResults", "true"); // Ensure full results are fetched

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `/api/search/product-search?${queryParams.toString()}`
        );

        if (!res.ok) throw new Error("Failed to fetch search results");
        const data = await res.json();
        setResults(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query, category, queryParams]);

  return (
    <div className='mx-auto md:w-[90vw] w-[95vw] mt-20'>
      <p className='font-semibold mb-4 text-sm'>
        Search Results for:{" "}
        <span className='text-slate-700 font-semibold text-xl'>
          {query} {category && <span className=''> - {category}</span>}
        </span>{" "}
        <br />
        <span>{results.length} Items Founded</span>
      </p>
      {loading && (
        <div className='w-full flex flex-col items-center justify-center'>
          <Loading />
        </div>
      )}
      {results.length > 0 ? (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {results.map((product) => (
            <li
              key={product._id}
              className='border rounded-md shadow-md hover:shadow-lg'>
              <StoreOffCard
                _id={product._id}
                off={product.discountPrice}
                description={product?.description || ""}
                loading={loading}
                price={product.price || 0}
                src={product?.images[0]?.url}
                title={product.name}
                imageClassName='h-[20vh]'
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-gray-500'>No results found for {query}</p>
      )}
      {/* Render results */}
      <div className='flex justify-center mt-5'>
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className='px-4 py-2 bg-gray-300 rounded-md mr-2 disabled:opacity-50'>
          Previous
        </button>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className='px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50'>
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
