import {
  DComment,
  DCreateComment,
  DDeleteComment,
} from "@/types/comments.type";
import { server } from "../index";

export const createComment = async (data: DCreateComment) => {
  const baseURL = server.defaults.baseURL ?? process.env.NEXT_PUBLIC_API_URL;

  await server.post("/comments", data, {
    baseURL,
  });
};

export const getComments = async (
  page: number,
  limit: number
): Promise<DComment[]> => {
  const baseURL = server.defaults.baseURL ?? process.env.NEXT_PUBLIC_API_URL;

  const comments = await server.get("/comments", {
    params: { page, limit },
    baseURL,
  });
  return comments.data;
};

export const getTotalComment = async () => {
  const baseURL = server.defaults.baseURL ?? process.env.NEXT_PUBLIC_API_URL;

  const totalComments = await server.get("/comments/count", {
    baseURL,
  });
  return totalComments.data;
};

export const deleteComment = async (data: DDeleteComment) => {
  const baseURL = server.defaults.baseURL ?? process.env.NEXT_PUBLIC_API_URL;

  const result = await server.patch("/comments", data, { baseURL });
  if (!result.data) throw new Error("invalid password");
  return result.data;
};
