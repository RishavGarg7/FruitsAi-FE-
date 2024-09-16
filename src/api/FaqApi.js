import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://fruitsai-be.onrender.com/api-v1";

export const addFaq = async (name, title, desc) => {
  try {
    const res = await axios.post(`${API_URL}/faq/add`, {
      name,
      title,
      desc,
    });
    return res.data;
  } catch (err) {
    err.message
      ? toast.error(err.message)
      : toast.error("Something Went Wrong !");
    console.log(err.message);
  }
};

export const getFaq = async () => {
  try {
    const res = await axios.get(`${API_URL}/faq/`);
    return res.data.data;
  } catch (err) {
    err.message
      ? toast.error(err.message)
      : toast.error("Something Went Wrong !");
    console.log(err.message);
  }
};

export const editFaq = async (id, name, title, desc) => {
  console.log(id, name, title, desc);
  try {
    const res = await axios.put(`${API_URL}/faq/edit`, {
      id,
      name,
      title,
      desc,
    });
    return res.data.data;
  } catch (err) {
    err.message
      ? toast.error(err.message)
      : toast.error("Something Went Wrong !");
    console.log(err.message);
  }
};

export const deleteFaq = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/faq/delete/${id}`);
    return res.data;
  } catch (err) {
    err.message
      ? toast.error(err.message)
      : toast.error("Something Went Wrong !");
    console.log(err.message);
  }
};
