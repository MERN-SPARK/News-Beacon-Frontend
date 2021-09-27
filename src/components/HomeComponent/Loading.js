import React, { Component } from "react"

export class Loading extends Component {
  render() {
    return (
      <div style={{ height: "800px", textAlign: "center", margin: "40vh" }}>
        <p>Loading ...</p>
        {
          // here we can put an loading image or somthing}
        }
      </div>
    )
  }
}

export default Loading
