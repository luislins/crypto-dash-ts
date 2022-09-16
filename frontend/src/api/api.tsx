import axios, { AxiosResponse, Method } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/", // Usar dotEnv dps
});


export default api;
