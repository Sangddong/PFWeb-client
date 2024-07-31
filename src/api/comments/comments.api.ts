import {
  DComment,
  DCreateComment,
  DDeleteComment,
} from "@/types/comments.type";
import { server } from "../index";

export const createComment = async (data: DCreateComment) => {
  await server.post("/comments", data);
};

export const getComments = async (
  page: number,
  limit: number
): Promise<DComment[]> => {
  const comments = await server.get("/comments", { params: { page, limit } });
  return comments.data;
};

export const getTotalComment = async () => {
  const totalComments = await server.get("/comments/count");
  return totalComments.data;
};

export const deleteComment = async (data: DDeleteComment) => {
  const result = await server.patch("/comments", data);
  if (!result.data) throw new Error("invalid password");
  console.log(result.data);
  return result.data;
};
