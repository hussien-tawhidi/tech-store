import axios from "axios";
import toast from "react-hot-toast";
import { homeBanners } from "../../constant";
import {
  HeroProductProps,
  ProductDetailsProps,
  ProductProps,
  SubmitProductParams,
} from "../../types";

interface FetchProductsProps {
  featuresName?: string;
}

interface FetchProductResponse {
  data: any | null;
  error: string | null;
  loading: boolean | null;
}

interface newProductsProps {
  id: number;
  name: string;
  price: number;
  createdDate: string; // Assuming createdDate is an ISO date string
  // Add other fields as needed
}
export const fetchHeroProducts = async () => {
  let loading = true;
  let error = null;
  let data = null; // Initialize data to null

  try {
    const response = await axios.get("/api/admin/products");
    const { products } = response.data;
    // Assign the filtered products directly to data
    data = products?.filter((p: HeroProductProps) => p.feature === true);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      error =
        err.response?.data?.message ||
        "An error occurred while fetching data. [fetchHeroProducts]";
    } else {
      error = "An unexpected error occurred. [fetchHeroProducts]"; // Handle generic error
    }
    console.error("Fetch error:", err);
  } finally {
    loading = false; // Reset loading state
  }

  return { data, error, loading }; // Return the updated states
};

export const fetchNewProduct = async () => {
  let loading = true;
  let error: string | null = null; // Initialize error as null
  let data: newProductsProps[] | any = null; // Initialize data as null

  try {
    const response = await axios.get("/api/admin/products");
    const { products } = response.data;
    const sortedProducts = products?.sort(
      (a: newProductsProps, b: newProductsProps) =>
        new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
    );
    // console.log(sortedProducts?.slice(0,5),"Sorted Products");
    data = sortedProducts?.slice(0, 5); // Update data with the fetched response
  } catch (err) {
    if (axios.isAxiosError(err)) {
      // Axios-specific error handling
      error =
        err.response?.data?.message ||
        "An error occurred while fetching data. [fetchNewProduct]";
    } else {
      // Generic error handling
      error = "An unexpected error occurred. [fetchNewProduct]";
    }
    console.error("Fetch error:", err);
  } finally {
    loading = false; // Always reset loading state
  }

  return { data, error, loading }; // Return the updated states
};

export const fetchHotProducts = async () => {
  let loading = true;
  let error: string | null = null; // Initialize error as null
  let data: newProductsProps[] | any = null; // Initialize data as null
  try {
    const response = await axios.get("/api/admin/products");
    const { products } = await response.data;
    // you can add hot of the week
    const sortedProducts = products.sort(
      (a: newProductsProps, b: newProductsProps) =>
        new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
    );
    data = sortedProducts.slice(9, 22);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      // Axios-specific error handling
      error =
        err.response?.data?.message ||
        "An error occurred while fetching data. [fetchHotProducts]";
    } else {
      // Generic error handling
      error = "An unexpected error occurred. [fetchHotProducts]";
    }
    console.error("Fetch error:", err);
  } finally {
    loading = false; // Always reset loading state
  }

  return { data, error, loading }; // Return the updated states
};

export const fetchBestSells = async () => {
  let loading = true;
  let error: string | null = null; // Initialize error as null
  let data: newProductsProps[] | any = null; // Initialize data as null

  try {
    const response = await axios.get("/api/admin/products");
    const { products } = await response.data;
    // you cant add best sells
    const sortedProducts = products.sort(
      (a: newProductsProps, b: newProductsProps) =>
        new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
    );
    data = sortedProducts.slice(5, 13); // Update data with the fetched response
  } catch (err) {
    if (axios.isAxiosError(err)) {
      // Axios-specific error handling
      error =
        err.response?.data?.message ||
        "An error occurred while fetching data. [fetchBestSells]";
    } else {
      // Generic error handling
      error = "An unexpected error occurred. [fetchBestSells]";
    }
    console.error("Fetch error: ", err);
  } finally {
    loading = false; // Always reset loading state
  }

  return { data, error, loading }; // Return the updated states
};

export const fetchTopRatedProducts = async () => {
  let loading = true;
  let error: string | null = null; // Initialize error as null
  let data: newProductsProps[] | any = null; // Initialize data as null
  try {
    const response = await axios.get("/api/admin/products");
    const { products } = await response?.data;
    // you can add hot of the week
    const sortedProducts = products.sort(
      (a: newProductsProps, b: newProductsProps) =>
        new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
    );
    data = sortedProducts.slice(13, 20); // Update data with the fetched response
  } catch (err) {
    if (axios.isAxiosError(err)) {
      // Axios-specific error handling
      error =
        err.response?.data?.message ||
        "An error occurred while fetching data. [fetchTopRatedProducts]";
    } else {
      // Generic error handling
      error = "An unexpected error occurred. [fetchTopRatedProducts]";
    }
    console.error("Fetch error:", err);
  } finally {
    loading = false; // Always reset loading state
  }

  return { data, error, loading }; // Return the updated states
};

export const fetchProductById = async (
  id: string
): Promise<FetchProductResponse> => {
  let loading = true;
  let error = null;
  let data = null;

  try {
    const response = await axios.get("/api/admin/products");
    const { products } = response.data;

    // Find product by ID
    data = products?.find((p: any) => p?._id === id);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      // Axios-specific error
      error =
        err.response?.data?.message ||
        "An error occurred while fetching data. [fetchProductById]";
    } else {
      // Generic error
      error = "An unexpected error occurred. [fetchProductById]";
    }
    console.error("Fetch error:", err);
  } finally {
    loading = false; // Reset loading state
  }

  return { data, error, loading };
};

