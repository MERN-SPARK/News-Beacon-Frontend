import React, { Component } from "react";
import { Modal } from "react-bootstrap";

export class ModalHomepage extends Component {
  render() {
    return (
      <div>
        <Modal
          show={this.props.showmodal}
          fullscreen={false}
          onHide={this.props.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.news.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={this.props.news.image}
              style={{ objectFit: "cover", width: "100%" }}
            />
            <p>{this.props.news.abstract}</p>
            <a
              style={{
                textDecoration:"none"
              }}
              href={this.props.news.url}
              onMouseOver={(e) => {
                e.target.style.color = "red";
              }}
            >
              See More
            </a>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ModalHomepage;
