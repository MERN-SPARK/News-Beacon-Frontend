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
          backgroundColor: "#DA0037",
          borderColor: "#DA0037",
          color: "white",
        }}
        onClick={() => loginWithRedirect()}
      >
        Log In
      </Button>
    )
  );
};

export default LoginButton;
