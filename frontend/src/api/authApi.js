import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/auth", 
});

// Register
export const register = async (data) => {
  const res = await API.post("/register", data);
  return res.data;
};

// Login
export const login = async (data) => {
  const res = await API.post("/login", data);
  return res.data;
};

// Get current user
export const getCurrentUser = async (token) => {
  const res = await API.get("/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
