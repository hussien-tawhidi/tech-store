"use client";

import { useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import Image from "next/image";

interface Props {
  onChange: (files: File[]) => void;
  error?: string | null;
}

const FileInput = ({ onChange, error }: Props) => {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    // Convert the FileList to an array
    const files = Array.from(e.target.files);

    // Generate preview URLs
    const previews = files.map((file) => URL.createObjectURL(file));

    // Update state
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    setPreviewUrls((prevPreviews) => [...prevPreviews, ...previews]);

    // Trigger the callback with the new files
    onChange([...selectedFiles, ...files]);
  };

  const handleRemoveImage = (index: number) => {
    const updatedFiles = [...selectedFiles];
    const updatedPreviews = [...previewUrls];

    // Remove the selected file and its preview URL
    updatedFiles.splice(index, 1);
    updatedPreviews.splice(index, 1);

    setSelectedFiles(updatedFiles);
    setPreviewUrls(updatedPreviews);

    // Trigger the callback with the updated files
    onChange(updatedFiles);
  };

  return (
    <span className='mb-2 flex gap-3 items-center'>
      <span>
        <label className='mb-2 text-slate-200 transition-all hover:bg-slate-50 hover:text-slate-700 cursor-pointer text-sm gap-5 p-5 bg-slate-600 rounded-md  flex items-center justify-center relative'>
          <IoCameraOutline className='dark:text-gray-200 font-semibold text-xl' />
          Upload images
          <input
            type='file'
            accept='image/*'
            onChange={handleFileChange}
            multiple // Allow multiple files to be selected
            className='hidden'
          />
        </label>
        {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
      </span>

      {/* Render the image previews */}
      {previewUrls.length > 0 && (
        <div className='flex gap-2 mt-3 flex-wrap'>
          {previewUrls.map((previewUrl, index) => (
            <span
              key={index}
              className='w-[100px] h-[100px] rounded-lg overflow-hidden relative group'>
              <Image
                src={previewUrl}
                alt={`Preview ${index}`}
                height={200}
                width={200}
                className='w-full h-full object-cover'
              />
              <button
                type='button'
                onClick={() => handleRemoveImage(index)}
                className='absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity'>
                ✕
              </button>
            </span>
          ))}
        </div>
      )}
    </span>
  );
};

export default FileInput;
