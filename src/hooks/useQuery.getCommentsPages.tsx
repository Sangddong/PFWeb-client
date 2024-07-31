import { getTotalComment } from "@/api/comments/comments.api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetTotalComments(limit: number) {
  const { data } = useQuery({
    queryKey: ["pages"],
    queryFn: () => getTotalComment(),
  });

  const page =
    data &&
    (data % limit > 0
      ? Math.floor(data / limit) + 1
      : Math.floor(data / limit));

  const pages = [page];
  if (page) {
    for (let i = 0; i < page; i++) {
      pages[i] = i + 1;
    }
  }

  return {
    pages,
  };
}
