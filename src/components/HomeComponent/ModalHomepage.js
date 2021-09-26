import React, { Component } from 'react'
import {
    Modal,
    Button
  } from "react-bootstrap"

export class ModalHomepage extends Component {
    render() {
        return (
            <div>
                 <Modal show={this.props.showmodal} fullscreen={true} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.news.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.news.abstract}</Modal.Body>
      </Modal>
            </div>
        )
    }
}

export default ModalHomepage
