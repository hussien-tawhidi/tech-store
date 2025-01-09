"use client";

import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { RiDeleteBin5Line } from "react-icons/ri";

interface Props {
  loading: boolean;
  error: string | null;
  setError: (value: string ) => void;
  setLoading: (value: boolean) => void;
  productId?: string;
  reviewId: string;
}

const DeleteReviewBtn = ({
  loading,
  setLoading,
  productId,
  error,
  setError,
  reviewId,
}: Props) => {
  // **Handle Delete Review**
  const handleDeleteReview = async (reviewId: string) => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/products/reviews", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reviewId, productId }),
      });

      if (!res.ok) throw new Error("Failed to delete review.");
      toast.success("Review deleted successfully");
    } catch (err) {
      setError("Error deleting review.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      onClick={() => handleDeleteReview(reviewId)}
      disabled={loading}
      variant={"ghost"}
      className='text-red-600 hover:text-red-800 mt-2'>
      <RiDeleteBin5Line />
    </Button>
  );
};

export default DeleteReviewBtn;
