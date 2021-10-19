import { Action } from "../../js/model/action.model";
import { Product } from "../../js/model/product.model";
import { initialState, IProductState } from "../../js/model/state.model";
import { filters } from "../action-creators/productFiltersAction";

import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  DATA_LOADED,
  APPLY_FILTERS,
  GET_ALL_FILTERS,
} from "../actions/constant";

const productReducer = (
  state = initialState,
  action: Action
): IProductState => {
  let allCategories: string[] = [];
  switch (action.type) {
    case DATA_LOADED: {
      allCategories = [
        ...new Set(action.payload.map((item: Product) => item.category)),
      ] as string[];
      return {
        ...state,
        products: [...action.payload],
        allCategories: allCategories,
      };
    }

    case APPLY_FILTERS: {
      const filterType: filters = action.payload;
      let filteredCategories: filters[] = [];
      const isPreExists = [...state.appliedFilterName].find(
        (item) => item.filterName === filterType.filterName
      );
      if (isPreExists) {
        filteredCategories = [...state.appliedFilterName].filter(
          (item) => item.filterName !== filterType.filterName
        );
      } else {
        filteredCategories = [...state.appliedFilterName].concat(
          action.payload
        );
      }

      return {
        ...state,
        appliedFilterName: [...filteredCategories],
        allCategories: [...state.allCategories],
      };
    }
    case ADD_PRODUCT: {
      return {
        ...state,
        products: state.products.concat(action.payload),
      };
    }
    /*     case UPDATE_PRODUCT: {
      const newProductItems:Product[] = state.products.find(
        (item: any) => item.id === action.payload?.id
      );
      return {...state,newProductItems};
    } */
    case DELETE_PRODUCT: {
      const newProductItemsIndex = state.products.findIndex(
        (item: any) => item.id === action.payload?.id
      );
      return {
        ...state,
        products: state.products.splice(newProductItemsIndex, 1),
      };
    }
    case GET_ALL_FILTERS: {
      return { ...state, allCategories };
    }
    default:
      return state;
  }
};

export default productReducer;
