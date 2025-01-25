"use client";

import TextInput from "@/components/Input";
import TextareaInput from "@/components/TextareaInput";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PiTrashSimpleLight } from "react-icons/pi";
import { upateFormProps } from "../../../../../types";
import { CiCamera } from "react-icons/ci";
import FileInput from "@/components/FileInput";
import Categories from "../../Categories";
import { categoriesData } from "../../../../../constant/categoryData";

const UpdateForm = ({
  // General Form Props
  name,
  setName,
  description,
  setDescription,
  features,
  setFeatures,
  price,
  setPrice,
  discount,
  setDiscount,
  category,
  setCategory,
  stock,
  setStock,
  handleSubmit,
  formLoading,
  data,
  // Image Props
  handleImageChange,
  images,
  selectedImageId,
  setSelectedImageId,
  handleDeleteImage,
  handleUpdate,
  handleFileChange,
  imageLoading,
  subCategory,
  setSubcategory,
  brand,
  setBrand,
  setSku,
  sku,
}: upateFormProps) => {
const filteredSubCategories =
  categoriesData.find((item) => item.category === category)?.subCategories ||
  [];

  return (
    <div className='flex items-center'>
      <form onSubmit={handleSubmit}>
        {/* Text Inputs */}
        <TextInput
          type='text'
          placeholder={`Name: ${data?.name}`}
          value={name ?? ""}
          onChange={(e) => setName(e.target.value)}
        />

        <div className='grid grid-cols-2 w-full'>
          <TextareaInput
            className='mt-4'
            onChange={(e) => setDescription(e.target.value)}
            value={description ?? ""}
            placeholder={`Description: ${data?.description}`}
          />
          <TextareaInput
            className='mt-4'
            onChange={(e) => setFeatures(e.target.value)}
            value={features ?? ""}
            placeholder={`Features: ${data?.features}`}
          />
        </div>

        <div className='grid grid-cols-4 gap-4 mt-4'>
          <TextInput
            type='number'
            onChange={(e) => setPrice(e.target.value)}
            value={price ?? ""}
            placeholder={`Price: ${data?.price}$`}
          />
          <TextInput
            type='number'
            onChange={(e) => setDiscount(e.target.value)}
            value={discount ?? ""}
            placeholder={`Discount: ${data?.discountPrice}%`}
          />
          <Categories
            setCategory={setCategory}
            category={category}
            categoriesData={categoriesData.map((item) => item.category)} // Pass only category names
          />
          {category && (
            <Categories
              setCategory={setSubcategory}
              category={subCategory}
              categoriesData={filteredSubCategories} // Pass subcategories for the selected category
            />
          )}
          <TextInput
            type='number'
            onChange={(e) => setStock(e.target.value)}
            value={stock ?? ""}
            placeholder={`Stock: ${data?.stock}`}
          />
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4'>
          <TextInput
            type='text'
            onChange={(e) => setBrand(e.target.value)}
            value={brand}
            placeholder={`Brand: ${data?.brand}`}
          />
          <TextInput
            type='text'
            onChange={(e) => setSku(e.target.value)}
            value={sku}
            placeholder={`Sku ${data.sku}`}
          />
        </div>
        {/* Image Management */}
        <div className='flex items-center justify-center flex-wrap gap-4 mt-4'>
          {images.map((image: any, index: number) => (
            <div key={index} className='relative flex flex-col items-center'>
              {/* Image Preview */}
              <Image
                src={image?.url}
                width={100}
                height={100}
                alt={`Image ${index + 1}`}
                className={`rounded-md object-cover h-[10vh] shadow-md cursor-pointer ${
                  selectedImageId === image.public_id
                    ? "ring-2 ring-slate-500"
                    : ""
                }`}
                onClick={() => setSelectedImageId(image.public_id)} // Select Image
              />

              <div className='flex items-center'>
                {/* Update Image (only for selected image) */}
                {selectedImageId === image.public_id && (
                  <div className='mt-6'>
                    <label
                      htmlFor='update-image'
                      className='flex items-center justify-center cursor-pointer transition-all'>
                      <input
                        type='file'
                        accept='image/*'
                        id='update-image'
                        className='hidden'
                        onChange={handleFileChange}
                        disabled={imageLoading}
                      />
                      <CiCamera className='text-xl' /> <span>New</span>
                    </label>
                    <Button
                      onClick={handleUpdate}
                      // className='bg-green-500 text-white px-4 py-2 mt-4'
                      disabled={imageLoading}>
                      {imageLoading ? "Updating..." : "Update Image"}
                    </Button>
                  </div>
                )}

                {/* Delete Button */}
                <span
                  onClick={() => handleDeleteImage(image.public_id)}
                  className=' absolute top-0 left-0 rounded-full h-6 flex items-center justify-center w-6 bg-red-600/80 text-slate-100 cursor-pointer hover:bg-white hover:text-red-600 transition-all'>
                  {imageLoading ? "Deleting..." : <PiTrashSimpleLight />}
                </span>
              </div>
            </div>
          ))}
          <FileInput onChange={handleImageChange} />
        </div>

        <Button
          type='submit'
          variant={"outline"}
          disabled={formLoading}
          className='mt-4 w-full'>
          {formLoading ? "Please wait" : "Update"}
        </Button>
      </form>
    </div>
  );
};

export default UpdateForm;
