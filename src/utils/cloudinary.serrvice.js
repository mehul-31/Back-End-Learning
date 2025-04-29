import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

(async function () {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
});

const uploadOnClodinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // Upload the file on Cloudinary

    const response = await cloudinary.uploader.upload(localFilePath, {
      resouce_type: "auto",
    });
    console.log(response.url);
    //file has been uploaded
    console.log("file has been uploaded on cloudinary");
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temp file as the upload operation got failed
    console.error(error);
    return null;
  }
};

export { uploadOnClodinary };
