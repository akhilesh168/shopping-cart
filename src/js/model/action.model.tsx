import { Product } from "./product.model";

export interface Action {
  type: string;
  payload: Product | any;
}
