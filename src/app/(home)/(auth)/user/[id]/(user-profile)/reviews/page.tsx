import Reviews from "@/components/auth/user-profile/Reviews";
import Link from "next/link";

const ReviewsPage = () => {
  const reviews = [
    {
      user: "Irina B.",
      date: "20 October 2024",
      rating: 4,
      comment: "charms 1",
      images: [
        "https://res.cloudinary.com/dvb6lgat3/image/upload/v1733295685/tech-store/h2qe127ze9z6annkqb3u.jpg", // Replace with your image URLs
        "https://res.cloudinary.com/dvb6lgat3/image/upload/v1733295685/tech-store/vwi515frzuji0niesjou.jpg",
      ],
      countryFlag: "cu", // Replace with the respective country flag
    },
  ];

  return (
    <div className='p-6 min-h-screen text-slate-600'>
      <p className='h-1 font-bold mb-10 md:text-3xl '>Reviews</p>
      {reviews.length <= 0
        ? (
          <div className="font-semibold">
            <p>You don't has reiws any product yer</p>
            <Link href={"/"} className="text-blue-500 underline font-normal">Go to main page</Link>
        </div>
        )
        : reviews.map((review, index) => <Reviews key={index} {...review} />)}
    </div>
  );
};

export default ReviewsPage;
