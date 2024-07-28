import axios from "axios";
import viewApi from "./view";
import commentApi from "./comments";
import likeApi from "./likes";

export const server = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

const api = {};

export default api;
