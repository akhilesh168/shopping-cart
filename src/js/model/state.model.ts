import { filters } from "../../store/action-creators/productFiltersAction";
import { IUser } from "../../store/action-creators/signUpAction";
import { Product } from "./product.model";

export interface IProductState {
  products: Product[];
  allCategories: string[];
  appliedFilterName: filters[];
}

export interface IUserState {
  users: IUser;
}

export const initialState: IProductState = {
  products: [] as Product[],
  allCategories: [] as string[],
  appliedFilterName: [] as filters[],
};
