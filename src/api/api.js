import axios from "axios";

const URL = "https://eu-poznan-api.onrender.com/api";

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${URL}/auth/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw new Error("Login failed. Please check your credentials.");
  }
};
