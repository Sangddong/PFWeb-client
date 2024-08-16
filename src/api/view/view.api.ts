import { server } from "../index";

export const getView = async () => {
  const baseURL = server.defaults.baseURL ?? process.env.NEXT_PUBLIC_API_URL;

  const view = await server.get("/view", { baseURL });
  return view.data;
};
