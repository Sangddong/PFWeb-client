import {
  DComment,
  DCreateComment,
  DDeleteComment,
} from "@/types/comments.type";
import { server } from "../index";

const baseURL = server.defaults.baseURL ?? process.env.NEXT_PUBLIC_API_URL;

export const createComment = async (data: DCreateComment) => {
  await server.post("/comments", data, {
    baseURL,
  });
};

export const getComments = async (
  page: number,
  limit: number
): Promise<DComment[]> => {
  const comments = await server.get("/comments", {
    params: { page, limit },
    baseURL,
  });
  return comments.data;
};

export const getTotalComment = async () => {
  const totalComments = await server.get("/comments/count", {
    baseURL,
  });
  return totalComments.data;
};

export const deleteComment = async (data: DDeleteComment) => {
  const result = await server.patch("/comments", data, { baseURL });
  if (!result.data) throw new Error("invalid password");
  return result.data;
};
