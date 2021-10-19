import { Button, Card } from "react-bootstrap";
import { Product } from "../model/product.model";
import "./tile.css";
import { useHistory } from "react-router-dom";

type Props = {
  product: Product;
};

export const Tile = ({ product }: Props) => {
  const history = useHistory();
  return (
    <Card
      className="ProductListItems-main-card"
      onClick={() => history.push(`/products/${product.id}`)}
    >
      <Card.Img
        className="ProductListItems-img"
        variant="top"
        src={product.image}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Subtitle>{product.category}</Card.Subtitle>
        <Card.Text className="ProductListItems-description-text">
          {product.description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Text>
          <span>Price:{product?.price}</span>
        </Card.Text>
        <Card.Link href="#" as={Button} variant="primary">
          Add to Cart
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Tile;
