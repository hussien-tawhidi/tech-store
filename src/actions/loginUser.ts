// utils/registerUser.ts

import axios from "axios";
import toast from "react-hot-toast";

interface RegisterUserParams {
  email: string;
  password: string;
  name: string;
}

export async function registerUser({
  email,
  password,
  name,
}: RegisterUserParams): Promise<void> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_CREATE_USERS as string;

    const response = await axios.post(apiUrl, {
      email,
      password,
      name,
    });

    if (response.status === 201) {
      console.log("User registered successfully:", response.data.message);
      toast.success(
        "Registration successful! Please check your email for confirmation."
      );
    } else {
      console.warn("Unexpected response:", response.data);
    }
  } catch (error: any) {
    if (error.response) {
      console.error("Error registering user:", error.response.data.message);
      toast.error(`Registration failed: ${error.response.data.message}`);
    } else {
      console.error("Network or unexpected error:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  }
}
