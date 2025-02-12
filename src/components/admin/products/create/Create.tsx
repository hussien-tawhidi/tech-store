"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import CreateForm from "./CreateForm";
import { createProductFunction } from "@/actions/products";
import { useSession } from "next-auth/react";

const Create = () => {
  const router = useRouter();
  const [image, setImage] = useState<File[] | null>([]);
  const [banner, setBanner] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | string>("");
  const [discount, setDiscount] = useState<number | string>("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<string>("");

  const [subcategory, setSubcategory] = useState("");
  const [brand, setBrand] = useState("other");
  const [stock, setStock] = useState<number | string>("");
  const [sku, setSku] = useState("");
  const [features, setFeatures] = useState<string>("");
  const [colors, setColors] = useState<{ name: string; hex: string }[]>([]);
  const [createdBy, setCreatedBy] = useState("");
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?._id) {
      setCreatedBy(session.user._id);
    }
  }, [session]); // Only update when session data changes

  const handleImageChange = (files: File[]) => {
    setImage(files);
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files?.[0] || null;
    setBanner(files);
  };

  const handleColorChange = (color: { name: string; hex: string }) => {
    setColors((prevColors) => {
      const exists = prevColors.some((c) => c.name === color.name);
      if (exists) {
        return prevColors.filter((c) => c.name !== color.name);
      } else {
        return [...prevColors, color];
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const productData = {
      name,
      banner,
      price,
      discount,
      description,
      category,
      subcategory,
      brand,
      stock,
      sku,
      createdBy,
      features,
      colors,
      image,
    };

    await createProductFunction(productData, setLoading, router);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <CreateForm
          name={name}
          setName={setName}
          price={price}
          setPrice={setPrice}
          description={description}
          setDescription={setDescription}
          brand={brand}
          setBrand={setBrand}
          category={category}
          setCategory={setCategory}
          colors={colors}
          discount={discount}
          setDiscount={setDiscount}
          features={features}
          setFeatures={setFeatures}
          handleBannerChange={handleBannerChange}
          handleColorChange={handleColorChange}
          handleImageChange={handleImageChange}
          handleSubmit={handleSubmit}
          loading={loading}
          setSku={setSku}
          setStock={setStock}
          setSubcategory={setSubcategory}
          sku={sku}
          stock={stock}
          subcategory={subcategory}
        />
      )}
    </>
  );
};

export default Create;
