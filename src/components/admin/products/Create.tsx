"use client";
import TextInput from "@/components/Input";
import TextareaInput from "@/components/TextareaInput";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdUploadFile } from "react-icons/md";

const Create = () => {
  const router = useRouter();
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState<number | string>(""); // Allow empty string for input binding
  const [discount, setDiscount] = useState<number | string>("");
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState<string>(""); // Comma-separated string
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState<number | string>("");
  const [sku, setSku] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Example payload creation
    const payload = {
      title,
      price: Number(price),
      discount: Number(discount),
      description,
      hashtags: hashtags.split(",").map((tag) => tag.trim()),
      category,
      subcategory,
      brand,
      stock: Number(stock),
      sku,
      createdBy,
      image,
    };

    try {
      // Handle form submission logic, e.g., API call
      console.log("Form Submitted", payload);

      // Navigate or show success feedback
      // router.push("/success");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className='w-full' onSubmit={handleSubmit}>
      <TextInput
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        id='title'
        type='text'
        placeholder='Title here ...'
      />
      <TextareaInput
        className='mt-4'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder='Description here ...'
      />
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <TextInput
          type='number'
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          placeholder='Price'
        />
        <TextInput
          type='number'
          onChange={(e) => setDiscount(e.target.value)}
          value={discount}
          placeholder='Discount Price'
        />
        <TextInput
          type='text'
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          placeholder='Category'
        />
        <TextInput
          type='text'
          onChange={(e) => setSubcategory(e.target.value)}
          value={subcategory}
          placeholder='Subcategory'
        />
        <TextInput
          type='text'
          onChange={(e) => setBrand(e.target.value)}
          value={brand}
          placeholder='Brand'
        />
        <TextInput
          type='number'
          onChange={(e) => setStock(e.target.value)}
          value={stock}
          placeholder='Stock'
        />
      </div>
      <TextInput
        type='text'
        onChange={(e) => setSku(e.target.value)}
        value={sku}
        placeholder='SKU (e.g., model-a1-00)'
      />
      <div className='flex items-center justify-evenly gap-3 mt-3'>
        {/* <div className="w-[60px] h-[60px] flex items-center justify-center border transition-all rounded-full"> */}
        <label
          htmlFor='file'
          className='w-[60px] h-[60px] flex items-center justify-center border-[2px] transition-all rounded-full cursor-pointer hover:bg-gray-400 gap-1'>
          <MdUploadFile className='text-3xl text-gray-600 dark:text-gray-300' />
          <input
            type='file'
            onChange={handleImageUpload}
            placeholder='Upload Image'
            accept='image/*'
            className='my-2 hidden'
            id='file'
          />
        </label>
        {/* </div> */}
        <Button variant='outline' type='submit' disabled={loading}>
          {loading ? "Wait..." : "Create"}
        </Button>
      </div>
    </form>
  );
};

export default Create;
