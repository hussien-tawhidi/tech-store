import CommingSoon from "@/components/CommingSoon";
import Breadcrumbs from "@/components/product-destails/Breadcrumbs";
export default async function subCategoryPage({
  params,
}: {
  params: { subCategory: string };
}) {
  const param = params;
  const { subCategory } = param;
  return (
    <div className='mt-20'>
      <Breadcrumbs name={subCategory} />
      <CommingSoon />
      <div className='mt-32'>
        <h1 className='mt-32' id='suggestion'>
          suggestion
        </h1>
      </div>
    </div>
  );
}

export const generateMetadata = async ({ params }: any) => {
  const param = await params;
  const { subCategory } = param;

  return {
    title: `${subCategory}- Tech Store`,
    description: "Tech Store description",
  };
};
