"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import {
  audioBrands,
  beautyBrands,
  computerBrands,
  gamingBrands,
  headphoneBrands,
  homeApplianceBrands,
  jewelryBrands,
  laptopTabletBrands,
  networkConnectivityBrands,
  phoneBrands,
  videoBrands,
  watchBrands,
} from "../../../../constant/categoryData";

interface props {
  brand: string;
  category: string;
  setBrand(brand: string): void;
}

function SelectBrands({ brand, setBrand, category }: props) {
  const [brands, setBrands] = useState<{ name: string; link: string }[]>([]);

  useEffect(() => {
    let selectedBrands: { name: string; link: string }[] = [];
    switch (category) {
      case "smartphone":
        selectedBrands = phoneBrands;
        break;

      case "handsfree,headphone":
        selectedBrands = headphoneBrands;
        break;

      case "laptop,tablet,ipad ...":
        selectedBrands = laptopTabletBrands;
        break;

      case "watches":
        selectedBrands = watchBrands;
        break;

      case "computer":
        selectedBrands = computerBrands;
        break;

      case "networks & connectivities":
        selectedBrands = networkConnectivityBrands;
        break;

      case "home appliance":
        selectedBrands = homeApplianceBrands;
        break;

      case "audio":
        selectedBrands = audioBrands;
        break;

      case "video":
        selectedBrands = videoBrands;
        break;

      case "gaming":
        selectedBrands = gamingBrands;
        break;

      case "jeweleries":
        selectedBrands = jewelryBrands;
        break;

      case "beauty":
        selectedBrands = beautyBrands; // No brands available for these categories
        break;

      default:
        console.warn("Unknown category:", category);
        selectedBrands = []; // Fallback for undefined or unknown categories
        break;
    }
    setBrands(selectedBrands);
  }, [category]);

  return (
    <Select onValueChange={(value) => setBrand(value)} value={brand}>
      <SelectTrigger className='w-full border border-slate-200 text-slate-700 placeholder:text-slate-400 rounded pl-3 pr-8 py-2 shadow-sm focus:ring-1 focus:ring-slate-400 focus:border-slate-400 hover:border-slate-400 transition duration-300'>
        <SelectValue placeholder='Select a brand' />
      </SelectTrigger>
      <SelectContent className='bg-slate-50'>
        {brands.map((brandOption, index) => (
          <SelectItem key={index} value={brandOption.name}>
            {brandOption.name.charAt(0).toUpperCase() +
              brandOption.name.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SelectBrands;
