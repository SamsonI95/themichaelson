const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const uploadFolder = import.meta.env.VITE_CLOUDINARY_FOLDER || "michaelson/products";

export const uploadImage = async (file) => {
  if (!cloudName || !uploadPreset) {
    throw new Error(
      "Cloudinary is not configured. Set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET."
    );
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  formData.append("folder", uploadFolder);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: "POST",
    body: formData,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result?.error?.message || "Failed to upload image to Cloudinary");
  }

  return {
    imageUrl: result.secure_url,
    imagePublicId: result.public_id,
    width: result.width,
    height: result.height,
    format: result.format,
  };
};
