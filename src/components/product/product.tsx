import { Col } from "react-bootstrap";
import { Product } from "../../js/model/product.model";
import Tile from "../../js/util/Tile";

type Props = {
  product: Product;
};

const Products = ({ product }: Props) => {
  return (
    <Col lg={4} className="pt-4 mt-2">
      <Tile product={product} key={product.id}></Tile>
    </Col>
  );
};

export default Products;
