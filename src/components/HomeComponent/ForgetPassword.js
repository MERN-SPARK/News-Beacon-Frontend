import React, { Component } from "react"
import axios from "axios"
import { Button, Row, Form, FloatingLabel, Alert } from "react-bootstrap"
import Header from "../Header"
export class ForgetPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      forgetPassword: "",
      shownewtoken: true,
      signupError: "Enter a valid input please!",
      forgetToken: "",
      newpassword: "",
      newconfirm: "",
    }
  }

  handleLocation = (e) => {
    this.setState({
      forgetPassword: e.target.value,
    })
  }
  handleLocation2 = (e) => {
    this.setState({
      forgetToken: e.target.value,
    })
  }
  handleLocation3 = (e) => {
    this.setState({
      newpassword: e.target.value,
    })
  }
  handleLocation4 = (e) => {
    this.setState({
      newconfirm: e.target.value,
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let email = {
        email: this.state.forgetPassword,
      }
      let resetPassword = await axios.post(
        `https://mern-spark-project.herokuapp.com/forget-user`,
        email
      )
      this.setState({
        shownewtoken: true,
      })
      console.log(resetPassword)
    } catch (err) {
      this.setState({
        signupError: "there is no user with this email adress",
      })
    }
  }
  handleSubmit2 = async (e) => {
    e.preventDefault()
    try {
      let password = {
        password: this.state.newpassword,
        passwordConfirm: this.state.newconfirm,
      }

      let resetToken = await axios.patch(
        `https://mern-spark-project.herokuapp.com/reset-use/${this.state.forgetToken}`,
        password
      )
      console.log(resetToken)
    } catch (err) {
      this.setState({
        signupError: "Token is anvlid",
      })
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Form onSubmit={this.handleSubmit}>
          <Row className="mb-3">
            <FloatingLabel
              controlId="floatingInput"
              label="Enter the URL"
              className="mb-3"
            >
              <Form.Control
                onChange={this.handleLocation}
                type="text"
                placeholder="Enter the URL"
              />
            </FloatingLabel>
          </Row>
          {this.state.forgetPassword !== "" && (
            <Alert variant={"danger"}>{this.state.signupError}</Alert>
          )}
        </Form>

        {this.state.shownewtoken && (
          <Form>
            <Row className="mb-3">
              <FloatingLabel
                controlId="floatingInput"
                label="Enter the Token"
                className="mb-3"
              >
                <Form.Control type="password" placeholder="Enter the Token" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Enter the Password"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Enter the Password"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter the Password again"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Enter the Password again"
                />
              </FloatingLabel>
            </Row>

            <Button
              variant="primary"
              type="submit"
              onSubmit={this.handleSubmit2}
            >
              Submit
            </Button>
          </Form>
        )}
      </div>
    )
  }
}

export default ForgetPassword
