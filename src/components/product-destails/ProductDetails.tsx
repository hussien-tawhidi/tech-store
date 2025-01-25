"use client";
import { useEffect, useState } from "react";
import ProductDetailsCard from "./ProductDetailsCard";
import { fetchProductById } from "@/actions/products";
import LoadingSkillate from "./LoadingSkillate";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Breadcrumbs from "./Breadcrumbs";

const ProductDetails = ({ id }: { id: string }) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const cartItems = useSelector((state: RootState) => state?.cart?.items);
  const cartItemeById = cartItems?.find((item) => item?._id === id);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const { data, error } = await fetchProductById(id);

      setData(data);
      setError(error);
      setLoading(false);
    };

    loadProduct();
  }, []);
console.log(data)
  return (
    <div className='pt-20'>
      <Breadcrumbs name={data?.name} />
      {loading ? (
        <LoadingSkillate />
      ) : (
        <div className='animate-in animate__animated'>
          <ProductDetailsCard
            id={data?._id}
            colors={data?.colors}
            title={data?.name}
            brand={data?.brand}
            category={data?.category}
            description={data?.description}
            price={data?.price}
            discountPercentage={data?.discountPrice}
            stock={data?.stock}
            features={data?.features}
            rating={data?.ratings}
            thumbnail={data?.thumbnail}
            images={data?.images}
            availabilityStatus={data?.availabilityStatus}
            warrantyInformation={data?.warrantyInformation}
            returnPolicy={data?.returnPolicy}
            shippingInformation={data?.shippingInformation}
            quantity={cartItemeById?.quantity}
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
