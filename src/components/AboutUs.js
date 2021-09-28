import React, { Component } from "react"
import { Row, Image, Container } from "react-bootstrap"

export class AboutUs extends Component {

  render() {
    return (
      <div >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "70px", color: "#DA0037" ,marginTop:"150px" }}>
            MERN-SPARK Organization
          </h1>
        </div>
        <div style={{ marginTop: "50px" }}>
          <h2 style={{ textAlign: "center", color: "#DA0037" }}>Who are we?</h2>
          <p
            style={{ fontSize: "25px", textAlign: "center", color: "#DA0037" ,padding:"50px",lineHeight:"45px" }}
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
                <p style={{ textAlign: "center", color: "#DA0037" }}>
                  Feras Nawafleh
                </p>
                <p style={{ textAlign: "center" }}>
                  <a
                    href="https://github.com/feras98nawafleh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
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
                <p style={{ textAlign: "center", color: "#DA0037" }}>
                  Yaseen Kouteh
                </p>
                <p style={{ textAlign: "center" }}>
                  <a
                    href="https://github.com/yaseen1998"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
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
                <p style={{ textAlign: "center", color: "#DA0037" }}>
                  Abrar AL Zubaidi
                </p>
                <p style={{ textAlign: "center" }}>
                  <a
                    href="https://github.com/AbrarAlzubaidi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
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
                <p style={{ textAlign: "center", color: "#DA0037" }}>
                  Emmad Beshtawi
                </p>
                <p style={{ textAlign: "center" }}>
                  <a
                    href="https://github.com/Emadeddin-Beshtawi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
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
                <p style={{ textAlign: "center", color: "#DA0037" }}>
                  Haya Lawanseh
                </p>
                <p style={{ textAlign: "center" }}>
                  <a
                    href="https://github.com/hayaa123"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
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
