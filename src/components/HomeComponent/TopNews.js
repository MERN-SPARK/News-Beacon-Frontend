import React, { Component } from "react";
import { Col, Row, Card, Button, Container } from "react-bootstrap";
import ModalHomepage from "./ModalHomepage";
import { withAuth0 } from "@auth0/auth0-react";

class TopNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showmore: 6,
      newslist: [],
      like: "",
    };
  }
  openmodals = (data) => {
    this.setState({
      showmodal: true,
      newslist: data,
    });
  };
  handleClose = () => {
    this.setState({
      showmodal: false,
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
      <div id="topnews">
        <div>
          <h1 style={{ margin: "50px auto", textAlign: "center" }}>Top News</h1>
          <Container
            style={{ display: "block", margin: "auto", width: "100%" }}
          >
            <Row xs={1} md={3}>
              {this.props.topNews
                .slice(0, this.state.showmore)
                .map((item, index) => {
                  for (let i = 0; i < 6; i++) {}
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
                          onClick={() => this.openmodals(item)}
                        >
                          <Card.Body>
                            {(isAuthenticated || this.props.userData) && (
                              <button>Like</button>
                            )}
                            <Card.Title>{`${item.title}`}</Card.Title>
                          </Card.Body>
                          <Card.Img variant="top" src={`${item.image}`} />
                        </Card>
                      </Col>
                    );
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
                          onClick={() => this.openmodals(item)}
                        >
                          <Card.Img variant="bottom" src={`${item.image}`} />

                          <Card.Body>
                            <Card.Title>{`${item.title}`}</Card.Title>
                            {(isAuthenticated || this.props.userData) && (
                              <button>Like</button>
                            )}
                          </Card.Body>
                        </Card>
                      </Col>
                    );
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
                this.setState({ showmore: this.state.showmore + 3 });
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
      </div>
    );
  }
}

export default withAuth0(TopNews);
