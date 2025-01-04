"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { CartItem } from "@/store/slice/cartSlice";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { placeOrder } from "@/actions/orders";
import CheckoutForm from "./CheckoutForm";
import { checkoutSchema } from "@/schemas";
import {z} from "zod"

const Checkout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session } = useSession();

  const cartItems = useSelector(
    (state: RootState) => state.cart.items as CartItem[]
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [postCode, setPostCode] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Gather form data
    const formData = { name, phone, email, province, city, street, postCode };

    // Validate form data using Zod schema
    try {
      checkoutSchema.parse(formData); // Will throw an error if validation fails
      setErrors({}); // Clear previous errors

      const customer = { name, phone, email, province, city, street, postCode };
      const totalPrice = cartItems.reduce(
        (total, item) =>
          total +
          (item.price - (item.price * item.discountPrice) / 100) *
            item.quantity,
        0
      );

      const createdAt = new Date().toISOString();

      await placeOrder({
        customer,
        cartItems,
        totalPrice,
        createdAt,
        user: session?.user?._id,
        router,
        dispatch,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Capture the validation errors
        const newErrors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors); // Set errors to display
      }
    }
  };

  return (
    <div>
      <div className='text-slate-600 mx-auto md:w-[50vw] sm:w-[70vw] w-[95vw] my-10'>
        <h2 className='text-2xl font-semibold py-3'>Checkout</h2>
        <CheckoutForm
          handleSubmit={handleSubmit}
          city={city}
          setCity={setCity}
          email={email}
          setEmail={setEmail}
          name={name}
          phone={phone}
          setPhone={setPhone}
          postCode={postCode}
          setPostCode={setPostCode}
          province={province}
          setProvince={setProvince}
          setName={setName}
          setStreet={setStreet}
          street={street}
          error={errors}
        />
      </div>
    </div>
  );
};

export default Checkout;
