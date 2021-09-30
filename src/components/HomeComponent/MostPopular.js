/* eslint-disable no-unreachable */
import React, { Component } from "react"
import { Col, Row, Card, Button, Container } from "react-bootstrap"
import ModalHomepage from "./ModalHomepage"
import { withAuth0 } from "@auth0/auth0-react"
import axios from "axios"

export class MostPopular extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showmore: 6,
      showmodal: false,
      newslist: [],
    }
  }
  openmodals = (data) => {
    this.setState({
      showmodal: true,
      newslist: data,
    })
  }
  handleClose = () => {
    this.setState({
      showmodal: false,
    })
  }
  favourite = async (title, description, image, url) => {
    let arr = { title: title, image: image, description: description, url: url }
    let checkfav = await axios.get(
      "https://mern-spark-project.herokuapp.com/checkfav"
    )
    console.log(checkfav.data.id)
    let add = await axios.patch(
      `https://mern-spark-project.herokuapp.com/resdata/${checkfav.data.id}`,
      arr
    )
    console.log(add.data)
    // window.location.reload();
  }
  render() {
    const { isAuthenticated } = this.props.auth0

    return (
      <div id="popular">
        <h1
          style={{
            margin: "50px auto",
            textAlign: "center",
            backgroundColor: "#444444",
            color: "white",
            height: "75px",
          }}
        >
          <span style={{ verticalAlign: "middle" }}>popular News</span>
        </h1>
        <Container>
          <Row xs={1} md={3}>
            {this.props.popularNews
              .slice(0, this.state.showmore)
              .map((item, index) => {
                if (index % 3 === 1) {
                  return (
                    <Col
                      key={index}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Card
                        style={{
                          width: "20rem",
                          height: "350px",
                          marginTop: "50px",
                        }}
                      >
                        <Card.Body>
                          <Card.Img variant="top" src={`${item.image}`} />
                          <Card.Title>{`${item.title}`}</Card.Title>
                          {(isAuthenticated || this.props.userData) && (
                            <Button
                              onClick={() =>
                                this.favourite(
                                  item.title,
                                  item.abstract,
                                  item.image,
                                  item.url
                                )
                              }
                              style={{ width: "100%" }}
                            >
                              Like
                            </Button>
                          )}
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                } else {
                  return (
                    <Col
                      key={index}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Card
                        style={{
                          width: "20rem",
                          height: "350px",
                          marginTop: "50px",
                        }}
                      >
                        <Card.Body>
                          <Card.Img variant="top" src={`${item.image}`} />
                          <Card.Title>{`${item.title}`}</Card.Title>
                          {(isAuthenticated || this.props.userData) && (
                            <Button
                              onClick={() =>
                                this.favourite(
                                  item.title,
                                  item.abstract,
                                  item.image,
                                  item.url
                                )
                              }
                              style={{ width: "100%" }}
                            >
                              Like
                            </Button>
                          )}
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                }
              })}
          </Row>
          <Button
            variant="primary"
            style={{
              backgroundColor: "#EDEDED",
              borderColor: "#EDEDED",
              fontSize: "20px",
              color: "#DA0037",
              display: "block",
              margin: "auto",
              width: "95%",
              marginTop: "30px",
            }}
            onClick={() => {
              this.setState({ showmore: this.state.showmore + 3 })
            }}
          >
            See More
          </Button>
        </Container>
        <ModalHomepage
          news={this.state.newslist}
          showmodal={this.state.showmodal}
          handleClose={this.handleClose}
        />
        ;
      </div>
    )
  }
}

export default withAuth0(MostPopular)
