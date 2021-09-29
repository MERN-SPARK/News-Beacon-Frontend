import React, { Component } from "react";
import logoImage from "../../src/logo.png";
import axios from "axios";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { withAuth0 } from "@auth0/auth0-react";
import icon from "../../src/icon.png";
import classnames from "classnames/bind"

import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  Offcanvas,
  Col,
} from "react-bootstrap"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: [],
      prevScrollpos: window.pageYOffset,
      visible: true,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }
  Logout = async (values) => {
    let logoutUSer = await axios.get(
      `https://mern-spark-project.herokuapp.com/signout-user`
    );
    let endfav = await axios.get(
      `https://mern-spark-project.herokuapp.com/endfav`
    );
    console.log(logoutUSer);
  };

  Logout = async (values) => {
    let logoutUSer = await axios.get(
      `https://mern-spark-project.herokuapp.com/signout-user`
    )
    let endfav = await axios.get(
      `https://mern-spark-project.herokuapp.com/endfav`
    )
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state
    const currentScrollPos = window.pageYOffset
    const visible = prevScrollpos > currentScrollPos
    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    })
  }

  render() {
    const { isAuthenticated } = this.props.auth0

    return (
      <>
        {console.log(this.props.isHomepage)}
        <Navbar
          className={("navbar", {
            "navbar--hidden": !this.state.visible,
          })}
          bg="dark"
          expand="lg"
        >
          <Navbar.Brand
            href="/"
            style={{
              color: "white",
            }}
          >
            <img src={logoImage} width="150" height="50" alt="logo" style={{objectFit:"cover", marginLeft:"10px", marginTop:"20px"}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto ",
              gridGap: "50px",
              alignItems: "center"
            }}
          >
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{
                maxHeight: "100px",
                display: "grid",
                gridTemplateColumns: "auto auto auto auto auto",
                gridGap: "50px",
              }}
              navbarScroll
            >
              <Nav.Link href="/" style={{ color: "white" }}>
                Home
              </Nav.Link>
              {this.props.isHomePage && (
                <>
                  <Nav.Link href="#topnews" style={{ color: "white" }}>
                    Top News
                  </Nav.Link>
                  <Nav.Link href="#popular" style={{ color: "white" }}>
                    PopularNews
                  </Nav.Link>
                  <Nav.Link href="#covid19" style={{ color: "white" }}>
                    Covid19
                  </Nav.Link>
                  {(isAuthenticated || this.props.userData) && (
                    <>
                      {" "}
                      <Nav.Link href="/favourite" style={{ color: "white" }}>
                        Favourite
                      </Nav.Link>
                    </>
                  )}
                </>
              )}
            </Nav>
            <Form className="d-flex" onSubmit={this.props.HandelSubmit}>
              <FormControl
                type="search"
                placeholder="Search"
                id="search"
                className="mr-2"
                aria-label="Search"
                onChange={this.props.handelSearchQuery}
              />
              <Button
                type="submit"
                variant="outline-danger"
                style={{ borderColor: "#DA0037" }}
              >
                Search
              </Button>
            </Form>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                gridGap: "35px",
                justifyContent: "center",
                alignContent:"center",
                alignItems: "center"
              }}
              
            >
              <span style={{color:"white", width:"100px"}}>{(isAuthenticated || this.props.userData) && this.props.headername }</span>
              
              {/* {isAuthenticated || this.props.userData ? (
                <LogoutButton />
              ) : (
                <Button
                style={{ backgroundColor: "#DA0037", borderColor: "#DA0037" }}
                href="/login"
              >
                Login
              </Button>
              )} */}

              {isAuthenticated? (
                <LogoutButton />
              ) : this.props.userData?(  <Button
                style={{ backgroundColor: "#DA0037", borderColor: "#DA0037" }}
                href="/"
                onClick={this.Logout}
              >
                Log Out  User
              </Button>):(
                <Button
                style={{ backgroundColor: "#DA0037", borderColor: "#DA0037" }}
                href="/login"
              >
                Login
              </Button>
              )}
              

              <img
                style={{  height:"50px", width:"50px" }}
                // variant="primary"
                onClick={this.props.OpenNav}

                // className="me-2"
                src={icon}
              />
            </div>
          </Navbar.Collapse>
        </Navbar>

        <Offcanvas
          show={this.props.openSideBar}
          onHide={this.props.closeNav}
          placement="end"
          style={{
            backgroundColor: "#EDEDED",
          }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              style={{
                color: "#DA0037",
                fontSize: "50px",
              }}
            >
              More
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body style={{ fontSize: "30px" }}>
            <Nav.Link href="/country" style={{ color: "#171717" }}>
              Country News
            </Nav.Link>
            <Nav.Link href="/sports" style={{ color: "#171717" }}>
              Sports
            </Nav.Link>
            <Nav.Link href="/arts" style={{ color: "#171717" }}>
              Arts
            </Nav.Link>
            <Nav.Link href="/business" style={{ color: "#171717" }}>
              Business
            </Nav.Link>
            <Nav.Link href="/travel" style={{ color: "#171717" }}>
              travel
            </Nav.Link>
            <Nav.Link href="/politics" style={{ color: "#171717" }}>
              Politics
            </Nav.Link>
            <Nav.Link href="/food" style={{ color: "#171717" }}>
              Food
            </Nav.Link>
            <Nav.Link href="/about" style={{ color: "#171717" }}>
              About
            </Nav.Link>
            <Col>
            </Col>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
  }
}

export default withAuth0(Header)
