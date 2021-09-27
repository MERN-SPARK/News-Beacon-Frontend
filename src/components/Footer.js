import React, { Component } from "react"

export class Footer extends Component {
  render() {
    const footerStyle = {
      position: "absolute",
      bottom: "0",
      width: "100%",
      background: "#6cf",
      height: "200px",
      backgroundColor: "rgb(10, 10, 10)",
    }
    return (
      <div style={footerStyle}>
        <p style={{ color: "white", textAlign: "center", padding: "100px" }}>
          &copy; MERN-SPARK, Org. All rights reserved.
        </p>
      </div>
    )
  }
}

export default Footer
