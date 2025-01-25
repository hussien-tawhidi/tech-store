import { ProductProps } from "../../types";

interface FilterProductsParams {
  products: ProductProps[];
  onlyAvailable: boolean;
  selectedBrands: string[];
  selectRam: string[];
  selectRoms: string[];
  selectedNetWork: string[];
  selectedColor: string; // Added color filter
  minPrice: number;
  maxPrice: number;
}


export const filterProducts = ({
  products,
  onlyAvailable,
  selectedBrands,
  selectRam,
  selectRoms,
  selectedNetWork,
  selectedColor,
  minPrice,
  maxPrice,
}: FilterProductsParams): ProductProps[] => {
  let filtered = [...products];

  if (onlyAvailable) filtered = filtered.filter((p) => p.stock > 0);

  if (selectedBrands.length > 0)
    filtered = filtered.filter((p) => selectedBrands.includes(p.brand));

  if (selectRam.length > 0)
    filtered = filtered.filter((p) =>
      selectRam.some((ram) =>
        p.features.some((feature) => feature.includes(ram))
      )
    );

  if (selectRoms.length > 0)
    filtered = filtered.filter((p) =>
      selectRoms.some((rom) =>
        p.features.some((feature) => feature.includes(rom))
      )
    );

  if (selectedNetWork.length > 0)
    filtered = filtered.filter((p) =>
      selectedNetWork.some((net) =>
        p.features.some((feature) => feature.includes(net))
      )
    );

  if (selectedColor)
    filtered = filtered.filter((p) =>
      p.colors.some((color) => color.name === selectedColor)
    );

  return filtered.filter(
    (p) => (p.price ?? 0) >= minPrice && (p.price ?? 0) <= maxPrice
  );
};

export const sortProducts = (
  products: ProductProps[],
  sortType: string
): ProductProps[] => {
  const sorted = [...products]; // Avoid mutating the original array

  if (sortType === "mostSells") {
    return sorted.sort((a, b) => (b.sales ?? 0) - (a.sales ?? 0));
  }
  if (sortType === "mostOffers") {
    return sorted.sort((a, b) => (b.offers ?? 0) - (a.offers ?? 0));
  }
  if (sortType === "highPrice") {
    return sorted.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
  }
  if (sortType === "lowPrice") {
    return sorted.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
  }
  if (sortType === "newest") {
    return sorted.sort(
      (a, b) =>
        new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
    );
  }
  return sorted;
};


export const getUniqueBrands = (products: ProductProps[]) => [
  ...new Set(products.map((product) => product.brand)),
];

export const getUniqueRams = (products: ProductProps[]) => {
  return [
    ...new Set(
      products
        .flatMap((product) => product.features)
        .join(" ")
        .match(/(?<=\bRAM:\s?)\d+\s?GB\s?RAM/gi)
        ?.map((ram) => ram.toUpperCase())
        .filter(Boolean)
    ),
  ];
};

export const getUniqueRoms = (products: ProductProps[]) => {
  return [
    ...new Set(
      products
        .flatMap((product) => product.features)
        .join(" ")
        .match(/Internal:\s*([\d]+GB)/gi)
        ?.map((match) => match.replace(/Internal:\s*/, ""))
    ),
  ];
};

export const getUniqueNetworkTypes = (
  products: ProductProps[],
  validNetworkTypes: string[]
) => {
  return [
    ...new Set(
      products
        .flatMap((product) => product.features)
        .map((feature) => feature.match(/(\dG)/gi) || [])
        .flat()
        .filter((network) => validNetworkTypes.includes(network.toUpperCase()))
    ),
  ];
};
export const getUniqueColors = (products: ProductProps[]) => {
  const colorSet = new Map<string, string>(); // Use a Map to store color name and hex

  products.forEach((product) => {
    product.colors.forEach((color) => {
      if (!colorSet.has(color.name)) {
        colorSet.set(color.name, color.hex); // Store the hex value for each color name
      }
    });
  });

  return Array.from(colorSet.entries()); // Convert Map to an array of [name, hex] pairs
};
