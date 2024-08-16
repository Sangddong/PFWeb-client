import { server } from "../index";

const baseURL = server.defaults.baseURL ?? process.env.NEXT_PUBLIC_API_URL;

export const getLikes = async () => {
  const baseURL = server.defaults.baseURL ?? process.env.NEXT_PUBLIC_API_URL;

  const totalLikes = await server.get("/likes", { baseURL });
  return totalLikes;
};

export const like = async () => {
  const baseURL = server.defaults.baseURL ?? process.env.NEXT_PUBLIC_API_URL;

  await server.post("/likes/like", {}, { baseURL });
};

export const cancelLike = async () => {
  const baseURL = server.defaults.baseURL ?? process.env.NEXT_PUBLIC_API_URL;

  await server.post("/likes/cancelLike", {}, { baseURL });
};
