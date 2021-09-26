import React, { Component } from "react";
import {
  Navbar,
  Nav,
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
        <Navbar
          bg="light"
          expand="lg"
          style={{
            position: "sticky",
            top: "0",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "auto auto ",
            gridGap: "200px",
          }}
        >
          <Navbar.Brand href="/">
            <img src="../imgs/3346914.png" width="30" height="30" alt="logo" />
            {"News Beacon"}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            style={{ display: "grid", gridTemplateColumns: "auto auto auto",gridGap:'100px' , }}
          >
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Link2">Link2</Nav.Link>
              <Nav.Link href="/favorate">Link3</Nav.Link>
              

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
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={this.props.handelSearchQuery}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <div>
              <Button>Login</Button>

              {
                //button to show the sidenav
              }
              <Button
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
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{fontSize:"30px"}}>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/favorate">Favorate</Nav.Link>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
}

export default Header;
