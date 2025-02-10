"use client";
import SortMenu from "../features/SortMenu";
import { productProps } from "../home/laptops/Laptops";
import LaptopsCard from "../home/laptops/LaptopsCard";
import { TechStoreOffProps } from "../../../types";
import Filter from "../features/filters/Filter";

const TechStoreOff = ({
  allBrands,
  allNetworkTypes,
  colors,
  maxPrice,
  minPrice,
  onlyAvailable,
  rams,
  roms,
  selectRoms,
  selectedBrands,
  selectedColor,
  selectedNetWork,
  selectedRam,
  setMaxPrice,
  setMinPrice,
  setOnlyAvailable,
  setSelectRoms,
  setSelectedBrands,
  setSelectedColor,
  setSelectedNetWork,
  setSelectedRam,
  setSortType,
  sortType,
  data,
}: TechStoreOffProps) => {
  return (
    <div className='md:mt-12 mt-3 relative md:mx-10 sm:mx-5 mx-2'>
      <SortMenu
        setSortType={setSortType}
        sortType={sortType}
        allBrands={allBrands}
        allNetworkTypes={allNetworkTypes}
        maxPrice={maxPrice}
        minPrice={minPrice}
        onlyAvailable={onlyAvailable}
        rams={rams}
        roms={roms}
        selectRoms={selectRoms}
        selectedBrands={selectedBrands}
        selectedNetWork={selectedNetWork}
        selectedRam={selectedRam}
        setMaxPrice={setMaxPrice}
        setMinPrice={setMinPrice}
        setOnlyAvailable={setOnlyAvailable}
        setSelectRoms={setSelectRoms}
        setSelectedBrands={setSelectedBrands}
        setSelectedNetWork={setSelectedNetWork}
        setSelectedRam={setSelectedRam}
        products={data.length}
        colors={colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <div className='flex'>
        <div className='md:flex h-full hidden w-full'>
          <Filter
            allBrands={allBrands}
            allNetworkTypes={allNetworkTypes}
            maxPrice={maxPrice}
            minPrice={minPrice}
            onlyAvailable={onlyAvailable}
            rams={rams}
            roms={roms}
            selectRoms={selectRoms}
            selectedBrands={selectedBrands}
            selectedNetWork={selectedNetWork}
            selectedRam={selectedRam}
            setMaxPrice={setMaxPrice}
            setMinPrice={setMinPrice}
            setOnlyAvailable={setOnlyAvailable}
            setSelectRoms={setSelectRoms}
            setSelectedBrands={setSelectedBrands}
            setSelectedNetWork={setSelectedNetWork}
            setSelectedRam={setSelectedRam}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            colors={colors}
          />
        </div>
        <div className='mt-5'>
          {!data.length ? (
            <div className='text-center'>No products match your filters.</div>
          ) : (
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2'>
              {data.map((product: productProps) => (
                <LaptopsCard
                  key={product._id}
                  descriptions={product.description || ""}
                  brand={product.brand}
                  discount={product.discountPrice}
                  id={product._id}
                  price={product.price || 0}
                  name={product.name}
                  image={product?.images?.[0]?.url}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechStoreOff;
