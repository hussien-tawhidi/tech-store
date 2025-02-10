"use client";
import { useEffect, useState } from "react";
import Search from "./Search";

interface Props {
  searchField: boolean;
  setSearchField: (value: boolean) => void;
}

const SearchConainer = ({ searchField, setSearchField }: Props) => {
  const [cate, setCate] = useState(""); // Selected category
  const [query, setQuery] = useState(""); // Search query
  const [results, setResults] = useState([]); // Search results
  const [loading, setLoading] = useState(false); // Loading state

  const toggleSearchField = () => {
    setSearchField(!searchField);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!query.trim() && !cate) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      setLoading(true);

      try {
        const queryParams = new URLSearchParams();
        if (query.trim()) queryParams.append("query", query.trim());
        if (cate) queryParams.append("category", cate);

        const res = await fetch(`/api/search/product-search?${queryParams}`);
        if (!res.ok) throw new Error(`Error: ${res.status}`);

        const data = await res.json();
        setResults(data);
      } catch (err) {
        console.error("Failed to fetch search results:", err);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(fetchResults, 500); // Adjust debounce time
    return () => clearTimeout(debounce);
  }, [query, cate]); // Run when `query` or `cate` changes

  return (
    <Search
      cate={cate}
      handleSubmit={handleSubmit}
      loading={loading}
      query={query}
      results={results}
      searchField={searchField}
      setCate={setCate}
      setQuery={setQuery}
      toggleSearchField={toggleSearchField}
    />
  );
};

export default SearchConainer;
