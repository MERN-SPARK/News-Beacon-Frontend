import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button
        style={{
          backgroundColor: "#DA0037",
          borderColor: "#DA0037",
          color: "white",
        }}
        onClick={() => logout({ 
          returnTo: window.location.origin },console.log('hello' ))}
      >
        Log Out
      </button>
    )
  );
};

export default LogoutButton;
