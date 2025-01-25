import Mobile from "@/components/category/mobile/Mobile";
import Breadcrumbs from "@/components/product-destails/Breadcrumbs";

const page = async ({ params }: any) => {
  const param = await params;
  const { menuCategory } = param;

 const formatBreadcrumb = (link: string) => {
   // Decode URL-encoded characters (e.g., %24 -> $)
   const decodedLink = decodeURIComponent(link);

   // Replace any special characters with a space
   return decodedLink.replace(/[%$&]+/g, " ");
 };
  // Format the menuCategory
  const formattedMenuCategory = formatBreadcrumb(menuCategory);

  return (
    <div className="mt-20">
      <Breadcrumbs name={formattedMenuCategory} />
      <Mobile menuCategory={menuCategory} />
    </div>
  );
};

export default page;
