import { server } from "../index";

const baseURL = server.defaults.baseURL ?? process.env.NEXT_PUBLIC_API_URL;

export const getLikes = async () => {
  const totalLikes = await server.get("/likes", { baseURL });
  return totalLikes;
};

export const like = async () => {
  await server.post("/likes/like", {}, { baseURL });
};

export const cancelLike = async () => {
  await server.post("/likes/cancelLike", {}, { baseURL });
};
