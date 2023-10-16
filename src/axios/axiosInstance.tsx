import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://gptarot.fly.dev",
  // baseURL: "http://localhost:8080",
  timeout: 12000,
});

export default axiosInstance;
