import axios from "axios";
import { toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/user/login`, { email, password });
    console.log(res?.data?.success);
    return res?.data?.success;
  } catch (err) {
    err.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("Something Went Wrong !");
    console.log(err?.response?.data?.message);
  }
};

export const register = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/user/register`, {
      email,
      password,
    });
    console.log(res?.data?.success);
    return res?.data?.success;
  } catch (err) {
    err.message
      ? toast.error(err?.response?.data?.message)
      : toast.error("Something Went Wrong !");
    console.log(err?.response?.data?.message);
  }
};
