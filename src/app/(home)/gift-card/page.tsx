import Breadcrumbs from "@/components/product-destails/Breadcrumbs";
import GiftCard from "@/components/gift-card/GiftCard";

export default function GiftCardPage() {
  return (
    <div className='pt-10 h-full'>
      <Breadcrumbs name='Gift Cards' />
      <GiftCard />
    </div>
  );
}

export const generateMetadata = async () => {
  return {
    title: `Choose best card gift for your special person - Tech Store`,
    description: "Tech Store description",
  };
};
