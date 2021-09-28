import React, { Component } from "react"
import { Spinner } from "react-bootstrap"

export class Loading extends Component {
  render() {
    return (
      <div style={{ height: "800px", textAlign: "center", margin: "40vh" }}>
        <p>Loading ...</p>
        <Spinner animation="border" variant="danger" />
      </div>
    )
  }
}

export default Loading
