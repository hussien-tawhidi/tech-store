"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import TextareaInput from "@/components/TextareaInput";
import DeleteReviewBtn from "./DeleteReviewBtn";
import { ReviewComment } from "../../../../types";

interface Props {
  productId: string;
}

const ReviewSection = ({ productId }: Props) => {
  const [reviews, setReviews] = useState<ReviewComment[]>([]);
  const [rating, setRating] = useState(0); // Default is 0 (no selection)
  const [hover, setHover] = useState(0); // Track hover
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { data: session } = useSession();

  const userId = session?.user._id;
  // **Fetch Reviews**
const fetchReviews = async () => {
  try {
     // Replace with your dynamic productId
    const res = await fetch(
      `/api/admin/products/reviews?productId=${productId}`,
      {
        method: "GET",
      }
    );
    if (!res.ok) throw new Error("Failed to fetch reviews.");
    const data = await res.json();
    setReviews(data.reviews);
  } catch (err) {
    setError("Error fetching reviews: " + err);
  }
};

  // **Handle Add Review**
  const handleAddReview = async () => {
    if (!comment || rating === 0) {
      // Ensure a rating is selected
      setError("Rating and comment are required.");
      return;
    }

    setLoading(true);
    setError("");

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

      if (!res.ok) throw new Error("Failed to add review.");
      await fetchReviews(); // Refresh reviews
      setComment("");
      setRating(0); // Reset form
    } catch (err) {
      setError("Error adding review.");
    } finally {
      setLoading(false);
    }
  };

  // Check if logged-in user owns the review
  const isUserReview = (reviewUserId: string) => {
    return reviewUserId === userId;
  };

  // Fetch reviews on component load
  useEffect(() => {
    fetchReviews();
  }, [productId]);

  return (
    <div className='space-y-6 w-[100%] mx-auto'>
      {error && <p className='text-red-500'>{error}</p>}

      {/* Review Form */}
      {!session ? (
        <div className='flex items-center text-muted-foreground'>
          <Button variant={"outline"}>Login </Button>
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
                onClick={() => setRating(star)} // Set rating on click
                onMouseEnter={() => setHover(star)} // Highlight stars on hover
                onMouseLeave={() => setHover(rating)} // Reset hover on mouse leave
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
            variant={"outline"}
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
              {/* Display stars for the review */}
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
