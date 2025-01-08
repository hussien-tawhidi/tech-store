"use client";

import TextInput from "@/components/Input";
import TextareaInput from "@/components/TextareaInput";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PiTrashSimpleLight } from "react-icons/pi";
import { upateFormProps } from "../../../../../types";
import { CiCamera } from "react-icons/ci";
import FileInput from "@/components/FileInput";

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
  error,
  formLoading,
  data,
  // Image Props
  handleImageChange,
  images,
  setImages,
  selectedImageId,
  setSelectedImageId,
  handleDeleteImage,
  handleUpdate,
  handleFileChange,
  imageLoading,
}: upateFormProps) => {
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
          <TextInput
            type='text'
            onChange={(e) => setCategory(e.target.value)}
            value={category ?? ""}
            placeholder={`Category: ${data?.category}`}
          />
          <TextInput
            type='number'
            onChange={(e) => setStock(e.target.value)}
            value={stock ?? ""}
            placeholder={`Stock: ${data?.stock}`}
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
                    ? "ring-2 ring-blue-500"
                    : ""
                }`}
                onClick={() => setSelectedImageId(image.public_id)} // Select Image
              />

              <div className='flex items-center relative'>
                {/* Update Image (only for selected image) */}
                {selectedImageId === image.public_id && (
                  <div className='mt-6'>
                    <label htmlFor='update-image' className="flex items-center justify-center">
                      <input
                        type='file'
                        accept='image/*'
                        id='update-image'
                        className='hidden'
                        onChange={handleFileChange}
                        disabled={imageLoading}
                      />
                      <CiCamera />
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
                <Button
                  onClick={() => handleDeleteImage(image.public_id)}
                  className='mt-2 bg-red-500 text-white hover:text-red-500'
                  disabled={imageLoading}>
                  {imageLoading ? "Deleting..." : <PiTrashSimpleLight />}
                </Button>
              </div>
            </div>
          ))}
          <FileInput onChange={handleImageChange} />
        </div>

        {/* Form Submission */}
        <Button type='submit' disabled={formLoading} className='mt-4'>
          {formLoading ? "Please wait" : "Update"}
        </Button>
      </form>
    </div>
  );
};

export default UpdateForm;
