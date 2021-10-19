import React from "react";
import { withRouter } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm";

import { IUser, signUp } from "../../store/action-creators/signUpAction";
import LoginForm from "../../forms/loginForm";
import Auth0LoginButton from "./auth0Login";

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = async (values: IUser) => {
    await dispatch(signUp(values));
    history.push("/");
  };

  const args: any = {
    render: () => <LoginForm />,
    initialValues: {},
    onSubmit: (values: IUser) => onSubmit(values),
  };

  const form = useForm(args);

  return (
    <Container>
      <Row>
        <Col className="col-6"> {form}</Col>
        <Col className="col-6">
          <Row>
            <Row>
              <h2>or</h2>
            </Row>
            <Col>
              <Auth0LoginButton />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(React.memo(Login));
