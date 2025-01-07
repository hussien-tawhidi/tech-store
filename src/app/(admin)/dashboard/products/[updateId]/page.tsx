import UpdateForm from "@/components/admin/products/update/UpdateProduct";

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
