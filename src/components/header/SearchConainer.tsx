"use client";

import { CiSearch } from "react-icons/ci";
import { RiCloseLargeFill } from "react-icons/ri";
import { searchContaineDate } from "../../../constant";
import Link from "next/link";

interface Props {
  searchField: boolean; // It's a boolean, not any type
  setSearchField: (value: boolean) => void; // Function to update the state
}

const SearchConainer = ({ searchField, setSearchField }: Props) => {
  const toggleSearchField = () => {
    setSearchField(!searchField);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div
      className={
        searchField
          ? "absolute transition-all duration-300 opacity-100 top-0 left-0 right-0 backdrop-blur-sm bg-slate-900/50 pointer-events-auto h-screen overflow-hidden z-50"
          : "absolute top-0 transition-all duration-300 opacity-0 right-[30vw] pointer-events-none h-screen overflow-hidden"
      }>
      <div className='md:w-[50vw]  sm:w-[80vw] w-[100vw] mx-auto bg-white rounded-br-md rounded-bl-md overflow-hidden'>
        <form
          className=' flex items-center mx-auto mt-5 relative '
          onSubmit={handleSubmit}>
          <div
            className={
              searchField
                ? "h-[5vh] flex items-center px-2 text-slate-600 cursor-pointer delay-75 duration-300 hover:text-slate-50 transition-all"
                : "translate-x-[20vw] opacity-0 transition-all"
            }>
            <CiSearch className='' />
          </div>
          <input
            type='text'
            className={
              searchField
                ? "w-full relative text-sm text-slate-600 bg-transparent h-[5vh] border-b border-b-slate-600 duration-300 delay-100 transition-all  placeholder:text-slate-600"
                : "translate-x-[30vw] opacity-0 transition-all"
            }
            placeholder='Search what you want to...'
          />
          <RiCloseLargeFill
            className={
              searchField
                ? "text-slate-600 cursor-pointer pr-1 hover:text-slate-900 transition-all h-[5vh] duration-300 delay-150"
                : "opacity-0 translate-x-[30vw]"
            }
            onClick={toggleSearchField}
          />
        </form>
        <ul className='flex flex-col pt-10 px-4 pb-3'>
          {searchContaineDate.map((data) => (
            <li
              key={data.id}
              className={
                searchField
                  ? "transition-all duration-700 delay-200"
                  : "opacity-0 translate-x-[30vw]"
              }>
              <Link href={"/"}>
                <span className='sm:text-sm text-[12px] text-slate-600 font-normal hover:text-slate-500 transition-all'>
                  {data.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchConainer;
