import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

import productSelector from "../../store/selectors/productSeletor";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Product } from "../../js/model/product.model";

type PathParamsTypes = {
  productId: string;
};

const ProductDetail = ({ match }: RouteComponentProps<PathParamsTypes>) => {
  const productItems = useSelector(productSelector.productItemSelector);
  const productId = match.params.productId;
  const product = productItems.find(
    (item: Product) => item.id === Number(productId)
  );
  return (
    product && (
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src={product?.image} />
        <Card.Body>
          <Card.Title>{product?.title}</Card.Title>
          <Card.Subtitle>{product?.category}</Card.Subtitle>
          <Card.Text>{product?.description}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Add to Cart</Card.Link>
          <Card.Link href="#">
            <span>Price:{product?.price}</span>
          </Card.Link>
        </Card.Body>
      </Card>
    )
  );
};

export default withRouter<any, any>(ProductDetail);
