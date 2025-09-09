import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/auth", 
});

// Register
export const register = async (data) => {
  try {
    const res = await API.post("/register", data);
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Login
export const login = async (data) => {
  try {
    const res = await API.post("/login", data);
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Get current user
export const getCurrentUser = async (token) => {
  try {
    const res = await API.get("/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
