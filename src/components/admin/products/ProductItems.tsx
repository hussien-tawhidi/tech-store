import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

interface productProps {
  _id: string;
  name: string;
  images: { url: string }[];
  category: string;
  subcategories: string[];
  sku: string;
  price: number;
  description: string;
}
interface Props {
  deleteProductsLoading: boolean;
  handleDelete: (id: string) => void;
  itemOffset: number;
  currentItems: productProps[];
}

const ProductItems = ({
  currentItems,
  handleDelete,
  deleteProductsLoading,
  itemOffset,
}: Props) => {
  const router = useRouter();

  return (
    <table className='w-full border-collaps text-left text-sm text-slate-500'>
      <thead className=''>
        <tr>
          <th
            scope='col'
            className='px-6 py-4 font-medium text-slate-600 dark:text-slate-300'>
            Product
          </th>
          <th
            scope='col'
            className='px-6 py-4 font-medium text-slate-600 dark:text-slate-300'>
            Price
          </th>
          <th
            scope='col'
            className='px-6 py-4 font-medium text-gray-600 dark:text-gray-300'>
            Category
          </th>
          <th
            scope='col'
            className='px-6 py-4 font-medium text-gray-600 dark:text-gray-300'>
            Descriptions
          </th>
          <th scope='col' className='px-6 py-4 font-medium text-gray-600'></th>
        </tr>
      </thead>
      {currentItems?.map((product: productProps, index) => (
        <tbody className='dark:divide-gray-400' key={product?._id}>
          <tr className='hover:bg-slate-50 dark:hover:bg-slate-600 cursor-pointer border-b'>
            <th
              className='flex gap-3 px-6 py-4 font-normal text-slate-900 dark:text-slate-400'
              onClick={() => router.push(`/product_detials/${product?._id}`)}>
              <span className='text-slate-600 dark:text-slate-300 flex items-center justify-center text-sm rounded-full font-semibold'>
                <span className='text-slate-600 dark:text-slate-300 flex items-center justify-center text-sm rounded-full font-semibold'>
                  <p>{itemOffset + index + 1}</p>{" "}
                  {/* This will display the current page's product number */}
                </span>
              </span>
              <div className='relative h-10 w-10 overflow-hidden'>
                {product?.images && (
                  <Image
                    width={200}
                    height={200}
                    className='w-10 h-auto object-cover object-center'
                    src={product?.images?.[0]?.url || ""}
                    alt='Photo'
                  />
                )}
              </div>
              <div className='text-sm'>
                <div className='font-medium text-slate-700 dark:text-slate-500'>
                  {product.name}
                </div>
                <div className='text-slate-400 dark:text-slate-300'>
                  {product.sku.length > 20
                    ? product.sku.slice(0, 20)
                    : product.sku}
                </div>
              </div>
            </th>
            <td className='px-6 py-4'>
              <span className='inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold'>
                {product.price}$
              </span>
            </td>
            <td className='px-6 py-4 dark:text-slate-400'>
              {product.category}
            </td>
            <td className='px-6 py-4'>
              <div className='flex gap-2'>
                <span className='inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold'>
                  {product.description.slice(0, 50)}...
                </span>
              </div>
            </td>
            <td className='px-6 py-4'>
              <div className='flex justify-end gap-4'>
                <Button
                  variant={"outline"}
                  onClick={() => handleDelete(product?._id)} // Trigger handleDelete on click
                  disabled={deleteProductsLoading} // Disable delete button while loading
                >
                  {deleteProductsLoading ? (
                    "Deleting..."
                  ) : (
                    <AiOutlineDelete className='text-xl' />
                  )}
                </Button>
                <Button
                  variant={"outline"}
                  onClick={() =>
                    router.push(`/dashboard/products/${product?._id}`)
                  }>
                  <CiEdit className='text-xl' />
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default ProductItems;
