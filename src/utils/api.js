import { axiosInstance } from "./axiosInstance";

export const fetchEvents = async () => {
  const response = await axiosInstance.get("/events");
  return response.data;
};

export const fetchPastEvents = async () => {
    const response = await axiosInstance.get('/events/finished');
    return response.data;
};
