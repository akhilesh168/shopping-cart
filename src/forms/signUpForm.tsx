import { Container } from "react-bootstrap";
import { Field } from "react-final-form";

const SignUpForm = () => {
  return (
    <>
      <Container>
        <div className="form-group">
          <label>First Name</label>
          <Field
            className="form-control"
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <Field
            className="form-control"
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Container>
    </>
  );
};

export default SignUpForm;
