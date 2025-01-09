"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import TextareaInput from "@/components/TextareaInput";
import DeleteReviewBtn from "./DeleteReviewBtn";
import { ReviewComment } from "../../../../types";
import axios from "axios";

interface Props {
  productId: string | undefined; // Allow productId to be undefined initially
}

const ReviewSection = ({ productId }: Props) => {
  const [reviews, setReviews] = useState<ReviewComment[]>([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { data: session } = useSession();

  const userId = session?.user?._id;

  // **Fetch Reviews**
  const fetchReviews = async () => {
    if (!productId) {
      console.error("Product ID is missing.");
      setError("Product ID is required.");
      return;
    }

    const url = process.env.NEXT_PUBLIC_BASE_URL as string;

    try {
      const response = await axios.get(`${url}/api/admin/products/reviews`);

      const reviews = await response.data;
      setReviews(reviews.reviews);

      setError(null); // Clear any previous errors
    } catch (err) {
      console.error("ERROR IN FETCHING REVIEWS:" + err);
      setError("Failed to fetch reviews. Please try again later.......");
    }
  };

  // **Handle Add Review**
  const handleAddReview = async () => {
    if (!comment || rating === 0) {
      setError("Rating and comment are required.");
      return;
    }

    if (!productId) {
      setError("Product ID is required to submit a review.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/products/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          rating,
          comment,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to add review.");
      }

      await fetchReviews(); // Refresh reviews after successful addition
      setComment("");
      setRating(0);
    } catch (err) {
      console.error("Error adding review:", err);
      setError("Error adding review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Check if logged-in user owns the review
  const isUserReview = (reviewUserId: string) => reviewUserId === userId;

  // Fetch reviews only when productId is defined
  useEffect(() => {
    if (productId) {
      fetchReviews();
    }
  }, [productId]);

  return (
    <div className='space-y-6 w-full mx-auto'>
      {error && <p className='text-red-500'>{error}</p>}

      {/* Review Form */}
      {!session ? (
        <div className='flex items-center text-muted-foreground'>
          <Button variant='outline'>Login</Button>
        </div>
      ) : (
        <div className='p-4 border rounded-md'>
          <h4 className='font-semibold mb-2'>Add a Review</h4>
          <div className='flex items-center gap-1 mb-4'>
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={24}
                className={`cursor-pointer ${
                  (hover || rating) >= star ? "text-blue-500" : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(rating)}
              />
            ))}
          </div>
          <TextareaInput
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className='h-32'
            placeholder='Write your review...'
          />
          <Button
            onClick={handleAddReview}
            disabled={loading}
            variant='outline'
            className='border-slate-600'>
            {loading ? "Submitting..." : "Submit Review"}
          </Button>
        </div>
      )}

      {/* Reviews List */}
      {reviews.length > 0 ? (
        <ul className='space-y-4'>
          {reviews.map((review) => (
            <li
              key={review._id}
              className='p-4 border relative rounded shadow-sm'>
              <div className='flex justify-between items-center'>
                <h5 className='font-semibold'>{review?.name}</h5>
                <span className='text-sm text-gray-500'>
                  {new Date(review?.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className='flex gap-1'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    size={20}
                    className={`${
                      star <= review.rating ? "text-blue-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className='text-gray-700'>{review?.comment}</p>
              {isUserReview(review.user) && (
                <DeleteReviewBtn
                  error={error}
                  loading={loading}
                  productId={productId}
                  reviewId={review?._id}
                  setError={setError}
                  setLoading={setLoading}
                />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewSection;
