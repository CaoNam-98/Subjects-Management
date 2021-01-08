import axiosService from "./../commons/axiosService";
// eslint-disable-next-line import/no-cycle
import { API_URL } from "./../constants/index";
import qs from "query-string";

const url = "task";

export const getList = (params = {}) => {
  let queryParams = "";
  if (Object.keys(params).length > 0) {
    // kiểm tra xem có key nào trong params hay không
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_URL}/${url}${queryParams}`); // nó sẽ gọi đến phương thức get
};

export const addTask = (data) => {
  return axiosService.post(`${API_URL}/${url}`, data);
};

export const taskEdit = (data, idTaskEditing) => {
  return axiosService.put(`${API_URL}/${url}/${idTaskEditing}`, data);
};

export const taskDelete = (idTaskDelete) => {
  return axiosService.delete(`${API_URL}/${url}/${idTaskDelete}`);
};
