import { server } from "../index";

export const getView = async () => {
  const view = await server.get("/view");
  return view.data;
};
