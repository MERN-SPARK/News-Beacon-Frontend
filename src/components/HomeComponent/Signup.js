import React, { Component } from "react";
import SignupForm from "./SignupForm";
import axios from "axios";

export class Signup extends Component {
  handleSubmit = async (values) => {
      
    try {
      const Userdata = {
        name: values.name,
        email: values.email,
        password: Number(values.password),
        passwordConfirm: Number(values.confirmpassword),
      };
     let newUser = await axios.post(
        `http://localhost:8070/signup-user`,
        Userdata
      );
      console.log(newUser.data);
    } catch (error) {
        console.log(error.message);
    }
  };
  render() {
    return (
      <div>
        <div>
          <SignupForm handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default Signup;
