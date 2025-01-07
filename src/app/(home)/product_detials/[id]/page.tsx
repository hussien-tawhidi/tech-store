import ProductDetails from "@/components/product-destails/ProductDetails";
import axios from "axios";

const ProductDetailsPage = async ({ params }: any) => {
  const { id } = await params;
  return (
    <div>
      <ProductDetails id={id} />
    </div>
  );
};

export default ProductDetailsPage;

export const generateMetadata = async ({ params }: any) => {
  const param = await params;
  const { id } = await param;
  // Replace with your own API endpoint for fetching product data
  const apiUrl = process.env.NEXT_PUBLIC_API_PRODUCTS as string;
  const { data } = await axios.get(apiUrl);
  const { products } = await data;

  const findById = products?.find((p: any) => p?._id === id);

  return {
    title: `${findById.name} - Online Shop`,
    description: findById.description,
  };
};