export const createProductFunction = async (
  params: SubmitProductParams,
  setLoading: (loading: boolean) => void,
  router: any // You can replace 'any' with Next.js Router type if needed
) => {
  const {
    name,
    banner,
    price,
    discount,
    description,
    category,
    subcategory,
    brand,
    stock,
    sku,
    createdBy,
    features,
    colors,
    image,
  } = params;

  setLoading(true);

  try {
    // Prepare FormData
    const formData = new FormData();
    formData.append("name", name);
    formData.append("banner", banner as Blob);
    formData.append("price", price.toString());
    formData.append("discount", discount.toString());
    formData.append("description", description);
    formData.append("category", category);
    formData.append("subcategory", subcategory);
    formData.append("brand", brand);
    formData.append("stock", stock.toString());
    formData.append("sku", sku);
    formData.append("createdBy", createdBy);
    formData.append("features", features);

    // Serialize colors
    const serializedColors = colors
      .map((color) => `${color.name}:${color.hex}`)
      .join(",");
    formData.append("colors", serializedColors);

    // Add images
    image?.forEach((file) => {
      formData.append("image", file, file.name);
    });

    const response = await axios.post("/api/admin/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 201) {
      toast.success("Product created successfully");
      router.push("/dashboard/products");
    } else {
      toast.error(response.data.message);
    }
  } catch (err: any) {
    console.error(err);
    toast.error("Failed to create the product");
  } finally {
    setLoading(false);
  }
};

export const fetchTechStoreOffers = async () => {
  let loading = true;
  let error: string | null = null; // Initialize error as null
  let data: newProductsProps[] | any = null; // Initialize data as null
  try {
    const response = await axios.get("/api/admin/products");
    const { products } = await response?.data;
    // you can add hot of the week
    const sortedProducts = products.sort(
      (a: newProductsProps, b: newProductsProps) =>
        new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
    );
    data = sortedProducts.slice(16, 23);
    console.log(data); // Update data with the fetched response
  } catch (err) {
    if (axios.isAxiosError(err)) {
      // Axios-specific error handling
      error =
        err.response?.data?.message ||
        "An error occurred while fetching data. [fetchTechStoreOffers]";
    } else {
      // Generic error handling
      error = "An unexpected error occurred. [fetchTechStoreOffers]";
    }
    console.error("Fetch error:", err);
  } finally {
    loading = false; // Always reset loading state
  }

  return { data, error, loading }; // Return the updated states
};

export const fetchApplliance = async () => {
  let loading = true;
  let error: string | null = null; // Initialize error as null
  let data: newProductsProps[] | any = null; // Initialize data as null
  try {
    const response = await axios.get("/api/admin/products");
    const { products } = await response?.data;
    // you can add hot of the week
    const sortedProducts = products.sort(
      (a: newProductsProps, b: newProductsProps) =>
        new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
    );
    data = sortedProducts.slice(16, 23);
    // Update data with the fetched response
  } catch (err) {
    if (axios.isAxiosError(err)) {
      // Axios-specific error handling
      error =
        err.response?.data?.message ||
        "An error occurred while fetching data. [fetchTechStoreOffers]";
    } else {
      // Generic error handling
      error = "An unexpected error occurred. [fetchTechStoreOffers]";
    }
    console.error("Fetch error:", err);
  } finally {
    loading = false; // Always reset loading state
  }

  return { data, error, loading }; // Return the updated states
};

export const updateProduct = async (
  productId: string,
  updatedFields: Record<string, any>
) => {
  try {
    // Create FormData to handle file uploads and other data
    const formData = new FormData();

    // Append required product ID
    formData.append("productId", productId);

    // Append optional fields only if provided
    Object.keys(updatedFields).forEach((key) => {
      const value = updatedFields[key];
      if (value !== undefined && value !== null) {
        // Handle array fields
        if (Array.isArray(value)) {
          formData.append(key, value.join(","));
        }
        // Handle file uploads
        else if (value instanceof File || value instanceof Blob) {
          formData.append(key, value);
        }
        // Handle other fields
        else {
          formData.append(key, value.toString());
        }
      }
    });

    // Make PATCH request to the server
    const response = await fetch("/api/admin/products", {
      method: "PATCH",
      body: formData,
    });

    const result = await response.json();

    // Handle errors or return success
    if (!response.ok) {
      throw new Error(result.error || "Failed to update product");
    }

    return result; // Updated product data
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export async function deleteProduct(productId: string) {
  const formData = new FormData();

  formData.append("productId", productId);

  const response = await fetch(`/api/admin/products`, {
    method: "DELETE",
    body: formData,
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error || "Failed to delete product.");
  }
  return result;
}

export const fetchProductsByCategory = async ({
  featuresName,
}: FetchProductsProps): Promise<ProductProps[]> => {
  try {
    const feature = homeBanners.find(
      (feature) => feature.link === featuresName
    );

    const { data } = await axios.get("/api/admin/products");

    const filteredProducts = data.products.filter(
      (product: ProductDetailsProps) => product.category === featuresName
    );

    return filteredProducts;
  } catch (error) {
    toast.error("Failed to fetch products.");
    return [];
  }
};
