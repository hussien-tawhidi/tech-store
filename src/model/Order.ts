import mongoose, { Document, Schema } from "mongoose";

export interface IOrder extends Document {
  user: mongoose.Schema.Types.ObjectId; // <-- Reference to User
  customer: mongoose.Schema.Types.ObjectId; // <-- Existing Customer reference
  items: mongoose.Schema.Types.ObjectId[];
  totalPrice: number;
  createdAt: Date;
}

const orderSchema = new Schema<IOrder>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true }, // <-- Link to User
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer", // Existing Customer model reference
    required: true,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OrderItem",
    },
  ],
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Order =
  mongoose.models.Order || mongoose.model<IOrder>("Order", orderSchema);

export default Order;
