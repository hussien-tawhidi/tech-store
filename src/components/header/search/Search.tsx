import { Button } from "@/components/ui/button";
import SearchInput from "./SearchInput";
import { MdClear } from "react-icons/md";
import { productProps } from "@/components/home/laptops/Laptops";
import NotFoundResult from "./NotFoundResult";
import Loading from "./Loading";
import SearchResult from "./SearchResult";
import SearchSuggestion from "./SearchSuggestion";

interface Props {
  toggleSearchField: () => void;
  handleSubmit: (e: any) => void;
  searchField: boolean;
  query: string;
  cate: string;
  setCate: (cate: string) => void;
  setQuery: (query: string) => void;
    loading: boolean;
    results: productProps[];
}
const Search = ({
  searchField,
  cate,
  setQuery,
  setCate,
  handleSubmit,
  query,
  toggleSearchField,
  loading,results
}: Props) => {
  
  return (
    <div
      className={
        searchField
          ? "fixed transition-all duration-300 opacity-100 top-0 left-0 right-0 backdrop-blur-sm bg-slate-900/50 pointer-events-auto h-screen overflow-hidden z-50"
          : "fixed top-0 transition-all duration-300 opacity-0 right-[30vw] pointer-events-none h-screen overflow-hidden"
      }
      onClick={toggleSearchField}>
      <div className='md:w-[50vw] sm:w-[80vw] w-[100vw] mx-auto bg-white rounded-br-3xl rounded-bl-3xl'>
        <div onClick={(e) => e.stopPropagation()}>
          <SearchInput
            cate={cate}
            handleSubmit={handleSubmit}
            query={query}
            searchField={searchField}
            setCate={setCate}
            setQuery={setQuery}
            toggleSearchField={toggleSearchField}
          />
          {cate && (
            <Button onClick={() => setCate("")}>
              <MdClear />
              {cate}
            </Button>
          )}
          {!loading && query && results.length === 0 && (
            <NotFoundResult cate={cate} query={query} />
          )}
          {loading && (
            <div className='flex justify-center items-center my-5'>
              <div className='mb-5'>
                <p>Please wait ...</p>
                <Loading />
              </div>
            </div>
          )}
          {results.length > 0 ? (
            <SearchResult
              cate={cate}
              query={query}
              results={results}
              toggleSearchField={toggleSearchField}
            />
          ) : (
            <SearchSuggestion
              searchField={searchField}
              toggleSearchField={toggleSearchField}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
