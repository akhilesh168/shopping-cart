import { useAuth0 } from "@auth0/auth0-react";

const Auth0LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="btn btn-primary" onClick={() => loginWithRedirect()}>
      Login with Google
    </button>
  );
};

export default Auth0LoginButton;
