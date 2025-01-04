// pages/api/order.ts
import { dbConnect } from "@/lib/db";
import logger from "@/lib/logger";
import Customer from "@/model/Customer";
import Order from "@/model/Order";
import OrderItem from "@/model/OrderItem";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../../auth";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ message: "Unauthorized", status: 401 });
  }
  try {
    const body = await req.json(); // <-- Parse JSON from ReadableStream

    await dbConnect();
    const { customer, items, totalPrice, createdAt } = body;
    if (!customer || !customer.email) {
      return NextResponse.json({
        message: " customer email is required",
        status: 400,
      });
    }
    // Create or find the customer in the database
    const customerRecord = await Customer.findOneAndUpdate(
      { email: customer.email },
      {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        address: {
          province: customer.province,
          city: customer.city,
          street: customer.street,
          postCode: customer.postCode,
        },
      },
      { upsert: true, new: true }
    );

    // Create the order items and save them to the database
    const orderItems = await Promise.all(
      items.map(async (item: any) => {
        const newItem = new OrderItem({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          discountPrice: item.discountPrice,
        });
        return await newItem.save();
      })
    );

    // Create the order
    const order = new Order({
      user: session?.user._id,
      customer: customerRecord._id,
      items: orderItems.map((item) => item._id),
      totalPrice,
      createdAt,
    });

    // Save the order
    await order.save();
    return NextResponse.json({
      message: "Order created successfully",
      order,
      status: 200,
    });
    // return res.status(200).json(order); // Return the created order
  } catch (error: any) {
    console.log(error, "Error creating order");
    logger.warn(`ERROR IN ORDER CREATING: ${error}`);
    return NextResponse.json({ message: "error in creating ORDER", error });
  }
}

export async function GET() {
  await dbConnect();

  try {
    const Orders = await Order.find();
    return NextResponse.json({
      message: "Orders all loaded",
      status: 200,
      Orders,
    });
  } catch (error: any) {
    console.log(error, "Error catching user orders");
    logger.warn(`ERROR IN CATCHING ORDERS: ${error}`);
    return NextResponse.json({ message: "error in catching ORDER", error });
  }
}
