import React from "react";
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button
        href="/"
        style={{
          backgroundColor: "#1976d2",
          borderColor: "#1976d2",
          color: "white",
          height: "40px",
          width: "100%"
        }}
        onClick={() => loginWithRedirect()}
      >
        Sign In with Auth0
      </Button>
    )
  );
};

export default LoginButton;
