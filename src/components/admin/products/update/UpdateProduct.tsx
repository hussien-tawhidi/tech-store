"use client";

import { deleteImage } from "@/actions/images";
import { fetchProductById } from "@/actions/products";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UpdateForm from "./UpdateForm";

const Update = ({ productId }: { productId: string }) => {
  const [data, setData] = useState<any>({});
  const [images, setImages] = useState([]);
  const [formLoading, setFormLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedImageId, setSelectedImageId] = useState("");
  const [newImage, setNewImage] = useState<File | null>(null);
  const [addImage, setAddImage] = useState<File[] | null>([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    features: "",
    discount: "",
    stock: "",
    price: "",
    category: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (files: File[]) => {
    setAddImage(files);
  };

  useEffect(() => {
    const fetchData = async () => {
      const products = await fetchProductById(productId);
      const fetchedData = products.data;

      // Set initial values
      setData(fetchedData);
      setImages(fetchedData.images || []);
      setFormData({
        name: fetchedData.name || "",
        description: fetchedData.description || "",
        features: fetchedData.features || "",
        price: fetchedData.price?.toString() || "",
        discount: fetchedData.discount?.toString() || "",
        category: fetchedData.category || "",
        stock: fetchedData.stock?.toString() || "",
      });
    };
    fetchData();
  }, [productId]);

  const validateForm = () => {
    if (!formData.name || !formData.price || !formData.category) {
      setError("Name, price, and category are required fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormLoading(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("productId", productId);
      Object.entries(formData).forEach(([key, value]) => {
        if (value) formDataToSend.append(key, value);
      });
      addImage?.forEach((file) => formDataToSend.append("addImage", file));

      const response = await fetch(`/api/admin/products`, {
        method: "PATCH",
        body: formDataToSend,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to update.");

      toast.success("Product updated successfully!");
      setData(result.product);
      setImages(result.product.images || []);
    } catch (error) {
      console.error("Update Error:", error);
      toast.error("Failed to update product.");
    } finally {
      setFormLoading(false);
    }
  };

  const handleDeleteImage = async (imageIdToDelete: string) => {
    setImageLoading(true);
    try {
      const result = await deleteImage(productId, imageIdToDelete);
      setImages(result.product.images);
      toast.success("Image deleted successfully!");
    } catch (error) {
      console.error("Delete Image Error:", error);
      toast.error("Failed to delete image.");
    } finally {
      setImageLoading(false);
    }
  };

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

      setImages(response.product.images);
      setSelectedImageId("");
      setNewImage(null);
      toast.success("Image updated successfully.");
    } catch (err: any) {
      console.error("Image Update Error:", err);
      toast.error(err.message || "Failed to update image.");
    } finally {
      setImageLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewImage(e.target.files[0]);
    }
  };

  const convertToBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <UpdateForm
      handleImageChange={handleImageChange}
      data={data}
      handleDeleteImage={handleDeleteImage}
      handleFileChange={handleFileChange}
      handleUpdate={handleUpdate}
      selectedImageId={selectedImageId}
      setSelectedImageId={setSelectedImageId}
      category={formData.category}
      description={formData.description}
      discount={formData.discount}
      features={formData.features}
      handleSubmit={handleSubmit}
      images={images}
      imageLoading={imageLoading}
      name={formData.name}
      price={formData.price}
      stock={formData.stock}
      formLoading={formLoading}
      setError={setError}
      error={error}
      handleInputChange={handleInputChange}
    />
  );
};

export default Update;
