import TextInput from "@/components/Input";
import TextareaInput from "@/components/TextareaInput";
import { Button } from "@/components/ui/button";
import { LuHardDriveUpload } from "react-icons/lu";
import FileInput from "@/components/FileInput";
import Colors from "./Colors";
import { createProductFormPropsTypes } from "../../../../../types";
import Categories from "../../Categories";
import { categoriesData } from "../../../../../constant/categoryData";

const CreateForm = ({
  name,
  setName,
  description,
  setDescription,
  features,
  setFeatures,
  price,
  setPrice,
  discount,
  category,
  setDiscount,
  setCategory,
  stock,
  setStock,
  subcategory,
  setSubcategory,
  brand,
  setBrand,
  sku,
  setSku,
  colors,
  handleColorChange,
  handleImageChange,
  handleBannerChange,
  handleSubmit,
  loading,
}: createProductFormPropsTypes) => {
  const filteredSubCategories =
    categoriesData.find((item) => item.category === category)?.subCategories ||
    [];
  return (
    <form
      className='w-full mb-10 flex flex-col items-center'
      onSubmit={handleSubmit}>
      <TextInput
        onChange={(e) => setName(e.target.value)}
        value={name}
        id='name'
        type='text'
        placeholder='Title here ...'
      />
      <div className='grid grid-cols-2 w-full'>
        <TextareaInput
          className='mt-4'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder='Description here ...'
        />

        <TextareaInput
          className='mt-4'
          onChange={(e) => setFeatures(e.target.value)} // Features text area
          value={features}
          placeholder='Enter product features, separated by line breaks'
        />
      </div>
      <div className='grid grid-cols-4 gap-4 mt-4'>
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

        <Categories
          setCategory={setCategory}
          category={category}
          categoriesData={categoriesData.map((item) => item.category)} // Pass only category names
        />
        {category && (
          <Categories
            setCategory={setSubcategory}
            category={subcategory}
            categoriesData={filteredSubCategories} // Pass subcategories for the selected category
          />
        )}

        <TextInput
          type='number'
          onChange={(e) => setStock(e.target.value)}
          value={stock}
          placeholder='Stock'
        />
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-4'>
        <TextInput
          type='text'
          onChange={(e) => setBrand(e.target.value)}
          value={brand}
          placeholder='Brand'
        />
        <TextInput
          type='text'
          onChange={(e) => setSku(e.target.value)}
          value={sku}
          placeholder='SKU (e.g., model-a1-00)'
        />
      </div>
      <Colors colors={colors} handleColorChange={handleColorChange} />
      <div className='flex items-center justify-evenly gap-3 mt-6'>
        <div>
          <FileInput onChange={handleImageChange} />
        </div>
        <div>
          <label
            htmlFor='banner'
            className='mb-2 text-slate-200 transition-all hover:bg-slate-50 hover:text-slate-700 cursor-pointer text-sm gap-5 p-5 bg-slate-600 rounded-md  flex items-center justify-center relative'>
            <input
              type='file'
              id='banner'
              className='hidden'
              onChange={handleBannerChange}
            />
            <p className='flex items-center gap-3'>
              <LuHardDriveUpload className='text-xl' /> Banner of product
            </p>
          </label>
        </div>
      </div>
      <Button
        variant='outline'
        type='submit'
        disabled={loading}
        className='py-7 bg-slate-600 text-slate-100 w-[20vw] mx-auto'>
        Create
      </Button>
    </form>
  );
};

export default CreateForm;
