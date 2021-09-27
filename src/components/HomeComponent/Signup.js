import React, { Component } from "react";
import SignupForm from "./SignupForm";
import axios from "axios";

export class Signup extends Component {
  constructor(props){
    super(props)
    this.state={
      signupError:''
    }
  }
  handleSubmit = async (values) => {
      try{
      const Userdata = {
        name: values.name,
        email: values.email,
        password: Number(values.password),
        passwordConfirm: Number(values.confirmpassword),
      };
     let newUser = await axios.post(
        `http://localhost:8070/signup-user`,
        Userdata
      )} catch(err){
        let errvalidate
        console.log(err.response.data.message);
        if(err.response.data.message==="users validation failed: passwordConfirm: the password is different"){
           errvalidate = "the password is different"
        }
        else if(err.response.data.message==="users validation failed: password: Path `password` (`123456`) is shorter than the minimum allowed length (8)."){
          errvalidate ="shorter than the minimum allowed length (8)"
        }
        else{
           errvalidate = err.response.data.message
        }
        this.setState({
          signupError:errvalidate
        })
        
      }
     
        
    
  };
  render() {
    return (
      <div>
        <div>
          <SignupForm handleSubmit={this.handleSubmit} />
        </div>
        <h1>{this.state.signupError}</h1>
      </div>
    );
  }
}

export default Signup;
