import React, { Component } from "react"
// import PopularBooks from '../PopularBooks';
import { Formik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Button } from "react-bootstrap"
class LoginForm extends Component {
  constructor(props) {
    super(props)
  }

  form = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <label htmlFor=""> email</label>
        <Field name="email" type="email" />
        <br />
        <ErrorMessage name="email" />
        <br />
        <hr />
        <label htmlFor=""> password</label>
        <Field name="password" />
        <br />
        <ErrorMessage name="password" />
        <br />
        <hr />
        <Button type="submit" variant="dark">
          Login{" "}
        </Button>
      </form>
    )
  }
  schema = () => {
    const schema = Yup.object().shape({
      password: Yup.string().required(),
      email: Yup.string().required(),
    })
    return schema
  }

  render() {
    return (
      <>
        <Formik
          initialValues={{
            password: "",
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

export default LoginForm
