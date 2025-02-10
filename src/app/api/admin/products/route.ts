import { NextResponse } from "next/server";
import Product from "@/model/Product";
import { dbConnect } from "@/lib/db";
import { uploadbannerToCloudinary, uploadToCloudinary } from "@/lib/cloudinary";
import { MongoServerError } from "mongodb";
import mongoose from "mongoose";

export async function POST(req: Request) {
  const form = await req.formData();

  const name = form.get("name")?.toString();
  const price = parseFloat(form.get("price")?.toString() || "0");
  const discountPrice = parseFloat(form.get("discount")?.toString() || "0");
  const description = form.get("description")?.toString();

  const hashtags =
    form
      .get("hashtags")
      ?.toString()
      ?.split(",")
      .map((tag) => tag.trim()) || [];
  const category = form.get("category")?.toString();
  const subcategories = form.get("subcategory")?.toString();
  const brand = form.get("brand")?.toString();
  const stock = parseInt(form.get("stock")?.toString() || "0", 10);
  const sku = form.get("sku")?.toString();
  const createdBy = form.get("createdBy")?.toString();
  const features =
    form
      .get("features")
      ?.toString()
      ?.split(",")
      .map((feature) => feature.trim()) || [];

  const colorsData = form.get("colors");
  const colors = colorsData
    ? colorsData
        .toString()
        .split(",")
        .map((color) => {
          const [name, hex] = color.includes(":")
            ? color.split(":")
            : [color, ""];
          return { name: name.trim(), hex: hex.trim() || "" };
        })
    : [];

  const image = form.getAll("image") as File[];
  const banner = form.get("banner") as File | null; // Allow banner to be null

  // Validate required fields
  const missingFields = [];
  if (!name) missingFields.push("name");
  if (!price || price <= 0) missingFields.push("price (must be positive)");
  if (!description) missingFields.push("description");
  if (!category) missingFields.push("category");

  if (missingFields.length > 0) {
    return NextResponse.json(
      { error: `Missing required fields: ${missingFields.join(", ")}` },
      { status: 400 }
    );
  }

  try {
    await dbConnect();

    let imageUrl = ""; // Default empty string for optional banner

    // Upload banner image if provided
    if (banner) {
      const uploadedImageData = await uploadbannerToCloudinary(
        banner,
        `tech-store/banner/${name}`
      );
      imageUrl = uploadedImageData.secure_url;
    }

    // Upload product images
    let imageUrls: { url: string; public_id: string }[] = [];
    if (image.length > 0) {
      const uploadedImages = await uploadToCloudinary(
        image,
        `tech-store/${category}/${name}`
      );
      imageUrls = uploadedImages;
    }

    // Check SKU uniqueness
    const existingProduct = await Product.findOne({ sku });
    if (existingProduct) {
      return NextResponse.json(
        { error: `SKU already exists: ${sku}` },
        { status: 400 }
      );
    }

    // Create product object
    const productData: any = {
      name,
      price,
      discountPrice,
      description,
      hashtags,
      category,
      subcategories,
      brand,
      stock,
      sku,
      createdBy,
      features,
      colors,
      images: imageUrls,
    };

    // Only add banner if it exists
    if (imageUrl) {
      productData.banner = imageUrl;
    }

    const product = await Product.create(productData);

    return NextResponse.json(
      { message: "Product created successfully", product },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof MongoServerError && error.code === 11000) {
      return NextResponse.json({
        error: `Duplicate SKU detected: ${error.keyValue.sku}`,
      });
    }

    console.error("Internal server error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error },
      { status: 500 }
    );
  }
}


export async function PATCH(req: Request) {
  const form = await req.formData();
  const productId = form.get("productId")?.toString();

  console.log("Form Data Entries:");
  for (const pair of form.entries()) {
    console.log(pair[0], pair[1]); // Log each field in the form data
  }

  // Validate productId
  if (!productId) {
    return NextResponse.json(
      { error: "Missing product ID for update" },
      { status: 400 }
    );
  }

  try {
    await dbConnect();

    // Fetch existing product
    const existingProduct = await Product.findById(productId);
    if (!existingProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Prepare update data
    const updateData: Record<string, any> = {};

    // Update only fields that are provided
    const name = form.get("name")?.toString();
    if (name) updateData.name = name;

    const price = form.get("price")?.toString();
    if (price) updateData.price = parseFloat(price);

    const discountPrice = form.get("discount")?.toString();
    if (discountPrice) updateData.discountPrice = parseFloat(discountPrice);

    const description = form.get("description")?.toString();
    if (description) updateData.description = description;

    const category = form.get("category")?.toString();
    if (category) updateData.category = category;

    const features = form.get("features")?.toString();
    if (features) {
      updateData.features = features
        .split(",")
        .map((feature) => feature.trim());
    }

    const sku = form.get("sku")?.toString();
    if (sku) updateData.sku = sku;

    const subCategory = form.get("subCategory")?.toString();
    if (subCategory) updateData.subcategories = subCategory;

    const stock = form.get("stock")?.toString();
    if (stock) updateData.stock = parseInt(stock, 10);

    const brand = form.get("brand")?.toString();
    if (brand) updateData.brand = brand;

    // Handle image updates
    const newImages = form.getAll("addImage") as File[];
    let imageUrls: { url: string; public_id: string }[] = [];

    if (newImages.length > 0) {
      const uploadedImages = await uploadToCloudinary(
        newImages,
        `tech-store/${category}/${name}`
      );
      imageUrls = uploadedImages; // New images to add
    }

    // Combine new images with existing ones
    if (existingProduct.images) {
      // Keep existing images and add the new ones
      updateData.images = [...existingProduct.images, ...imageUrls];
    } else {
      // If no existing images, just use the new ones
      updateData.images = imageUrls;
    }

    // Update product in database
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $set: updateData }, // Only update provided fields
      { new: true } // Return updated product
    );

    return NextResponse.json(
      { message: "Product updated successfully", product: updatedProduct },
      { status: 200 }
    );
  } catch (error) {
    console.error("Internal server error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect();
    const products = await Product.find();
    return NextResponse.json({
      message: "Products found successfully",
      products: products,
      status: 200,
    });
  } catch (error) {
    console.log(error, "Error in fetching products API BACKEND");
    return NextResponse.json({
      message: "Error fetching products API BACKEND",
      error: error,
    });
  }
}

export async function DELETE(req: Request) {
  try {
    // Ensure formData is parsed correctly
    const form = await req.formData();
    const productId = form.get("productId")?.toString();

    // Validate productId
    if (!productId) {
      return NextResponse.json({
        message: "Product ID is required",
        status: 400,
      });
    }

    // Check if productId is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return NextResponse.json({
        message: "Invalid Product ID format",
        status: 400,
      });
    }

    // Attempt to delete the product
    const product = await Product.findByIdAndDelete(productId);

    // Handle case where product is not found
    if (!product) {
      console.error("Product not found. ID:", productId);
      return NextResponse.json({
        message: "Product not found",
        status: 404,
      });
    }

    // Return success response
    return NextResponse.json({
      message: "Product deleted successfully",
      status: 200,
    });
  } catch (error: any) {
    console.error("Error deleting product:", error);

    // Handle specific database errors
    if (error.name === "CastError") {
      return NextResponse.json(
        { error: "Invalid product ID format" },
        { status: 400 }
      );
    }

    // General server error fallback
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
