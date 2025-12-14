import axios from "axios";
import { config } from "../config";

const API_URL = config.API_URL; // http://localhost:5500

export const axiosInstance = axios.create({
    baseURL : API_URL,
})
