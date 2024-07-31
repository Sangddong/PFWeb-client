import { getComments } from "@/api/comments/comments.api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetCommentsPerPage(
  currentPage: number,
  limit: number
) {
  const { data } = useQuery({
    queryKey: ["comments", currentPage],
    queryFn: () => getComments(currentPage, limit),
  });

  return {
    data,
  };
}
