import UpdateForm from "@/components/admin/products/update/UpdateProduct";
import axios from "axios";

const UpdateProduct = async ({ params }: any) => {
  const param = await params;
  const updateId = param?.updateId;
  console.log(updateId);
  return (
    <div className='w-[90%] mx-auto py-10'>
      <UpdateForm productId={updateId} />
    </div>
  );
};

export default UpdateProduct;
export const generateMetadata = async ({ params }: any) => {
  const param = await params;
  const updateId = param?.updateId;
  // Replace with your own API endpoint for fetching product data
  const apiUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
  const { data } = await axios.get(`${apiUrl}/api/admin/products`);
  const { products } = await data;

  const findById = products?.find((p: any) => p?._id === updateId);

  return {
    title: `${findById.name} - Tech Store`,
    description: findById.description,
  };
};
