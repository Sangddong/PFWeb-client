"use client";
import React, { useState } from "react";
import style from "./WriteComment.module.css";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DCreateComment } from "@/types/comments.type";
import { createComment } from "@/api/comments/comments.api";

function WriteComment() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");

  const nicknameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNickname(e.target.value);
  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const contentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContent(e.target.value);

  const queryClient = useQueryClient();
  const { mutate: post } = useMutation({
    mutationFn: (data: DCreateComment) => createComment(data),
    onSuccess: () => {
      alert("댓글이 작성되었습니다!");
      setNickname("");
      setPassword("");
      setContent("");
      queryClient.invalidateQueries({ queryKey: ["comments"] });
      queryClient.invalidateQueries({ queryKey: ["pages"] });
    },
    onError: (error) => {
      alert("댓글 작성에 실패했습니다!");
    },
  });

  const onHandleSubmit = async () => {
    if (!nickname.trim() || !password.trim() || !content.trim()) {
      alert("모든 필드를 채워주세요!");
      return;
    }
    post({ nickname, password, content });
  };

  return (
    <div className={style.layout}>
      <div className={style.info}>
        <input
          id="nickname"
          title="nickname"
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={nicknameChangeHandler}
          minLength={1}
          maxLength={10}
          className={style.nickname}
        />
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
        <input
          id="content"
          title="content"
          placeholder="댓글을 입력해주세요"
          value={content}
          onChange={contentChangeHandler}
          minLength={1}
          maxLength={50}
          className={style.content}
        />
        <button type="submit" onClick={onHandleSubmit}>
          작성 완료
        </button>
      </div>
    </div>
  );
}

export default WriteComment;
