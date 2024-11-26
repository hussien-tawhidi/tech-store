const CategoryPage = async ({ params }: any) => {
  const { category } = await params;
  console.log(category);
  return (
    <div>
      This page is for{" "}
      <span className='uppercase text-blue-600'>{category}</span>
    </div>
  );
};

export default CategoryPage;
