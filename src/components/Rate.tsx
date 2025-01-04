"use client";

const Rate = ({ rating }: { rating: number }) => {
  const totalStars = 5; // Always show 5 stars

  return (
    <div className='flex items-center gap-2'>
      {/* Render stars */}
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={
            index < Math.floor(rating) // Highlight filled stars
              ? "text-yellow-500"
              : "text-gray-300" // Empty stars
          }>
          ★
        </span>
      ))}
      {/* Show numeric value */}
      <span className='text-slate-500'>({rating?.toFixed(1)} / 5)</span>
    </div>
  );
};

export default Rate;
