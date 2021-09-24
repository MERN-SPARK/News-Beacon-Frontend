import React, { Component } from "react";
import { ToastContainer,Toast } from "react-bootstrap";

export class Weather extends Component {
  render() {
    return (

      <div style ={{display:"flex",justifyContent:"center"}}>
         <ToastContainer className="p-3" >
          <Toast>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    );
  }
}

export default Weather;
