import React, { Component } from "react";
import { ToastContainer, Toast, Row, Col } from "react-bootstrap";

export class Weather extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ToastContainer className="p-3">
          <Toast>
            <Toast.Header closeButton={false}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto",
                  gridGap: "180px",
                }}
              >
                <h4 className="me-auto">{this.props.weatherData[0].place}</h4>
                <p style={{ margin: "auto", fontSize: "17px" }}>
                  {`${this.props.weatherData[0].temp} `}
                  <span>&#8451;</span>
                </p>
              </div>
            </Toast.Header>
            <Toast.Body>
              <Row xs={2}>
                <Col>
                  <Row>
                    <p>
                      <span style={{ color: "#6c757d", fontWeight: "500" }}>
                        Status :<br />
                      </span>
                      {this.props.weatherData[0].description}
                    </p>
                  </Row>
                  <Row>
                    <img
                      src={this.props.weatherData[0].icon}
                      style={{ width: "75px" }}
                    />
                  </Row>
                </Col>

                <Col>
                  <p>
                    <span style={{ fontSize: "20px", marginRight: "15px" }}>
                      min:
                    </span>
                    <span style={{ color: "#6c757d" }}>
                      {`${this.props.weatherData[0].min}`}&#8451;
                    </span>
                  </p>
                  <p>
                    <span style={{ fontSize: "20px", marginRight: "15px" }}>max:</span>
                    <span style={{ color: "#6c757d" }}>
                      {`${this.props.weatherData[0].max}`}&#8451;
                    </span>
                  </p>
                </Col>
              </Row>
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    );
  }
}

export default Weather;
