import ProductBanner from "@/components/products/ProductsHero";

const Category = async ({ params }: any) => {
  const {title}= await params;

  return (
    <div>
      <ProductBanner
        image='/assets/mac/continuity.png'
        off={20}
        title={title}
      />
      <div className="">
        
      </div>
    </div>
  );
};

export default Category;
