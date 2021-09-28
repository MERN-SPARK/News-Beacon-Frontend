
import React, { Component } from 'react'
import axios from "axios";
import { Formik, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import {Button} from 'react-bootstrap'
import Home from '../Home';
 class Signup extends Component {

    constructor(props){
        super(props)
        this.state={
          signupError:'',
          goHome:false,
          UserData:[]
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
          // eslint-disable-next-line
         let newUser = await axios.post(
            `http://localhost:8070/signup-user`,
            Userdata
          )
          let check =  await axios.get('http://localhost:8070/check-user')
          console.log(check);
          this.setState({
              goHome:true,
              UserData:newUser.data
          })
          // console.log(newUser.data.data.user);
          
        } catch(err){
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



form=(props)=>{
    return  <form onSubmit={props.handleSubmit} >
         <label htmlFor=""> password</label>
        <Field name = "password"/>
        <br/>
        <ErrorMessage name="password" /> 
        <br/>
        <hr/>
        <label htmlFor=""> name</label>
        <Field name = "name" />
        <br/>
        <ErrorMessage name="name" /> 
        <br/>
        <hr/>
        <label htmlFor=""> confirm password</label>
        <Field name = "confirmpassword"/>
        <br/>
        <ErrorMessage name="confirm" /> 
        <br/>
        <hr/>
        <label htmlFor=""> email</label>
        <Field name="email" type="email" />
        <br/>
        <ErrorMessage name="email" /> 
        <br/>
        <hr/>
        {!this.state.goHome&&
        <Button type="submit"  variant="dark" >sign up  </Button>}
        {this.state.goHome&&
        <Button type="submit"  variant="dark"  href='/'>go home  </Button>}
    </form>
    
}
schema = () => {
    const schema = Yup.object().shape({
      password: Yup.string().required(),
      name: Yup.string().required(),
      email: Yup.string().required(),
      confirmpassword: Yup.string().required(),
    })
    return schema;
}

    render() {
        return (
            <div>
            <div>
                 <Formik 
          initialValues={{
              password : 123456789,
              name:'yaseen',
              confirmpassword:123456789,
              email:'test1@test.com'
          }}
          onSubmit={this.handleSubmit}
          render={this.form}
          validationSchema={this.schema()}
          /> 
          </div>

          <div>
        <h1>{this.state.signupError}</h1>
      </div>
      {this.state.goHome&&
      <Home UserData={this.state.UserData}/>}
            </div>
        )
    }
}

export default Signup