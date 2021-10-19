import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import SignUpForm from "../../forms/signUpForm";
import useForm from "../../hooks/useForm";

import { IUser, signUp } from "../../store/action-creators/signUpAction";

export const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log("asd", history);
  // const user = {} as IUser;
  const onSubmit = async (values: IUser) => {
    await dispatch(signUp(values));
    console.log(history);
    history.push("/login");
  };

  const args: any = {
    render: () => <SignUpForm />,
    initialValues: {},
    onSubmit: (values: IUser) => onSubmit(values),
  };

  const form = useForm(args);

  return (
    <Container>
      <Row>{form}</Row>
    </Container>
  );
};

export default withRouter(React.memo(SignUp));
