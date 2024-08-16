import { server } from "../index";

const baseURL = server.defaults.baseURL ?? process.env.NEXT_PUBLIC_API_URL;

export const getView = async () => {
  const view = await server.get("/view", { baseURL });
  return view.data;
};
