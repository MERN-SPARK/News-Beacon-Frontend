import React, { Component } from "react";
import logoImage from "../../src/logo.png";
import { Link } from "react-router-dom";
import icon from "../../src/icon.png";
import {
  Navbar,
  Nav,
  // eslint-disable-next-line
  NavDropdown,
  Form,
  Button,
  FormControl,
  Offcanvas,
  Col
} from "react-bootstrap";

class Header extends Component {
 

  render() {
    return (
      <>
      
      {console.log(this.props.isHomepage)}
        <Navbar
          bg="dark"
          expand="lg"
          style={{
            backgroundColor: "#444444",
            position: "sticky",
            top: "0",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 5fr ",
            gridGap: "400px",
          }}
        >
          <Navbar.Brand
            href="/"
            style={{
              color: "white",
          
            }}
          >
             <img
              src={logoImage}
              width="150"
              height="50"
              alt="logo"
              style={{
                objectFit: "cover",
                marginLeft: "10px",
                marginTop: "20px",
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto ",
              gridGap: "150px",
              
            }}
          >
            <Nav
            //grid-template-columns: auto auto auto;gap: 50px;
            
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px"
              }}
              navbarScroll
            >
              <Nav.Link href="/" style={{ color: "white", fontSize:"30px" }}>
                Home
              </Nav.Link>
               
              
              

              {/* decomment if you need a dropDown list
               <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
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
                gridGap: "20px",
              }}
            >
              <Button
                style={{ backgroundColor: "#DA0037", borderColor: "#DA0037" }}
                href="/login"
              >
                Login
              </Button>
              <Button
                style={{ backgroundColor: "#DA0037", borderColor: "#DA0037" }}
                href="/signup"
              >
                SignUp
              </Button>

              {
                //button to show the sidenav
              }
              <img
                style={{ height: "50px", width: "50px" }}
                // variant="primary"
                onClick={this.props.OpenNav}
                // className="me-2"
                src={icon}
                alt=""
              />
            </div>
          </Navbar.Collapse>
        </Navbar>
        {
          //******************SideNav******************** */
        }
        <Offcanvas
          show={this.props.openSideBar}
          onHide={this.props.closeNav}
          placement="end"
          style={{
            backgroundColor: "#EDEDED",
          }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ color: "#DA0037", fontSize: "50px" }}>
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
              Insider
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
    );
  }
}

export default Header;
