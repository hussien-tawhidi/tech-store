"use client";

import { deleteImage } from "@/actions/images";
import { fetchProductById } from "@/actions/products";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UpdateForm from "./UpdateForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";

const Update = ({ productId }: { productId: string }) => {
  const [brand, setBrand] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [sku, setSku] = useState("");

  const [data, setData] = useState<any>({});
  const [images, setImages] = useState([]);
  const [formLoading, setFormLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [discount, setDiscount] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [selectedImageId, setSelectedImageId] = useState("");
  const [newImage, setNewImage] = useState<File | null>(null);
  const [addImage, setAddImage] = useState<File[]>([]); // Change here to initialize as empty array

  const handleImageChange = (files: File[]) => {
    setAddImage(files);
    console.log(files);
  };

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchProductById(productId);
      const fetchedData = products.data;

      // Set initial values
      setData(fetchedData);
      setImages(fetchedData.images || []);
      setName(fetchedData.name || "");
      setDescription(fetchedData.description || "");
      setFeatures(fetchedData.features || "");
      setPrice(fetchedData.price?.toString() || "");
      setDiscount(fetchedData.discount?.toString() || "");
      setCategory(fetchedData.category || "");
      setStock(fetchedData.stock?.toString() || "");
    };
    fetchData();
  }, [productId]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      const formData = new FormData();
      formData.append("productId", productId);
      if (name) formData.append("name", name);
      if (addImage.length > 0) {
        // Add image files to the form data
        addImage.forEach((file) => formData.append("addImage", file));
      }
      if (price) formData.append("price", price);
      if (brand) formData.append("brand", brand);
      if (subCategory) formData.append("subCategory", subCategory);
      if (sku) formData.append("sku", sku);
      if (discount) formData.append("discount", discount);
      if (description) formData.append("description", description);
      if (category) formData.append("category", category);
      if (features) formData.append("features", features);
      if (stock) formData.append("stock", stock.toString());

      const response = await fetch(`/api/admin/products`, {
        method: "PATCH",
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to update.");
      toast.success("Product updated successfully!");
      setData(result.product); // Refresh product data
      setImages(result.product.images || []);
      setAddImage([]);
    } catch (error) {
      toast.error("Failed to update product.");
    } finally {
      setFormLoading(false);
    }
  };

  // Handle image deletion
  const handleDeleteImage = async (imageIdToDelete: string) => {
    setImageLoading(true);
    try {
      const result = await deleteImage(productId, imageIdToDelete);
      setImages(result.product.images); // Refresh images
      toast.success("Image deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete image.");
    } finally {
      setImageLoading(false);
    }
  };

  // Handle image update
  const handleUpdate = async () => {
    if (!selectedImageId || !newImage) {
      toast.error("Select an image and upload a new one.");
      return;
    }

    setImageLoading(true);
    try {
      const base64 = await convertToBase64(newImage);

      const res = await fetch("/api/admin/products/image", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: data?._id,
          imageIdToReplace: selectedImageId,
          newImage: base64,
        }),
      });

      const response = await res.json();
      if (!res.ok) throw new Error(response.error);

      setImages(response.product.images); // Update images
      setSelectedImageId(""); // Reset selected image
      setNewImage(null); // Clear file input
      toast.success("Image updated successfully.");
    } catch (err: any) {
      toast.error(err.message || "Failed to update image.");
    } finally {
      setImageLoading(false);
    }
  };

  // Handle new image selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewImage(e.target.files[0]);
    }
  };

  // Convert file to base64
  const convertToBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const backTo = () => {
    window.history.back();
  };

  return (
    <div className=''>
      <Button variant={"outline"} onClick={backTo}>
        <TbArrowBackUp /> Back to products
      </Button>
      <UpdateForm
        handleImageChange={handleImageChange}
        data={data}
        handleDeleteImage={handleDeleteImage}
        handleFileChange={handleFileChange}
        handleUpdate={handleUpdate}
        selectedImageId={selectedImageId}
        setSelectedImageId={setSelectedImageId}
        category={category}
        description={description}
        discount={discount}
        features={features}
        handleSubmit={handleSubmit}
        images={images}
        imageLoading={imageLoading}
        name={name}
        price={price}
        stock={stock}
        formLoading={formLoading}
        setCategory={setCategory}
        setDescription={setDescription}
        setDiscount={setDiscount}
        setFeatures={setFeatures}
        setName={setName}
        setPrice={setPrice}
        setStock={setStock}
        error={error}
        setError={setError}
        brand={brand}
        setBrand={setBrand}
        setSku={setSku}
        sku={sku}
        setSubcategory={setSubCategory}
        subCategory={subCategory}
      />
    </div>
  );
};

export default Update;
