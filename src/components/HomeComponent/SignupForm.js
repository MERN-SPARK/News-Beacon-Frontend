import React, { Component } from "react"
// import PopularBooks from '../PopularBooks';
import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button } from "react-bootstrap"
class SignupForm extends Component {
  constructor(props) {
    super(props)
  }

  form = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <label htmlFor=""> email</label>
        <Field name="email" type="email" />
        <br />
        <hr />
        <label htmlFor=""> name</label>
        <Field name="name" />
        <br />
        <ErrorMessage name="name" />
        <br />
        <hr />
        <ErrorMessage name="email" />
        <label htmlFor=""> password</label>
        <Field name="password" />
        <br />
        <ErrorMessage name="password" />
        <br />
        <hr />
        <label htmlFor=""> confirm password</label>
        <Field name="confirmpassword" />
        <br />
        <ErrorMessage name="confirm" />
        <br />
        <hr />
        <Button type="submit" variant="dark">
          sign up{" "}
        </Button>
      </form>
    )
  }
  schema = () => {
    const schema = Yup.object().shape({
      password: Yup.string().required(),
      name: Yup.string().required(),
      email: Yup.string().required(),
      confirmpassword: Yup.string().required(),
    })
    return schema
  }

  render() {
    return (
      <>
        <Formik
          initialValues={{
            password: "",
            name: "",
            confirmpassword: "",
            email: "",
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
