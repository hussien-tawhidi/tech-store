import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});
export const getCloudConfig = async () => {
  return {
    name: process.env.CLOUD_NAME!,
    key: process.env.CLOUD_API_KEY!,
  };
};

// generate our cloud signature
export const getCloudSignature = async () => {
  const secret = cloudinary.config().api_secret!;
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.utils.api_sign_request({ timestamp }, secret);

  return { timestamp, signature };
};
export async function uploadToCloudinary(files: File[], folder?: string) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME;

  if (!cloudName || !uploadPreset) {
    throw new Error("Cloudinary configuration is missing");
  }

  // Use Promise.all for concurrent uploads
  const uploadPromises = files.map((file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    if (folder) formData.append("folder", folder);

    return fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorDetails = await response.json();
          throw new Error(
            `Cloudinary upload failed: ${JSON.stringify(errorDetails)}`
          );
        }
        return response.json();
      })
      .then((data) => ({
        url: data.secure_url,
        public_id: data.public_id,
      }));
  });

  return Promise.all(uploadPromises); // Return all resolved uploads
}

export async function uploadbannerToCloudinary(file: File, folder?: string) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME;

  if (!cloudName || !uploadPreset) {
    throw new Error("Cloudinary configuration is missing");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  if (folder) formData.append("folder", folder);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    { method: "POST", body: formData }
  );

  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(
      `Cloudinary upload failed: ${JSON.stringify(errorDetails)}`
    );
  }

  return await response.json();
}



