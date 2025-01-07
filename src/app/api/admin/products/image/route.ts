import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { dbConnect } from "@/lib/db";
import Product from "@/model/Product";

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
  const { productId, imageIdToReplace, newImage } = await req.json();

  if (!productId || !imageIdToReplace || !newImage) {
    return NextResponse.json(
      { error: "Product ID, image ID to replace, and new image are required." },
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

    // Upload new image to Cloudinary
    const uploadedImage = await cloudinary.uploader.upload(newImage, {
      folder: "tech-store",
    });

    // Remove old image from Cloudinary
    await cloudinary.uploader.destroy(imageIdToReplace);

    // Update the product's images
    product.images = product.images.map((img: any) =>
      img.public_id === imageIdToReplace
        ? { public_id: uploadedImage.public_id, url: uploadedImage.secure_url }
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
