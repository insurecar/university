import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://eu-poznan-api.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});