import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://gptarot.fly.dev",
  baseURL: "http://localhost:8080",
  timeout: 5000,
});

export default axiosInstance;
