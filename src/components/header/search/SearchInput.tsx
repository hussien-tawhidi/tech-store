import { RiCloseLargeFill } from "react-icons/ri";
import { categoriesData } from "../../../../constant/categoryData";
import Categories from "@/components/admin/Categories";

export interface SearchInputProps {
  toggleSearchField: () => void;
  handleSubmit: (e:any) => void;
  searchField: boolean;
  query: string;
  cate: string;
  setCate: (cate: string) => void;
  setQuery: (query: string) => void;
}

const SearchInput = ({
  cate,
  handleSubmit,
  query,
  searchField,
  setCate,
  setQuery,
  toggleSearchField,
}: SearchInputProps) => {
  return (
    <form
      className='flex items-center mx-auto relative pt-8'
      onSubmit={handleSubmit}>
      <div className='flex items-center w-full'>
        <input
          type='text'
          onChange={(e) => setQuery(e.target.value.trimStart())}
          className={
            searchField
              ? "w-full relative text-sm focus:outline-none pl-3 focus:ring-0 text-slate-600 bg-transparent h-[5vh] border-b-2 border-b-slate-400 duration-300 placeholder:opacity-80 delay-100 transition-all placeholder:font-normal placeholder:text-slate-600"
              : "translate-x-[30vw] opacity-0 transition-all"
          }
          placeholder={"Start typing..."}
        />

        <div
          className={
            searchField
              ? "duration-300 delay-100 transition-all opacity-100"
              : "duration-300 translate-x-[30vw] opacity-0 delay-100 transition-all"
          }>
          {query && (
            <Categories
              setCategory={(selectedCategory) => setCate(selectedCategory)}
              category={cate}
              categoriesData={categoriesData.map((item) => item.category)} // Pass only category names
            />
          )}
        </div>
      </div>
      <RiCloseLargeFill
        className={
          searchField
            ? "text-slate-600 cursor-pointer pr-1 absolute right-0  hover:text-slate-900 transition-all h-[5vh] duration-300 delay-150"
            : "opacity-0 translate-x-[30vw]"
        }
        onClick={toggleSearchField}
      />
    </form>
  );
};

export default SearchInput;
