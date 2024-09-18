import axios from "axios";
import { toast } from "react-toastify";

export const handleFileUpload = async (uploadFile) => {
  const formData = new FormData();
  formData.append("file", uploadFile);
  formData.append("upload_preset", "yoew8qqy");

  try {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/anonymous25/image/upload",
      formData
    );
    return response.data.secure_url;
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};
