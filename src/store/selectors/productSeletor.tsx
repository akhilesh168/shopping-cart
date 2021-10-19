import { createSelector } from "reselect";
import { Product } from "../../js/model/product.model";
import { filters } from "../action-creators/productFiltersAction";

const getProduct = (state: any) => state?.product?.products;
const getProductCategories = (state: any) => state?.product?.allCategories;
const getAppliedFilter = (state: any) => state.product?.appliedFilterName;

const productItemSelector = createSelector([getProduct], (state: any) => state);
const productCategoriesSelector = createSelector(
  [getProductCategories],
  (state: any) => state
);

const appliedFilters = createSelector(
  [getAppliedFilter],
  (state: any) => state
);

const filteredProductItems = createSelector(
  [getProduct, getAppliedFilter],
  (products, appliedFilter) => {
    const getFilteredItem: Product[] = [...products];
    const filteredCategories: filters[] = [...appliedFilter];
    let tempArray: any = [];
    filteredCategories.forEach((item) => {
      tempArray.push(
        ...getFilteredItem.filter(
          (product) => product.category === item.filterName
        )
      );
    });
    return tempArray;
  }
);
const productSelector = {
  productItemSelector,
  productCategoriesSelector,
  filteredProductItems,
  appliedFilters,
};
export default productSelector;
