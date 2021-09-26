import React, { Component } from "react";
import { Col, Row, Card, Button, Container } from "react-bootstrap";
import ModalHomepage from "./ModalHomepage";

class TopNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showmore: 6,
      newslist: [],
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
    return (
      <div>
        <h1 style={{ margin: "50px auto", textAlign: "center" }}>Top News</h1>
        <Container style={{ display: "block", margin: "auto", width: "100%" }}>
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
                        style={{ width: "18rem", height: "400px" }}
                        onClick={() => this.openmodals(item)}
                      >
                        <Card.Body>
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
                        style={{ width: "18rem", height: "400px" }}
                        onClick={() => this.openmodals(item)}
                      >
                        <Card.Img variant="bottom" src={`${item.image}`} />

                        <Card.Body>
                          <Card.Title>{`${item.title}`}</Card.Title>
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
              fontSize:"20px",
              color: "#DA0037",
              display: "block",
              margin: "auto",
              width: "90%",
              textDecoration:"underline"
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
    );
  }
}

export default TopNews;
