import React, { Component } from "react";
import axios from "axios";

export class ForgetBassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forgetPassword: "",
      shownewtoken:true,
        signupError:'',
        forgetToken:'',
        newpassword:'',
        newconfirm:''
    };
  }

  handleLocation = (e) => {
    this.setState({
      forgetPassword: e.target.value,
    });
  };
  handleLocation2 = (e) => {
    this.setState({
      forgetToken: e.target.value,
    });
  };
  handleLocation3 = (e) => {
    this.setState({
      newpassword: e.target.value,
    });
  };
  handleLocation4 = (e) => {
    this.setState({
      newconfirm: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try{
    let email = {
      email: this.state.forgetPassword,
    };
    let resetPassword = await axios.post(
      `https://mern-spark-project.herokuapp.com/forget-user`,
      email
    );
    this.setState({
      shownewtoken: true,
    });
    console.log(resetPassword);
}catch(err){
    this.setState({
        signupError:"there is no user with this email adress"

      })
}
  };
  handleSubmit2 = async (e) => {
    e.preventDefault();
    try{
        let password={
            password:this.state.newpassword,
            passwordConfirm:this.state.newconfirm
        }
    
    let resetToken= await axios.patch(
      `https://mern-spark-project.herokuapp.com/reset-use/${this.state.forgetToken}`,password
    );
    console.log(resetToken);
}catch(err){
    this.setState({
        signupError:"Token is anvlid"

      })
}
  };


  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Please enter a the url..."
              onChange={this.handleLocation}
            />
            <input type="submit" value="forget password" />
          </form>
        </div>
        {this.state.signupError}
        <div>
            {this.state.shownewtoken&&
          <form onSubmit={this.handleSubmit2}>
            <input
              type="text"
              placeholder="Please enter a the token"
              onChange={this.handleLocation2}
            />
            <input
              type="text"
              placeholder="Please enter a the password"
              onChange={this.handleLocation3}
            />
            <input
              type="text"
              placeholder="Please enter a the passwordconfirm"
              onChange={this.handleLocation4}
            />
            <input type="submit" value="forget password" />
          </form>}
        </div>
      </div>
    );
  }
}

export default ForgetBassword;
