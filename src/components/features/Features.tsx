"use client";

import { useState, useEffect, useMemo } from "react";
import { ProductProps } from "../../../types";
import SortMenu from "./SortMenu";
import Loading from "../Loading";
import Filter from "./filters/Filter";
import { fetchProductsByCategory } from "@/actions/products";
import StoreOffCard from "../home/store-off/StoreOffCard";
import "simplebar-react/dist/simplebar.min.css";
import {
  filterProducts,
  getUniqueBrands,
  getUniqueColors,
  getUniqueNetworkTypes,
  getUniqueRams,
  getUniqueRoms,
  sortProducts,
} from "@/lib/filter";

const Features = ({ featuresName }: { featuresName?: string }) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);

  // sortproducts
  const [sortType, setSortType] = useState("");

  // filter products
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectRam, setSelectRam] = useState<string[]>([]);
  const [selectedNetWork, setSelectedNetWork] = useState<string[]>([]);
  const [selectRoms, setSelectRoms] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10000);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const allBrands = useMemo(() => getUniqueBrands(products), [products]);
  const allRams = useMemo(() => getUniqueRams(products), [products]);
  const allRoms = useMemo(() => getUniqueRoms(products), [products]);
  const allNetworkTypes = useMemo(
    () => getUniqueNetworkTypes(products, ["2G", "3G", "4G", "5G"]),
    [products]
  );
  const allColors = useMemo(() => getUniqueColors(products), [products]);

  const filteredProducts = useMemo(() => {
    const filtered = filterProducts({
      selectedColor,
      products,
      onlyAvailable,
      selectedBrands,
      selectRam,
      selectRoms,
      selectedNetWork,
      minPrice,
      maxPrice,
    });

    return sortProducts(filtered, sortType);
  }, [
    products,
    onlyAvailable,
    selectedBrands,
    selectRam,
    selectRoms,
    selectedNetWork,
    minPrice,
    maxPrice,
    sortType,
    selectedColor,
  ]);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const products = await fetchProductsByCategory({ featuresName });
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [featuresName]);

  return (
    <div className='p-4'>
    
      <SortMenu
        setSortType={setSortType}
        sortType={sortType}
        allBrands={allBrands}
        allNetworkTypes={allNetworkTypes}
        maxPrice={maxPrice}
        minPrice={minPrice}
        onlyAvailable={onlyAvailable}
        rams={allRams}
        roms={allRoms}
        selectRoms={selectRoms}
        selectedBrands={selectedBrands}
        selectedNetWork={selectedNetWork}
        selectedRam={selectRam}
        setMaxPrice={setMaxPrice}
        setMinPrice={setMinPrice}
        setOnlyAvailable={setOnlyAvailable}
        setSelectRoms={setSelectRoms}
        setSelectedBrands={setSelectedBrands}
        setSelectedNetWork={setSelectedNetWork}
        setSelectedRam={setSelectRam}
        products={products.length}
        colors={allColors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />

      <div className='flex gap-4 w-full'>
        <div className='md:flex hidden lg:w-1/4 w-2/4'>
          <Filter
            allBrands={allBrands}
            allNetworkTypes={allNetworkTypes}
            maxPrice={maxPrice}
            minPrice={minPrice}
            onlyAvailable={onlyAvailable}
            rams={allRams}
            roms={allRoms}
            selectRoms={selectRoms}
            selectedBrands={selectedBrands}
            selectedNetWork={selectedNetWork}
            selectedRam={selectRam}
            setMaxPrice={setMaxPrice}
            setMinPrice={setMinPrice}
            setOnlyAvailable={setOnlyAvailable}
            setSelectRoms={setSelectRoms}
            setSelectedBrands={setSelectedBrands}
            setSelectedNetWork={setSelectedNetWork}
            setSelectedRam={setSelectRam}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            colors={allColors}
          />
        </div>
        <div className='mt-4'>
          {loading ? (
            <Loading />
          ) : filteredProducts.length > 0 ? (
            <div className='grid md:gap-3 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-2'>
              {filteredProducts.map((product) => (
                <StoreOffCard
                  key={product._id}
                  _id={product._id}
                  description={product.description || ""}
                  off={product.discountPrice}
                  price={product.price || 0}
                  src={product.images[1].url}
                  title={product.name}
                  loading={loading}
                  imageClassName='h-[150px] w-[150px] overflow-hidden'
                />
              ))}
            </div>
          ) : (
            <p>No products match the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;
