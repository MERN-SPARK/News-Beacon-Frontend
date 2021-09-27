import React, { Component } from 'react'
// import PopularBooks from '../PopularBooks';
import { Formik, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import {Button} from 'react-bootstrap'
 class SignupForm extends Component {
    constructor(props) {
        super(props);
    }
    

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
        <Button type="submit"  variant="dark" >sign up  </Button>
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
            <>
                 <Formik 
          initialValues={{
              password : 123456789,
              name:'yaseen',
              confirmpassword:123456789,
              email:'test1@test.com'
          }}
          onSubmit={this.props.handleSubmit}
          render={this.form}
          validationSchema={this.schema()}
          /> 
            </>
        )
    }
}

export default SignupForm