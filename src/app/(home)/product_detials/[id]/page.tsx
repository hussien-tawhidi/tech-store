
import ProductDetails from "@/components/product-destails/ProductDetails";

const ProductDetailsPage = async ({ params }: any) => {
  const {id}=await params
  console.log(await params)
  return (
    <div>
      <ProductDetails id={id} />
    </div>
  );
};

export default ProductDetailsPage;
