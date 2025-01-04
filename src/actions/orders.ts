import { clearCart } from "@/store/slice/cartSlice";
import axios from "axios";
import { toast } from "react-hot-toast";
import { PlaceOrderParams } from "../../types/order";

export const placeOrder = async ({
  customer,
  cartItems,
  totalPrice,
  createdAt,
  user,
  router,
  dispatch,
}: PlaceOrderParams) => {
  const order = {
    user,
    customer,
    items: cartItems,
    totalPrice,
    createdAt,
  };

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_ORDERS as string;
    const response = await axios.post(apiUrl, order, {
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      toast.success("Order placed successfully!");

      router.push(`/user/${user}/orders`);
      dispatch(clearCart());
    }
  } catch (error) {
    console.error("Error placing order:", error);
    toast.error("Failed to place order. Please try again later.");
  }
};
