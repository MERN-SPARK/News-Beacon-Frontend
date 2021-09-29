import React, { Component } from "react";
import logoImage from "../../src/logo.png";
import { Link } from "react-router-dom";
import navstyle from "./navstyle.css"
import {
  Navbar,
  Nav,
  // eslint-disable-next-line
  NavDropdown,
  Form,
  Button,
  FormControl,
  Offcanvas,
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
            <img src={logoImage} width="150" height="50" alt="logo" />
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
              <Button
                style={{ backgroundColor: "#DA0037", borderColor: "#DA0037" }}
                variant="primary"
                onClick={this.props.OpenNav}
                className="me-2"
              >
                More
              </Button>
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
           
            <Link to="/about" className="nav-link navnav"> Sports</Link>
            <Link to="/country" className="nav-link navnav"> Country News</Link>
            <Link to="/sports" className="nav-link navnav"> Sports</Link>
            <Link to="/arts" className="nav-link navnav"> Arts</Link>
            <Link to="/business" className="nav-link navnav"> Business</Link>
            <Link to="/travel" className="nav-link navnav"> travel</Link>
            <Link to="/politics" className="nav-link navnav"> Politics</Link>
            <Link to="/food" className="nav-link navnav"> Food</Link>

          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
}

export default Header;
