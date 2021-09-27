import React, { Component } from "react";
import LoginForm from "./LoginForm";
import axios from "axios";

export class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      signupError:''
    }
  }
  handleSubmit = async (values) => {
    try{
      const Userdata = {
        email: values.email,
        password: Number(values.password),
      };
      let loginUSer = await axios.post(
        `http://localhost:8070/login-user`,
        Userdata
      )
      console.log(Userdata);
    }catch(err){
        this.setState({
          signupError:"incrrorect email or password"
        })
      }
      
   
  };
  render() {
    return (
      <div>
        <div>
          <LoginForm handleSubmit={this.handleSubmit} />
        </div>
        <h1>{this.state.signupError}</h1>

      </div>
    );
  }
}

export default Login;
