// src/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // Your backend base URL
  withCredentials: true, // optional if using cookies
});

export default instance;
