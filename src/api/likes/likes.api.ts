import { server } from "../index";

export const getLikes = async () => {
  const totalLikes = await server.get("/likes");
  return totalLikes;
};

export const like = async () => {
  await server.post("/likes/like");
};

export const cancelLike = async () => {
  await server.post("/likes/cancelLike");
};
