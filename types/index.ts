import { productProps } from "@/components/home/laptops/Laptops";
import { ChangeEvent, FormEvent } from "react";

export interface ProductProps {
  _id: string;
  name: string;
  brand: string;
  category: string | null;
  description: string | null;
  price: number | null;
  discountPrice: number;
  stock: number;
  rating: number;
  availability: string | null;
  images: { url: string; _id: string }[];
  availabilityStatus: string;
  warrantyInformation: string;
  returnPolicy: string;
  shippingInformation: string;
  features: string[];
  colors: { name: string; hex: string }[];
  dateAdded?: any;
  offers?: number;
  sales?: any;
  subCategories?: string;
}

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface ReviewComment {
  _id: string;
  user: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

interface Review {
  reviewer: string;
  comment: string;
  rating: number;
}
export interface HeroProductProps {
  feature: boolean | null;
  _id?: string;
  name: string;
  id: number;
  title: string;
  description: string;
  price: number | 0;
  discountPercentage: number;
  category: string;
  brand: string;
  stock: number;
  availabilityStatus: string;
  tags: string[];
  thumbnail: string;
  images: string[];
  dimensions: Dimensions;
  weight: number;
  minimumOrderQuantity: number;
  rating: number;
  returnPolicy: string;
  shippingInformation: string;
  warrantyInformation: string;
  sku: string;
  meta: Meta;
  reviews: Review[];
  banner?: string;
}

export interface LoginUserProps {
  handleSubmit: (e: any) => void;
  handleUserEmailChange: (e: any) => void;
  handlePasswordChange: (e: any) => void;
  email: string;
  password: string;
  isLoading: boolean;
}

export interface ProductDetailsProps {
  title: string;
  brand: string;
  id: string;
  category: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
  rating: number;
  quantity: number | undefined;
  thumbnail: string;
  images: { url: string; _id: string }[];
  availabilityStatus: string;
  warrantyInformation: string;
  returnPolicy: string;
  shippingInformation: string;
  features: string[];
  colors: { name: string; hex: string }[];
}
export interface AddToCartButtonProps {
  id: string;
  name: string;
  price: number;
}

interface ColorType {
  name: string;
  hex: string;
}

export interface createProductFormPropsTypes {
  name: string;
  setName: (value: string) => void;

  description: string;
  setDescription: (value: string) => void;

  features: string;
  setFeatures: (value: string) => void;

  price: number | string;
  setPrice: (value: number | string) => void;

  discount: number | string;
  setDiscount: (value: number | string) => void;

  category: string;
  setCategory: any;

  stock: number | string;
  setStock: (value: number | string) => void;

  subcategory: string;
  setSubcategory: (value: string) => void;

  brand: string;
  setBrand: (value: string) => void;

  sku: string;
  setSku: (value: string) => void;

  colors: ColorType[];
  handleColorChange: (color: ColorType) => void;

  handleImageChange: (files: File[]) => void;
  handleBannerChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;

  loading: boolean;
}

export interface SubmitProductParams {
  name: string;
  banner: File | null;
  price: number | string;
  discount: number | string;
  description: string;
  category: string;
  subcategory: string;
  brand: string;
  stock: number | string;
  sku: string;
  createdBy: string;
  features: string;
  colors: ColorType[];
  image: File[] | null;
}

export interface upateFormProps {
  // General Form Fields
  handleSubmit: (e: React.FormEvent) => void;
  name: string;
  setName: (name: string) => void;
  description: string;
  setDescription: (description: string) => void;
  features: string;
  setFeatures: (features: string) => void;
  price: string;
  setPrice: (price: string) => void;
  handleImageChange: (files: File[]) => void;
  discount: string;
  setDiscount: (discount: string) => void;
  category: string;
  setCategory: (category: string) => void;
  stock: string;
  setStock: (stock: string) => void;
  error: string;
  setError: (error: string) => void;
  formLoading: boolean;
  data: any;
  setSubcategory: (subCategory: string) => void;
  subCategory: string;
  brand: string;
  setBrand: (brand: string) => void;
  setSku: (sku: string) => void;
  sku: string;
  // Image Handling Props
  images: any[];
  setImages?: (images: any[]) => void;
  selectedImageId: string;
  setSelectedImageId: (id: string) => void;
  handleDeleteImage: (id: string) => Promise<void>;
  handleUpdate: () => Promise<void>;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imageLoading: boolean;
}

export interface sortMenuProps {
  sortType: string;
  setSortType: (sortType: string) => void;
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
  products?: number;
  colors: [string, string][];
  selectedColor: string;
  setSelectedColor: (selectedColor: string) => void;
}

export interface TechStoreOffProps {
  sortType: string;
  setSortType: (sortType: string) => void;
  onlyAvailable: boolean;
  setOnlyAvailable: (onlyAvailable: boolean) => void;
  minPrice: number;
  maxPrice: number;
  allBrands: string[]|any[];
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

  colors: [string, string][];
  selectedColor: string;
  setSelectedColor: (selectedColor: string) => void;
  data: productProps[];
}