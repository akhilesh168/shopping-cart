import axios from "axios";
import { IUser } from "../../store/action-creators/signUpAction";
import * as API from "./api";

const authorizationToken = "dummyToken";

axios.defaults.headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + authorizationToken,
};

export const getUser = () => {
  return axios.get(`${API.BASE_URL}/${API.USERS}`);
};

export const deleteUsers = (id: number) => {
  return axios.delete(API.DELETE_USER(id));
};

export const updateUsers = (id: number) => {
  return axios.put(API.UPDATE_USER(id));
};

export const addUsers = (user: IUser) => {
  return axios.post(`${API.BASE_URL}/${API.USERS}`, user);
};

export const login = (userId: string, password: string) => {
  return axios.post(API.USERS, { userId, password });
};
