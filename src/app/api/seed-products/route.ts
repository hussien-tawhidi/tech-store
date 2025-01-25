import { dbConnect } from "@/lib/db";
import Product from "@/model/Product";
import { sampleProducts } from "../../../../data";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Connect to the database
    await dbConnect();

    // Insert the products into the database
    await Product.insertMany(sampleProducts);

    return NextResponse.json({ message: "Products seeded successfully!" });
  } catch (error) {
    console.error("Error seeding products:", error);
    return NextResponse.json(
      { message: "Failed to seed products" },
      { status: 500 }
    );
  }
}
