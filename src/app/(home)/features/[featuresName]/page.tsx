

import Features from "@/components/features/Features";
const heroBannerPages = async ({ params }: any) => {
  const param = await params;

  const { featuresName } = param;


  return (
    <div className="mt-16">
      <Features featuresName={featuresName} />
    </div>
  );
};

export default heroBannerPages;
