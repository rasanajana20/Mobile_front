import axios from "axios";

const API = axios.create({
  baseURL: "https://mobile-back-api-jffu.vercel.app/", // backend url
});

// add token if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
