import { useAuth0 } from "@auth0/auth0-react";
import { Col, Row } from "react-bootstrap";

const AuthenticateUserProfile = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <Row>
        <Col xs={4}>
          <img src={user?.picture} alt={user?.name} width={50} height={50} />
        </Col>
        <Col xs={6}>
          <h2 style={{ fontSize: "0.9rem", color: "white" }}>{user?.name}</h2>
          <p style={{ fontSize: "0.9rem", color: "white" }}>{user?.email}</p>
        </Col>
      </Row>
    </div>
  );
};

export default AuthenticateUserProfile;
