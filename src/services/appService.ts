import axios, { AxiosInstance } from "axios";

const BASE_URL = "https://api.rebucom.com/api/v1";

const token = localStorage.getItem("token");

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
axios.defaults.headers.common["Content-Type"] = "application/json";
// axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

export const http: AxiosInstance = axios.create({ baseURL: BASE_URL });
