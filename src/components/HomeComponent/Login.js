import React, { Component } from 'react'
import { Formik, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import {Button} from 'react-bootstrap'
import axios from "axios";

 class Login extends Component {
    constructor(props){
        super(props)
        this.state={
          signupError:'',
          go:false,
          showforget:false

        }
      }
      handleSubmit = async (values) => {
        try{
          const Userdata = {
            email: values.email,
            password: Number(values.password),
          };
          console.log(values.email);
          // eslint-disable-next-line
          let loginUSer = await axios.post(
            `http://localhost:8070/login-user`,
            Userdata
          )
          console.log(loginUSer);
          this.setState({
            go:true
    
          })
        }catch(err){
            this.setState({
              showforget:true,
              signupError:"incrrorect email or password"
            })
          }
          
       
      };
form=(props)=>{
    return  <form onSubmit={props.handleSubmit} >
         <label htmlFor=""> password</label>
        <Field name = "password"/>
        <br/>
        <ErrorMessage name="password" /> 
        <br/>
        <hr/>
        <label htmlFor=""> email</label>
        <Field name="email" type="email" />
        <br/>
        <ErrorMessage name="email" /> 
        <br/>
        <hr/>
        {!this.state.go &&
        <Button type="submit"  variant="dark" >login </Button>}

        {this.state.go &&
        <Button type="submit"  variant="dark" href='/'>Home page </Button>}
        {this.state.showforget&&<Button type="submit"  variant="dark" href='/'>Home page </Button>}
    </form>
    
}
schema = () => {
    const schema = Yup.object().shape({
      password: Yup.string().required(),
      email: Yup.string().required(),
    })
    return schema;
}

    render() {
        return (
            <>
            <div>
                 <Formik 
          initialValues={{
              password : 123456789,
              email:'test@test.com'
          }}
          onSubmit={this.handleSubmit}
          render={this.form}
          validationSchema={this.schema()}
          /> 
          </div>
          <div>
          <h1>{this.state.signupError}</h1>
          </div>
            </>
        )
    }
}
export default Login
