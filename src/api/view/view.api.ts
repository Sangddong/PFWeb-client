import { server } from "../index";

export const getTodayView = async () => {
  const todayView = await server.get("/view/today");
  return todayView;
};

export const getTotalView = async () => {
  const totalView = await server.get("/view/total");
  return totalView;
};
