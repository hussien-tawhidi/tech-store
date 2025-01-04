import { z } from "zod";

export const checkoutSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  email: z.string().email("Invalid email address"),
  province: z.string().min(2, "Province must be at least 2 characters long"),
  city: z.string().min(2, "City must be at least 2 characters long"),
  street: z.string().min(1, "Street must be defined"),
  postCode: z.string().min(5, "PostCode must be at least 5 characters long"),
});
