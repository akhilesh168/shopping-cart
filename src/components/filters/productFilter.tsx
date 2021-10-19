import React from "react";

import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FilterForm from "../../forms/filterForm";
import useForm from "../../hooks/useForm";

import {
  applyFilters,
  filters,
} from "../../store/action-creators/productFiltersAction";
import productSelector from "../../store/selectors/productSeletor";

export const Filters = () => {
  const appliedFilter = useSelector(productSelector.appliedFilters);
  const dispatch = useDispatch();
  const onSubmit = async (event: any) => {
    dispatch(
      applyFilters({
        filterName: event?.target?.value,
        isChecked: event?.target?.checked,
      })
    );
  };

  const args: any = {
    render: () => (
      <FilterForm handleSubmit={(values: any) => onSubmit(values)} />
    ),
    initialValues: {
      filterField: appliedFilter.map((item: filters) => item.filterName),
    },
    onSubmit: (values: any) => onSubmit(values),
  };

  const form = useForm(args);

  return (
    <Container>
      <Row>{form}</Row>
    </Container>
  );
};

export default React.memo(Filters);
