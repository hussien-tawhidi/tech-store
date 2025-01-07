export const updateImage = async (
  productId: string,
  newImage: File,
  imageIdToReplace: string
) => {
  const formData = new FormData();
  formData.append("productId", productId);
  formData.append("newImage", newImage);
  formData.append("imageIdToReplace", imageIdToReplace);

  const response = await fetch("/api/admin/products/image", {
    method: "PATCH",
    body: formData,
  });

  try {
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error, "Error updating image");
  }

  //   if (!response.ok) throw new Error(result.error || "Failed to update image");
};

export const deleteImage = async (
  productId: string,
  imageIdToDelete: string
) => {
  const response = await fetch("/api/admin/products/image", {
    method: "DELETE",
    body: JSON.stringify({ productId, imageIdToDelete }),
    headers: { "Content-Type": "application/json" },
  });

  const result = await response.json();
  if (!response.ok) throw new Error(result.error || "Failed to delete image");
  return result;
};
