import { Container } from "react-bootstrap";
import { Field } from "react-final-form";

const LoginForm = () => {
  return (
    <>
      <Container>
        <div className="form-group">
          <label>Email Id</label>
          <Field
            className="form-control"
            name="emailId"
            component="input"
            type="email"
            placeholder="Provide your email id"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <Field
            className="form-control"
            name="password"
            component="input"
            type="password"
            placeholder="Provide your password"
          />
        </div>
        <div className="mt-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </Container>
    </>
  );
};

export default LoginForm;
