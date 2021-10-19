import axios from "axios";
import * as API from "./api";

export const getItemFromCart = () => {
  return axios.get(API.GET_PRODUCTS);
};

export const deleteProducts = (id: number) => {
  return axios.delete(API.DELETE_PRODUCTS(id));
};

export const updateProducts = (id: number) => {
  return axios.put(API.UPDATE_PRODUCTS(id));
};

export const addProducts = () => {
  return axios.post(API.GET_PRODUCTS);
};
