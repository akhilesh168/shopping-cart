import { Product } from "../../js/model/product.model";
import * as constant from "../actions/constant";

export const addProduct = (product: Product) => {
  return { type: constant.ADD_PRODUCT, payload: product };
};

export const updateProduct = (product: Product) => {
  return { type: constant.UPDATE_PRODUCT, payload: product };
};

export const deleteProduct = (id: number) => {
  return { type: constant.DELETE_PRODUCT, payload: id };
};

export const getAllFilters = () => {
  return { type: constant.GET_ALL_FILTERS };
};
