"use client";
import LayoutPage from "@/components/layoutPage/LayoutPage";
import Title from "@/components/sectionTitle/Title";
import React, { useState } from "react";
import style from "./Comments.module.css";
import WriteComment from "./writeComment/WirteComments";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DComment, DDeleteComment } from "@/types/comments.type";
import { deleteComment } from "@/api/comments/comments.api";
import useQueryGetCommentsPerPage from "@/hooks/useQuery.getComments";
import useQueryGetTotalComments from "@/hooks/useQuery.getCommentsPages";
import Modal from "@/components/modal/Modal";

const LIMIT_PER_PAGE = 10;

function Comments() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useQueryGetCommentsPerPage(currentPage, LIMIT_PER_PAGE);
  const { pages } = useQueryGetTotalComments(LIMIT_PER_PAGE);
  const [modal, setModal] = useState(false);
  const [targetCommentId, setTargetCommentId] = useState("");
  const [password, setPassword] = useState("");

  const onHandlePage = (page: number) => setCurrentPage(page);

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const onHandleModalStatus = (id: string) => {
    setTargetCommentId(id);
    setPassword("");
    setModal(!modal);
  };

  const queryClient = useQueryClient();

  const { mutate: deleteTarget } = useMutation({
    mutationFn: (data: DDeleteComment) => deleteComment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      queryClient.invalidateQueries({ queryKey: ["pages"] });
      setPassword("");
      setModal(false);
      alert("삭제되었습니다.");
    },
    onError: () => {
      alert("비밀번호가 일치하지 않습니다.");
    },
  });

  const onHandleDelete = async () => {
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    deleteTarget({ id: targetCommentId, password });
  };

  return (
    <div id="comments-wrap">
      <LayoutPage>
        <div className={style.inner}>
          <Title>Comments</Title>
          <div className={style.comments}>
            <div className={style.commentsDetail}>
              <div>nickname</div>
              <div>content</div>
              <div>created at</div>
            </div>
            {data &&
              data.map((comment: DComment, index: number) => (
                <div
                  key={index}
                  className={index % 2 === 1 ? style.odd : style.even}
                >
                  <div className={style.commentsDetail}>
                    <span className={style.nickname}>{comment.nickname}</span>
                    <span className={style.content}>{comment.content}</span>
                    <span className={style.createdAt}>
                      {comment.createdAt.substring(0, 10)}{" "}
                      {comment.createdAt.substring(11, 19)}
                    </span>
                    <span
                      className={style.delete}
                      onClick={() => onHandleModalStatus(comment.id)}
                    >
                      x
                    </span>
                  </div>
                </div>
              ))}
          </div>
          <div className={style.pages}>
            {pages &&
              pages.map((page: number, index: number) => (
                <div key={index} className={style.page}>
                  <p
                    onClick={() => onHandlePage(page || 1)}
                    className={currentPage === page ? style.onPage : ""}
                  >
                    {page}
                  </p>
                </div>
              ))}
          </div>
          <WriteComment />
          {modal && (
            <Modal setModal={() => onHandleModalStatus("")}>
              <input
                id="password"
                title="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={passwordChangeHandler}
                minLength={1}
                maxLength={10}
                className={style.password}
              />
              <button
                title="댓글 삭제"
                type="submit"
                onClick={onHandleDelete}
                className={style.deleteButton}
              >
                삭제
              </button>
            </Modal>
          )}
        </div>
      </LayoutPage>
    </div>
  );
}

export default Comments;
