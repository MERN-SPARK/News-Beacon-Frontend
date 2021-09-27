import React, { Component } from "react";
import LoginForm from "./LoginForm";
import axios from "axios";

export class Login extends Component {
  handleSubmit = async (values) => {
    try {
      const Userdata = {
        email: values.email,
        password: Number(values.password),
      };
      let loginUSer = await axios.post(
        `http://localhost:8070/login-user`,
        Userdata
      );
      console.log(Userdata);
      //   console.log(newUser.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  render() {
    return (
      <div>
        <div>
          <LoginForm handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default Login;
