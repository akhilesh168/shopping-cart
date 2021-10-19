import { Col, Row, Container } from "react-bootstrap";
import Filters from "../filters/productFilter";
import { ProductList } from "../product/productList";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={2} className="mt-5">
            <Filters />
          </Col>
          <Col>
            <ProductList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
