import React, { Component } from "react";
import { ToastContainer, Toast } from "react-bootstrap";

export class Weather extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ToastContainer className="p-3">
          <Toast>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Weather Forecasting</strong>
            </Toast.Header>
            <Toast.Body>
              <h4>{this.props.weatherData[0].place}</h4>
              <p>{this.props.weatherData[0].description}</p>
              <ul>
                <li>{`temp: ${this.props.weatherData[0].temp}`}</li>
                <li>{`min: ${this.props.weatherData[0].min}`}</li>
                <li>{`max: ${this.props.weatherData[0].max}`}</li>
              </ul>
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    );
  }
}

export default Weather;
