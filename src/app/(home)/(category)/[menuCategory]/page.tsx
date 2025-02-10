import Category from "@/components/category/Category";
import Breadcrumbs from "@/components/product-destails/Breadcrumbs";
import { mainMenu } from "../../../../../constant";

const CategoryPage = async ({
  params,
}: {
  params: { menuCategory: string };
}) => {
  const param = await params;
  const { menuCategory } = param;

  return (
    <div className='mt-20'>
      <Breadcrumbs name={menuCategory} />
      <Category menuCategory={menuCategory} />
    </div>
  );
};

export default CategoryPage;
export const generateMetadata = async ({
  params,
}: {
  params: { menuCategory: string };
}) => {
  const { menuCategory } = await params;
  const categories = mainMenu.find(
    (category) => category.link === `/${menuCategory}`
  );

  return {
    title: `${categories?.category} - Tech Store`,
    description: "Tech Store description",
  };
};
