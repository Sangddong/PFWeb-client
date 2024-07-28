export type DComment = {
  id: string;
  nickname: string;
  content: string;
  createdAt: string;
  updatedAt: string | null;
};

export type DCreateComment = {
  nickname: string;
  password: string;
  content: string;
};

export type DDeleteComment = {
  id: string;
  password: string;
};
