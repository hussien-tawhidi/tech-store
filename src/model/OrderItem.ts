// models/OrderItem.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IOrderItem extends Document {
  name: string;
  price: number;
  quantity: number;
  discountPrice: number;
}

const orderItemSchema = new Schema<IOrderItem>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  discountPrice: { type: Number, required: true },
});

const OrderItem =
  mongoose.models.OrderItem ||
  mongoose.model<IOrderItem>("OrderItem", orderItemSchema);

export default OrderItem;
