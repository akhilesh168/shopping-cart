import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SignUp } from "../signUp/signup";
import ProductDetail from "../product/productDetail";
import Home from "../home/home";
import { Login } from "../login/login";
import { useAuth0 } from "@auth0/auth0-react";
import Auth0LogoutButton from "../login/auth0Logout";
import AuthenticateUserProfile from "../user/authenticatedUserProfile";

export const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/images/logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Shoppify
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {!isAuthenticated ? (
                <>
                  <Nav.Link href="/signup">SignUp</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                </>
              ) : (
                <>
                  <div>
                    {" "}
                    <Row>
                      <Col xs={6}>
                        <Auth0LogoutButton />
                      </Col>
                      <Col xs={6}>
                        <AuthenticateUserProfile />
                      </Col>
                    </Row>
                  </div>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/:productId" component={ProductDetail} />
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </Router>
  );
};
