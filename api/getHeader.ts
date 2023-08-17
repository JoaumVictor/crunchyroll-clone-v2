import api from "./api";

export const getHeader = async () => {
  const response = await api.get("/api/header");
  return response.data;
};
