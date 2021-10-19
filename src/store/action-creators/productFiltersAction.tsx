import { APPLY_FILTERS } from "../actions/constant";

export interface filters {
  filterName: string;
  isChecked: boolean;
}

export const applyFilters = ({ filterName, isChecked }: filters) => {
  return { type: APPLY_FILTERS, payload: { filterName, isChecked } };
};
