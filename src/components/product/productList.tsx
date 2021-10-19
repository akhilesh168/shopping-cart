import React from "react";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../js/model/product.model";
import { GET_ALL_PRODUCT } from "../../store/actions/constant";

import productSelector from "../../store/selectors/productSeletor";
import Products from "./product";

export const ProductList = () => {
  const dispatch = useDispatch();
  const productItems = useSelector(productSelector.productItemSelector);
  const filterItems = useSelector(productSelector.filteredProductItems);
  const appliedFilter = useSelector(productSelector.appliedFilters);
  let productToDisplay: Product[] = [];

  productToDisplay = appliedFilter.length > 0 ? filterItems : productItems;
  useEffect(() => {
    dispatch({ type: GET_ALL_PRODUCT });
  }, [dispatch]);
  return (
    <Container>
      <Row>
        {productToDisplay &&
          productToDisplay.length > 0 &&
          productToDisplay.map((product: Product) => (
            <Products product={product} key={product.id}></Products>
          ))}
      </Row>
    </Container>
  );
};

export default React.memo(ProductList);
