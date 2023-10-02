import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://gptarot.fly.dev",
});

export default axiosInstance;
