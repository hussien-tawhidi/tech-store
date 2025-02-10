"use client"

import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { ProductDetailsProps, ProductProps } from "../../../types";
import { filterProducts, getUniqueBrands, getUniqueColors, getUniqueNetworkTypes, getUniqueRams, getUniqueRoms, sortProducts } from "@/lib/filter";
import Image from "next/image";
import SortMenu from "../features/SortMenu";
import Loading from "../Loading";
import StoreOffCard from "../home/store-off/StoreOffCard";

const GiftCard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortType, setSortType] = useState("");
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
        try {
          setLoading(true);
          const { data } = await axios.get("/api/admin/products");

          const filteredProductsByCategory = data.products.filter(
            (product: ProductDetailsProps) => product.category === "Gift Cards"
          );
          setData(filteredProductsByCategory);
        } catch (error) {
          console.log(error, "In gift card");
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []);
    return (
      <div>
        <div className='px-10 py-5'>
          <div className='relative group flex items-center justify-center text-slate-50'>
            <p className='h-1 font-semibold md:text-xl text-sm absolute z-10'>
              Tech store
              <span className='block lg:text-5xl md:text-3xl sm:text-2xl text-xl font-bold'>
                Gift cards
              </span>
            </p>
            <span className='absolute z-0 group-hover:bg-black/60 cursor-pointer transition-all duration-200 inset-0 bg-black/50  h-full w-full'></span>
            <Image
              src={"/features/giftpage-banner.jpg"}
              alt='gift banner image'
              height={1000}
              width={2000}
              className='lg:h-[40vh] w-full object-cover'
            />
          </div>
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
          {loading ? (
            <Loading />
          ) : (
            <div className='grid mt-10 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 md:gap-5 gap-2'>
              {filteredProducts.map((product: ProductProps) => (
                <StoreOffCard
                  key={product._id}
                  _id={product._id}
                  off={product.discountPrice}
                  description={product.description || ""}
                  loading={loading}
                  price={product.price || 0}
                  src={product?.images[0]?.url}
                  title={product.name}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
}

export default GiftCard