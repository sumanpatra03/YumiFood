import { baseUrl } from "./apiUrl";
import axios from "axios";

let axiosInstance = axios.create({
  baseURL: baseUrl,
});

export default axiosInstance;
