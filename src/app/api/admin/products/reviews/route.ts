import Product from "@/model/Product";
import Review from "@/model/Review";
import { NextResponse } from "next/server";
import { auth } from "../../../../../../auth";
import { dbConnect } from "@/lib/db";
import logger from "@/lib/logger";
// **POST - Create a Review**
export async function POST(req: Request) {
  const session = await auth();
  try {
    const body = await req.json();
    const userId = session?.user?._id;
    const name = session?.user.name;
    const { productId, rating, comment } = body;

    await dbConnect();
    // Validate required fields
    if (!productId || !userId || !rating || !comment) {
      return NextResponse.json(
        { error: "All fields are required!" },
        { status: 400 }
      );
    }
    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Create new review
    const review = new Review({
      product: productId,
      user: userId,
      name,
      rating,
      comment,
    });

    await review.save();

    // Update product rating and review count
    const reviews = await Review.find({ product: productId });
    const numOfReviews = reviews.length;
    const avgRating =
      reviews.reduce((acc, r) => acc + r.rating, 0) / numOfReviews;

    await Product.findByIdAndUpdate(productId, {
      ratings: avgRating,
      numOfReviews,
    });

    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


import fs from "fs";
import path from "path";
import os from "os";

// Use a temporary directory instead of 'logs' to prevent errors in Vercel's environment
const logDir = path.join(os.tmpdir(), "logs");

// Ensure the directory exists or create it
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

// Now you can safely use 'logDir' for logging
// Example: You can write a log file or any logging you need
fs.writeFileSync(path.join(logDir, "logfile.log"), "Some log content");

export async function GET(req: Request) {
  try {
    await dbConnect(); 
   

    const reviews = await Review.find();

    const averageRating =
      reviews.length > 0
        ? reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        : 0;

    console.log("Average rating:", averageRating);

    return NextResponse.json(
      { message: "Reviews fetched successfully", reviews, averageRating },
      { status: 200 }
    );
  } catch (error) {
    console.error("Server error in fetching reviews:", error);
    return NextResponse.json(
      { message: "Server error fetching reviews", error: error },
      { status: 500 }
    );
  }
}
// export async function GET(req: Request) {
//   try {
//     console.log("Connecting to database...");
//     await dbConnect(); // Database connection
//     console.log("Database connected!");

//     // Extract query parameters
//     const { searchParams } = new URL(req.url!);
//     const productId = searchParams.get("productId");

//     console.log("Received Product ID:", productId); // Log product ID

//     // Validate productId
//     if (!productId) {
//       console.error("Product ID is missing.");
//       return NextResponse.json(
//         { message: "Product ID is required", status: 400 },
//         { status: 400 }
//       );
//     }

//     console.log("Fetching reviews for Product ID:", productId);
//     const reviews = await Review.find({ product: productId }).sort({
//       createdAt: -1,
//     });

//     console.log("Number of reviews fetched:", reviews.length);

//     const averageRating =
//       reviews.length > 0
//         ? reviews.reduce((sum, review) => sum + review.rating, 0) /
//           reviews.length
//         : 0;

//     console.log("Average rating:", averageRating);

//     return NextResponse.json(
//       { message: "Reviews fetched successfully", reviews, averageRating },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Server error:", error);
//     return NextResponse.json(
//       { message: "Server error", error: error },
//       { status: 500 }
//     );
//   }
// }

// **DELETE - Remove a Review**
export async function DELETE(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();
    const { reviewId, productId } = body;

    if (!reviewId || !productId) {
      return NextResponse.json(
        { error: "Review ID and Product ID are required" },
        { status: 400 }
      );
    }

    // Delete review
    await Review.findByIdAndDelete(reviewId);

    // Recalculate ratings and review count
    const reviews = await Review.find({ product: productId });
    const numOfReviews = reviews.length;
    const avgRating =
      numOfReviews > 0
        ? reviews.reduce((acc, r) => acc + r.rating, 0) / numOfReviews
        : 0;

    await Product.findByIdAndUpdate(productId, {
      ratings: avgRating,
      numOfReviews,
    });

    return NextResponse.json(
      { message: "Review deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
