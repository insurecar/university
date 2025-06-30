import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://sweet-ferdinanda-oszysiak-770a0140.koyeb.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchEvents = async () => {
  const response = await axiosInstance.get("/events");
  return response.data;
};
