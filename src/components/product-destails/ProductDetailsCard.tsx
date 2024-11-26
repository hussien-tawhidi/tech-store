import Image from "next/image";

interface ProductProps {
  title: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
  rating: number;
  thumbnail: string;
  images: string[];
  availabilityStatus: string;
  warrantyInformation: string;
  returnPolicy: string;
  shippingInformation: string;
}

const ProductDetailsCard = ({
  title,
  brand,
  category,
  description,
  price,
  discountPercentage,
  stock,
  rating,
  thumbnail,
  images,
  availabilityStatus,
  warrantyInformation,
  returnPolicy,
  shippingInformation,
}: ProductProps) => {
  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2
  );

  return (
    <div className='container mx-auto p-4 md:p-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
        {/* Product Images */}
        <div className='lg:col-span-5'>
          <div className='flex flex-col items-center gap-4'>
            {thumbnail && (
              <Image
                src={thumbnail}
                alt={title}
                width={400}
                height={400}
                className='rounded-lg'
              />
            )}
            <div className='flex gap-2'>
              {images?.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`${title} Image ${index + 1}`}
                  width={100}
                  height={100}
                  className='rounded-lg border hover:shadow-lg'
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className='lg:col-span-7'>
          <h1 className='text-2xl font-bold'>{title}</h1>
          <p className='text-gray-600'>
            <strong>Brand:</strong> {brand}
          </p>
          <p className='text-gray-600'>
            <strong>Category:</strong> {category}
          </p>
          <div className='flex items-center gap-2 my-2'>
            <span className='text-yellow-500'>
              {"★".repeat(Math.floor(rating))}
            </span>
            <span className='text-gray-500'>({rating?.toFixed(1)})</span>
          </div>
          <p className='text-gray-700 mt-2'>{description}</p>
          <p className='mt-4'>
            <strong>Price:</strong>{" "}
            <span className='text-xl font-bold'>${discountedPrice}</span>{" "}
            {discountPercentage > 0 && (
              <span className='line-through text-gray-500'>
                ${price.toFixed(2)}
              </span>
            )}
          </p>
          <p
            className={`mt-2 ${
              stock > 0 ? "text-green-600" : "text-slate-600"
            }`}>
            <strong>Status:</strong>{" "}
            <span>
              {stock < 10 ? (
                <span className='text-red-500'>
                  {availabilityStatus} ({stock} left in stock)
                </span>
              ) : (
                <>
                  {availabilityStatus} ({stock} left in stock)
                </>
              )}
            </span>
          </p>
          <div className='mt-4'>
            <button className='px-6 py-3 bg-slate-600 text-white rounded-md hover:bg-slate-700'>
              Add to Cart
            </button>
          </div>

          <div className='mt-6'>
            <p>
              <strong>Warranty:</strong> {warrantyInformation}
            </p>
            <p>
              <strong>Return Policy:</strong> {returnPolicy}
            </p>
            <p>
              <strong>Shipping:</strong> {shippingInformation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
