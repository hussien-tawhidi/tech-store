"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();

  // Split the pathname into segments, removing empty strings
  const segments = pathname.split("/").filter((segment) => segment);

  return (
    <nav className='flex items-center space-x-2 text-sm'>
      {/* Home Link */}
      <Link href='/' className='text-slate-500 hover:underline'>
        Home
      </Link>

      {segments.map((segment, index) => {
        // Determine if this is the last segment
        const isActive = index === segments.length - 1;

        // Reconstruct the path up to the current segment
        const href = "/" + segments.slice(0, index + 1).join("/");

        return (
          <div key={href} className='flex items-center space-x-2'>
            <span>/</span>
            {isActive ? (
              <span className='font-semibold text-gray-700'>
                {decodeURIComponent(segment)}
              </span>
            ) : (
              <Link href={href} className='text-slate-500 hover:underline'>
                {decodeURIComponent(segment)}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
