import React, { Component } from "react"
import { ToastContainer, Toast, Row, Col } from "react-bootstrap"

export class Weather extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ToastContainer style={{ width: "50%" }} className="p-3">
          <Toast style={{ width: "100%" }}>
            <Toast.Header closeButton={false}>
              <strong>Weather Forecast for today and the next two days</strong>
            </Toast.Header>
            <Row style={{ display: "flex", justifyContent: "space-around" }}>
              <Col>
                <h4>{this.props.weatherData[0].place}</h4>
                <p>{this.props.weatherData[0].description}</p>
                <img src={this.props.weatherData[0].icon} />
                <ul>
                  <li>{`temp: ${this.props.weatherData[0].temp}`}</li>
                  <li>{`min: ${this.props.weatherData[0].min}`}</li>
                  <li>{`max: ${this.props.weatherData[0].max}`}</li>
                </ul>
              </Col>
              <Col>
                <h4>{this.props.weatherData[1].place}</h4>
                <p>{this.props.weatherData[1].description}</p>
                <img src={this.props.weatherData[1].icon} />
                <ul>
                  <li>{`temp: ${this.props.weatherData[1].temp}`}</li>
                  <li>{`min: ${this.props.weatherData[1].min}`}</li>
                  <li>{`max: ${this.props.weatherData[1].max}`}</li>
                </ul>
              </Col>
              <Col>
                <h4>{this.props.weatherData[2].place}</h4>
                <p>{this.props.weatherData[2].description}</p>
                <img src={this.props.weatherData[2].icon} />
                <ul>
                  <li>{`temp: ${this.props.weatherData[2].temp}`}</li>
                  <li>{`min: ${this.props.weatherData[2].min}`}</li>
                  <li>{`max: ${this.props.weatherData[2].max}`}</li>
                </ul>
              </Col>
            </Row>
          </Toast>
        </ToastContainer>
      </div>
    )
  }
}

export default Weather
