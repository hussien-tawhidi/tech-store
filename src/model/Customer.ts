
import mongoose, { Document, Schema } from "mongoose";

export interface ICustomer extends Document {
  name: string;
  phone: string;
  email: string;
  address: {
    province: string;
    street: string;
    city: string;
    postCode: string;
  };
}

const customerSchema = new Schema<ICustomer>({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: {
    province: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    postCode: { type: String, required: true },
  },
});

const Customer =
  mongoose.models.Customer ||
  mongoose.model<ICustomer>("Customer", customerSchema);

export default Customer;
