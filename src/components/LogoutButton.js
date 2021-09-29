import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

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
          returnTo: window.location.origin },    axios.get(`https://mern-spark-project.herokuapp.com/endfav`)
          )}
      >
        Log Out
      </button>
    )
  );
};

export default LogoutButton;
