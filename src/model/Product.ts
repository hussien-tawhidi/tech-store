import mongoose, { Schema, Document, Model } from "mongoose";

// Interface for a single image
interface IImage {
  public_id: string;
  url: string;
}

// Interface for a single review
interface IReview {
  user: mongoose.Types.ObjectId;
  name: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

// Interface for the Product Document
export interface IProduct extends Document {
  name: string;
  slug: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: string;
  subcategories?: string[];
  brand: string;
  stock: number;
  sku: string;
  ratings: number;
  images: IImage[];
  reviews: IReview[];
  numOfReviews: number;
  sold: number;
  createdBy: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;

  // Virtuals
  isOnSale: boolean;

  // Instance Methods
  checkStock(quantity: number): boolean;
}

// Schema Definition
const productSchema: Schema<IProduct> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxlength: [150, "Product name cannot exceed 150 characters"],
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      minlength: [20, "Description must be at least 20 characters long"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price must be at least 0"],
    },
    discountPrice: {
      type: Number,
      validate: {
        validator: function (this: IProduct, value: number) {
          return value < this.price;
        },
        message:
          "Discount price ({VALUE}) should be less than the regular price",
      },
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
      enum: {
        values: [
          "Electronics",
          "Clothing",
          "Home Appliances",
          "Books",
          "Toys",
          "Health",
          "Beauty",
          "Sports",
          "Grocery",
          "Others",
        ],
        message: "Please select a valid category",
      },
    },
    subcategories: [
      {
        type: String,
        trim: true,
      },
    ],
    brand: {
      type: String,
      required: [true, "Brand is required"],
    },
    stock: {
      type: Number,
      required: [true, "Stock count is required"],
      min: [0, "Stock cannot be negative"],
    },
    sku: {
      type: String,
      unique: true,
      required: [true, "SKU is required"],
      trim: true,
    },
    ratings: {
      type: Number,
      default: 0,
      min: [0, "Ratings cannot be negative"],
      max: [5, "Ratings cannot exceed 5"],
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
          min: [1, "Rating must be at least 1"],
          max: [5, "Rating cannot exceed 5"],
        },
        comment: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    numOfReviews: {
      type: Number,
      default: 0,
    },
    sold: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Virtual for calculated fields
productSchema.virtual("isOnSale").get(function (this: IProduct) {
  return !!this.discountPrice && this.discountPrice < this.price;
});

// Middleware to auto-generate slug from name
productSchema.pre("save", function (next) {
  if (this.isModified("name")) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }
  next();
});

// Middleware to update `updatedAt` timestamp on update
productSchema.pre("findOneAndUpdate", function (next) {
  this.set({ updatedAt: Date.now() });
  next();
});

// Static method for average rating update
productSchema.statics.updateAverageRating = async function (productId: string) {
  const product = await this.findById(productId);
  if (product && product.reviews.length > 0) {
    const averageRating =
      product.reviews.reduce(
        (sum: number, review: IReview) => sum + review.rating,
        0
      ) / product.reviews.length;
    product.ratings = averageRating;
    product.numOfReviews = product.reviews.length;
    await product.save();
  }
};

// Virtual property for sale status
productSchema.virtual("isOnSale").get(function (this: IProduct) {
  return !!this.discountPrice && this.discountPrice < this.price;
});


// Instance method to check stock
productSchema.methods.checkStock = function (quantity: number): boolean {
  return this.stock >= quantity;
};

// Create and export the Product model
const Product: Model<IProduct> = mongoose.model<IProduct>(
  "Product",
  productSchema
);

export default Product;
