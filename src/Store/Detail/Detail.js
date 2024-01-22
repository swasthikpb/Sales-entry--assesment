import { get, post } from "../../helpers/ApiHelpers/ApiHelper";

export const getDetailsAPI = () => {
  return get("/detail");
};

export const insertHeaderAndDetailTableAPI = (data) => {
  return post(`/header/multiple`, data);
};
