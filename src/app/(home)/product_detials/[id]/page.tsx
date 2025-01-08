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

  const { data } = await axios.get("/api/admin/products");
  const { products } = await data;

  const findById = products?.find((p: any) => p?._id === id);

  return {
    title: `${findById.name} - Tech Store`,
    description: findById.description,
  };
};
