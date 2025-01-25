"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface props {
  name: string;
}

const Breadcrumbs = ({ name }: props) => {
  const pathname = usePathname(); // Get the current path
  const pathSegments = pathname.split("/").filter((segment) => segment); // Split path and remove empty segments

  const [productName, setProductName] = useState<string | null>(null);

  // Simulate fetching product name by ID
  const fetchProductName = async (id: string) => {
    // Replace this with your actual API or database call
    const mockProductData = {
      name: name,
      id: id,
    };
    return id === mockProductData.id ? mockProductData.name : null;
  };

  useEffect(() => {
    // If the last segment is an ID, fetch the product name
    const productId = pathSegments[pathSegments.length - 1];
    if (productId) {
      fetchProductName(productId).then((name) => setProductName(name));
    }
  }, [pathSegments]);

  return (
    <nav className='text-sm breadcrumbs ml-10' aria-label='breadcrumbs'>
      <ol className='flex space-x-2'>
        {/* Static Home link */}
        <li>
          <Link href='/' className='text-slate-500 hover:underline'>
            Tech Store
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          // If it's the last segment and a product name is available, use the product name
          const isLastSegment = index === pathSegments.length - 1;
          const fullPath = "/" + pathSegments.slice(0, index + 1).join("/");
          const label =
            isLastSegment && productName
              ? productName
              : segment.charAt(0).toUpperCase() + segment.slice(1);

          return (
            <li key={fullPath} className='flex items-center'>
              <span className='mx-2'>/</span>
              {isLastSegment ? (
                <span className='text-slate-700'>{label}</span> // Current page (non-clickable)
              ) : (
                <Link
                  href={fullPath}
                  className='text-slate-500 hover:underline'>
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
