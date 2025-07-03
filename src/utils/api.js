import { axiosInstance } from "./axiosInstance";

export const fetchEvents = async () => {
  const response = await axiosInstance.get("/events");
  return response.data;
};

export const fetchPastEvents = async () => {
  const response = await axiosInstance.get("/events/finished");
  return response.data;
};

export const fetchTeamMembers = async () => {
  const response = await axiosInstance.get("/team-members");
  return response.data;
};

export const login = async (username, password) => {
  const response = await axiosInstance.post("/auth/login", {
    username,
    password,
  });
  return response.data;
};
