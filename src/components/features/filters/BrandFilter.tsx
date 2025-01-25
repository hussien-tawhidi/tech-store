"use client"

import FilterDropdown from "./FilterDropdown";

const BrandFilter = ({
  selectedBrands,
  setSelectedBrands,
  brands,
}: {
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
  brands: string[];
}) => (
  <FilterDropdown
    title='Brand'
    options={brands}
    selectedOptions={selectedBrands}
    setSelectedOptions={setSelectedBrands}
  />
);

export default BrandFilter;
