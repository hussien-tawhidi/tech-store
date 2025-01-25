"use client";
import OnlyAvailable from "./OnlyAvailable";
import PriceFilter from "./PriceFilter";
import BrandFilter from "./BrandFilter";
import RamFilter from "./Ram";
import Roms from "./Roms";
import NetWork from "./NetWork";
import ColorsFilter from "./ColorsFilter";

interface Props {
  onlyAvailable: boolean;
  setOnlyAvailable: (onlyAvailable: boolean) => void;
  minPrice: number;
  maxPrice: number;
  allBrands: string[];
  setMinPrice: (minPrice: number) => void;
  setMaxPrice: (maxPrice: number) => void;
  selectedBrands: string[];
  setSelectedBrands: (selectedBrands: string[]) => void;
  rams: string[];
  roms: string[];
  allNetworkTypes: string[];
  selectedNetWork: string[];
  setSelectedNetWork: (selectedNetWork: string[]) => void;
  selectedRam: string[];
  setSelectedRam: (selectedRam: string[]) => void;
  selectRoms: string[];
  setSelectRoms: (selectRoms: string[]) => void;
  colors: [string,string][];
  selectedColor: string;
  setSelectedColor: (selectedColor: string) => void;
}

const Filter = ({
  allNetworkTypes,
  maxPrice,
  minPrice,
  onlyAvailable,
  rams,
  roms,
  selectedBrands,
  selectedNetWork,
  setMaxPrice,
  setMinPrice,
  setOnlyAvailable,
  setSelectedBrands,
  selectedRam,
  setSelectedNetWork,
  allBrands,
  setSelectedRam,
  selectRoms,
  setSelectRoms,
  colors,
  setSelectedColor,
  selectedColor,
}: Props) => {
  return (
    <div className='w-full'>
      <OnlyAvailable
        onlyAvailable={onlyAvailable}
        setOnlyAvailable={setOnlyAvailable}
      />
      <PriceFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />
      <BrandFilter
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
        brands={allBrands}
      />
      <RamFilter
        ram={rams}
        selectRam={selectedRam}
        setSelectRam={setSelectedRam}
      />
      <Roms roms={roms} selectRom={selectRoms} setSelectRom={setSelectRoms} />
      <NetWork
        networks={allNetworkTypes}
        selectedNetWork={selectedNetWork}
        setSelectedNetWork={setSelectedNetWork}
      />
      <ColorsFilter
        colors={colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
    </div>
  );
};


export default Filter;
