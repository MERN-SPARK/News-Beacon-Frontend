import React, { Component } from "react"
import {
  Row,
  Image,
  Container,
  Badge,
  // eslint-disable-next-line
  Card,
  Button,
  Col,
  Form,
} from "react-bootstrap"
import { GoMarkGithub } from "react-icons/go"

export class AboutUs extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#444444" }}>
        <div style={{ textAlign: "center" }}>
          <h1
            style={{ fontSize: "70px", color: "#DA0037", marginTop: "150px" }}
          >
            MERN-SPARK Organization
          </h1>
        </div>
        <div style={{ marginTop: "50px" }}>
          <h2 style={{ textAlign: "center", color: "#DA0037" }}>Who are we?</h2>
          <p
            style={{
              fontSize: "25px",
              textAlign: "center",
              color: "#DA0037",
              padding: "50px",
              lineHeight: "45px",
            }}
          >
            We are 5 Full-Stack Developers, Based in Amman-Jordan, Looking
            Forward for our First Job Opportunity as a JavaScript MERN
            Developers, NewsBeacon was our Graduation Project for 301 Course
            with ASAC, Please Take a Look Below to get to Know us Better, Check
            our GitHub Accounts and You Will also Find our Contacts if you are
            Interested in Hiring anyone of us.
          </p>
        </div>
        <div style={{ marginTop: "100px" }}>
          <Container>
            <Row>
              <Row>
                {/* <Col>
                  <Card
                    className="text-center"
                    bg="Dark"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "center",
                      width: "30rem",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://avatars.githubusercontent.com/u/85874246?v=4"
                    />
                    <Card.Body>
                      <Card.Title>
                        <Badge bg="dark">Feras Nawafleh</Badge>
                      </Card.Title>
                      <Card.Text>
                        Feras Nawafleh, Computer Science Graduate from the
                        Univerity of Jordan
                      </Card.Text>
                      <Button variant="primary">
                        {" "}
                        <a
                          href="https://github.com/feras98nawafleh"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <GoMarkGithub size={80} color={"black"} />
                        </a>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>   */}
                <Image
                  src="https://avatars.githubusercontent.com/u/85874246?v=4"
                  roundedCircle
                  style={{
                    display: "block",
                    width: "500px",
                    margin: "auto",
                    marginBottom: "30px",
                  }}
                />
                <p
                  style={{
                    fontSize: " 50px",
                    textAlign: "center",
                    color: "#DA0037",
                  }}
                >
                  <Badge bg="dark">Feras Nawafleh</Badge>
                  <br />
                  <a
                    href="https://github.com/feras98nawafleh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GoMarkGithub size={80} color={"black"} />
                  </a>
                </p>
              </Row>
              <Row>
                <Image
                  src="https://avatars.githubusercontent.com/u/86142826?v=4"
                  roundedCircle
                  style={{
                    display: "block",
                    width: "500px",
                    margin: "auto",
                    marginBottom: "30px",
                  }}
                />
                <p
                  style={{
                    fontSize: " 50px",
                    textAlign: "center",
                    color: "#DA0037",
                  }}
                >
                  <Badge bg="dark">Yaseen Kouteh</Badge>
                  <br />
                  <a
                    href="https://github.com/yaseen1998"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GoMarkGithub size={80} color={"black"} />
                  </a>
                </p>
              </Row>
              <Row>
                <Image
                  src="https://avatars.githubusercontent.com/u/86603698?v=4"
                  roundedCircle
                  style={{
                    display: "block",
                    width: "500px",
                    margin: "auto",
                    marginBottom: "30px",
                  }}
                />
                <p
                  style={{
                    fontSize: " 50px",
                    textAlign: "center",
                    color: "#DA0037",
                  }}
                >
                  <Badge bg="dark">Abrar AL Zubaidi</Badge>
                  <br />
                  <a
                    href="https://github.com/AbrarAlzubaidi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GoMarkGithub size={80} color={"black"} />
                  </a>
                </p>
              </Row>
              <Row>
                <Image
                  src="https://avatars.githubusercontent.com/u/86603685?v=4"
                  roundedCircle
                  style={{
                    display: "block",
                    width: "500px",
                    margin: "auto",
                    marginBottom: "30px",
                  }}
                />
                <p
                  style={{
                    fontSize: " 50px",
                    textAlign: "center",
                    color: "#DA0037",
                  }}
                >
                  <Badge bg="dark">Emmad Beshtawi</Badge>
                  <br />
                  <a
                    href="https://github.com/Emadeddin-Beshtawi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GoMarkGithub size={80} color={"black"} />
                  </a>
                </p>
              </Row>
              <Row>
                <Image
                  src="https://avatars.githubusercontent.com/u/45520355?v=4"
                  roundedCircle
                  style={{
                    display: "block",
                    width: "500px",
                    margin: "auto",
                    marginBottom: "30px",
                  }}
                />
                <p
                  style={{
                    fontSize: " 50px",
                    textAlign: "center",
                    color: "#DA0037",
                  }}
                >
                  <Badge bg="dark">Haya Lawanseh</Badge>
                  <br />
                  <a
                    href="https://github.com/hayaa123"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GoMarkGithub size={80} color={"black"} />
                  </a>
                </p>
              </Row>
             
              
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default AboutUs
