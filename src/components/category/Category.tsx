"use client";

import { useEffect, useMemo, useState } from "react";
import { mainMenu } from "../../../constant";
import Brands from "./mobile/Brands";
import { ProductDetailsProps } from "../../../types";
import axios from "axios";
import LaptopsCard from "@/components/home/laptops/LaptopsCard";
import SortMenu from "@/components/features/SortMenu";
import {
  filterProducts,
  getUniqueBrands,
  getUniqueColors,
  getUniqueNetworkTypes,
  getUniqueRams,
  getUniqueRoms,
  sortProducts,
} from "@/lib/filter";
import Filter from "@/components/features/filters/Filter";

const Category = ({ menuCategory }: { menuCategory: string }) => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("");

  const category = mainMenu.find((cate) => cate.link === `/${menuCategory}`);
  const path = category?.category;

  // filter products
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectRam, setSelectRam] = useState<string[]>([]);
  const [selectedNetWork, setSelectedNetWork] = useState<string[]>([]);
  const [selectRoms, setSelectRoms] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10000);
  const [selectedColor, setSelectedColor] = useState<string>("");

  const allBrands = useMemo(() => getUniqueBrands(data), [data]);
  const allRams = useMemo(() => getUniqueRams(data), [data]);
  const allRoms = useMemo(() => getUniqueRoms(data), [data]);
  const allNetworkTypes = useMemo(
    () => getUniqueNetworkTypes(data, ["2G", "3G", "4G", "5G"]),
    [data]
  );
  const allColors = useMemo(() => getUniqueColors(data), [data]);

  const filteredProducts = useMemo(() => {
    const filtered = filterProducts({
      selectedColor,
      products: data,
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
    data,
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
    const fetchData = async () => {
      const { data } = await axios.get("/api/admin/products");

      const filteredProductsByCategory = data.products.filter(
        (product: ProductDetailsProps) => product.category === path
      );
      setData(filteredProductsByCategory);
    };
    fetchData();
  }, [path]);

  return (
    <div className='md:px-10'>
      <Brands menuCategory={path} />
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
        products={data.length}
        colors={allColors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <div className='flex gap-4 w-full'>
        <div className='md:flex h-full hidden w-full'>
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
            categoryName={path}
          />
        </div>
        <div className='mt-5'>
          <div>
            {!filteredProducts.length ? (
              <div className='text-center'>No products match your filters.</div>
            ) : (
              <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2'>
                {filteredProducts.map((product) => (
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
    </div>
  );
};

export default Category;
