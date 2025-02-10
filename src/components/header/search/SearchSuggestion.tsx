"use client";

import Link from "next/link";
import { searchContaineDate, specialProduct } from "../../../../constant";
import OverlayForBanner from "@/components/home/OverlayForBanner";

interface Props {
  toggleSearchField: () => void;
  searchField: boolean;
}
const SearchSuggestion = ({ toggleSearchField, searchField }: Props) => {
  return (
    <section className='flex flex-col sm:px-4 px-1 pb-3'>
      <div className='grid md:grid-cols-3 grid-cols-2 sm:gap-5 gap-2 relative py-5'>
        {specialProduct.map((photo, index) => (
          <Link
            onClick={toggleSearchField}
            href={photo.link}
            className={
              searchField
                ? `relative overflow-hidden rounded group opacity-100 translate-x-0 transition-all duration-700`
                : "opacity-0 translate-x-[30vw] transition-all"
            }
            style={{ transitionDelay: `${index * 500}ms` }}
            key={photo.id}>
            <OverlayForBanner src={photo.image} des={""} title={photo.title} />
          </Link>
        ))}
      </div>
      {searchContaineDate.map((data, index) => (
        <p
          key={data.id}
          style={{ transitionDelay: `${index * 200}ms` }}
          className={
            searchField
              ? "transition-all duration-700"
              : "opacity-0 translate-x-[30vw]"
          }>
          <Link href={data.link} onClick={toggleSearchField}>
            <span className='sm:text-sm text-[12px] text-slate-600 font-normal hover:text-slate-800 transition-all '>
              {data.title}
            </span>
          </Link>
        </p>
      ))}
    </section>
  );
};

export default SearchSuggestion;
