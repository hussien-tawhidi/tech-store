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

// **GET - Fetch Reviews for a Product**
export async function GET(req: Request) {
  try {
    await dbConnect();
    const reviews = await Review.find();
    return NextResponse.json({
      message: "Rewiews found successfully",
      reviews,
      status: 200,
    });
  } catch (error) {
    // console.log(error, "Error in fetching reviews API BACKEND");
    logger.warn(error);
    return NextResponse.json({
      message: "Error fetching reviews API BACKEND",
      error: error,
    });
  }
}
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
