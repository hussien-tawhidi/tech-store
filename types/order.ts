export interface OrderItem {
  name: string;
  price: number;
  quantity: number;
  discountPrice: number;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  email: string;
  province: string;
  city: string;
  street: string;
  postCode: string;
}

export interface PlaceOrderParams {
  customer: CustomerInfo;
  cartItems: OrderItem[];
  totalPrice: number;
  createdAt: string;
  user: string;
  router: any; // Now it's passed as an argument
  dispatch: any; // Redux dispatch function passed as an argument
}
