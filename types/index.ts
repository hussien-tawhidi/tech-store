import { ChangeEvent, FormEvent } from "react";

export interface ProductProps {
  _id: string;
  name: string;
  brand: string;
  category: string | null;
  description: string | null;
  price: number | null;
  discount: number;
  stock: number;
  rating: number;
  images: { url: string; _id: string }[];
  availabilityStatus: string;
  warrantyInformation: string;
  returnPolicy: string;
  shippingInformation: string;
  features: string[];
  colors: { name: string; hex: string }[];
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
  setCategory: (value: string) => void;

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
