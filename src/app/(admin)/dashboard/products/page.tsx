import Products from "@/components/admin/products/Products";
import { Metadata } from "next";
const ProductsPage = () => {
  return (
    <div className='overflow-hidden'>
      <Products />
    </div>
  );
};

export default ProductsPage;

export async function generateMetadata(): Promise<Metadata> {
  const title = "Products | Dashboard";

  return {
    title,
    description: "This is a dynamically generated title for a static page",
  };
}
