import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { dbConnect } from "@/lib/db";
import Product from "@/model/Product";
import {
  deleteImageFromCloudinary,
  uploadToCloudinary,
} from "@/lib/cloudinary";

export async function DELETE(req: Request) {
  const { productId, imageIdToDelete } = await req.json();

  if (!productId || !imageIdToDelete) {
    return NextResponse.json(
      { error: "Product ID and image ID to delete are required." },
      { status: 400 }
    );
  }

  try {
    await dbConnect();

    // Find the product
    const product = await Product.findById(productId);
    if (!product) {
      return NextResponse.json(
        { error: "Product not found." },
        { status: 404 }
      );
    }

    // Remove image from Cloudinary
    await cloudinary.uploader.destroy(imageIdToDelete);

    // Remove image reference from product
    product.images = product.images.filter(
      (img: any) => img.public_id !== imageIdToDelete
    );

    await product.save();

    return NextResponse.json({
      message: "Image deleted successfully",
      product,
    });
  } catch (error) {
    console.error("Error deleting image:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  const { productId, imageIdToReplace, newImageFile } = await req.json();

  if (!productId || !imageIdToReplace || !newImageFile) {
    return NextResponse.json(
      {
        error:
          "Product ID, image ID to replace, and new image file are required.",
      },
      { status: 400 }
    );
  }

  try {
    await dbConnect();

    // Find the product
    const product = await Product.findById(productId);
    if (!product) {
      return NextResponse.json(
        { error: "Product not found." },
        { status: 404 }
      );
    }

    // Upload the new image to Cloudinary
    const [uploadedImage] = await uploadToCloudinary(
      [newImageFile],
      `tech-store/${product.category}/${product.name}`
    ); // Passing as an array
    if (!uploadedImage) {
      throw new Error("Failed to upload new image to Cloudinary");
    }

    // Remove the old image from Cloudinary
    await deleteImageFromCloudinary(imageIdToReplace);

    // Update the product's images in the database
    product.images = product.images.map((img: any) =>
      img.public_id === imageIdToReplace
        ? { public_id: uploadedImage.public_id, url: uploadedImage.url }
        : img
    );

    await product.save();

    return NextResponse.json({
      message: "Image updated successfully",
      product,
    });
  } catch (error) {
    console.error("Error updating image:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
