"use client";

import Image from "next/image";
import Menu from "@/components/home/menu/Menu";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { productProps } from "@/components/home/laptops/Laptops";
import toast from "react-hot-toast";
import Loading from "@/components/header/search/Loading";
import TechStoreOff from "@/components/tech-store-off/TechStoreOff";
import {
  getUniqueBrands,
  getUniqueColors,
  getUniqueNetworkTypes,
  getUniqueRams,
  getUniqueRoms,
} from "@/lib/filter";
import Head from "next/head";

const TechStoreOffPage = () => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("");
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get("/api/admin/products");

      try {
        const filteredProductsByMostOff = data.products.map(
          (product: productProps) => {
            // Calculate the discount percentage
            const discountPercentage =
              ((product.price - product.discountPrice) / product.price) * 100;
            return { ...product, discountPercentage };
          }
        );
        filteredProductsByMostOff.sort(
          (a: productProps, b: productProps) =>
            b.discountPrice - a.discountPrice
        );
        setData(filteredProductsByMostOff);
      } catch (error) {
        toast.error(error + "error in fectch products with most off");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='pt-16 relative'>
        <Head>
          <title>My page title</title>
        </Head>
        <Image
          src={"/features/store-off.jpg"}
          alt='store off'
          width={1000}
          height={3000}
          className='object-cover relative w-full'
        />
        <div className='md:-mt-36 -mt-0'>
          <Menu buttonsShow={false} titleShow={false} />
        </div>
        {loading && <Loading />}

        <TechStoreOff
          allBrands={allBrands}
          allNetworkTypes={allNetworkTypes}
          colors={allColors}
          data={data}
          maxPrice={maxPrice}
          minPrice={minPrice}
          onlyAvailable={onlyAvailable}
          rams={allRams}
          roms={allRoms}
          selectRoms={selectRoms}
          selectedBrands={selectedBrands}
          selectedColor={selectedColor}
          selectedNetWork={selectedNetWork}
          selectedRam={selectRam}
          setMaxPrice={setMaxPrice}
          setMinPrice={setMinPrice}
          setOnlyAvailable={setOnlyAvailable}
          setSelectRoms={setSelectRoms}
          setSelectedBrands={setSelectedBrands}
          setSelectedColor={setSelectedColor}
          setSelectedNetWork={setSelectedNetWork}
          setSelectedRam={setSelectRam}
          setSortType={setSortType}
          sortType={sortType}
        />
      </div>
    </>
  );
};

export default TechStoreOffPage;
