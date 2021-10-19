import { useAuth0 } from "@auth0/auth0-react";

const Auth0LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="btn btn-primary" onClick={() => logout()}>
      logout
    </button>
  );
};

export default Auth0LogoutButton;
