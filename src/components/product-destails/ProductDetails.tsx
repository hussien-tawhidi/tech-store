"use client";
import { useEffect, useState } from "react";
import ProductDetailsCard from "./ProductDetailsCard";
import axios from "axios";

const ProductDetails = ({ id }: { id: string }) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const { products } = await response?.data;

        const findById = products?.find((p: any) => p?.id === Number(id));
        setData(findById); // Update data with the fetched response
      } catch (err) {
        if (axios.isAxiosError(err)) {
          // Axios-specific error handling
          setError(
            err.response?.data?.message ||
              "An error occurred while fetching data."
          );
        } else {
          // Generic error handling
          setError("An unexpected error occurred.");
        }
        console.error("Fetch error:", err);
      } finally {
        setLoading(false); // Always reset loading state
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <h1>
      <ProductDetailsCard
        title={data?.title}
        brand={data?.brand}
        category={data?.category}
        description={data?.description}
        price={data?.price}
        discountPercentage={data?.discountPercentage}
        stock={data?.stock}
        rating={data?.rating}
        thumbnail={data?.thumbnail}
        images={data?.images}
        availabilityStatus={data?.availabilityStatus}
        warrantyInformation={data?.warrantyInformation}
        returnPolicy={data?.returnPolicy}
        shippingInformation={data?.shippingInformation}
      />
    </h1>
  );
};

export default ProductDetails;
