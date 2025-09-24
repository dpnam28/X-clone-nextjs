"use server";

import { ImageType } from "./components/MainThread/Share";
import { imagekit } from "./utils/variables";

export const shareAction = async (
  formData: FormData,
  imageSettings: ImageType
) => {
  const file = formData.get("file") as File;
  //   const description = formData.get("description") as string;

  if (file && file.size > 0) {
    try {
      // Convert file to buffer for upload
      const fileBuffer = Buffer.from(await file.arrayBuffer());

      const transformation = `w-600 ${
        imageSettings.type === "square"
          ? "ar-1-1"
          : imageSettings.type === "wide"
          ? "ar-16-9"
          : ""
      }`;

      // Upload to ImageKit media library in a specific folder
      imagekit.upload(
        {
          file: fileBuffer,
          fileName: file.name,
          folder: "/x-clone/posts", // Specify the folder in ImageKit media library
          useUniqueFileName: true,
          ...(file.type.includes("image") && {
            transformation: {
              pre: transformation,
            },
          }),
          customMetadata: {
            sensitive: imageSettings.sensitive,
          },
        },
        (error, result) => {
          if (error) throw new Error("Failed to upload image");
          console.log(result);
        }
      );
    } catch (error) {
      console.error("Upload failed:", error);
      throw new Error("Failed to upload image");
    }
  }
};
