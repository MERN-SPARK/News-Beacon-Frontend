import React, { Component } from "react";
import { Col, Row, Card, Button, Container } from "react-bootstrap";
import ModalHomepage from "./ModalHomepage";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import like1 from "../../like1.png";
import like2 from "../../like2.png";

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
  favourite = async (title, description, image, url) => {
    let arr = {
      title: title,
      image: image,
      description: description,
      url: url,
    };
    let checkfav = await axios.get(
      "https://mern-spark-project.herokuapp.com/checkfav"
    );
    console.log(checkfav.data.id);
    let add = await axios.patch(
      `https://mern-spark-project.herokuapp.com/resdata/${checkfav.data.id}`,
      arr
    );
    console.log(add.data);
    // window.location.reload();
  };
  //  toggleImg=() =>{
  //   let initialImg = document.getElementById("imgplus").src;
  //   let srcTest = initialImg.includes('like1');
  //   let newImg = {
  //     'true':'second/img/url',
  //     'false':'initial/img/url'}[srcTest];

  //   return newImg;
  // }
  image2 = (e) => {
    if (e.target.src === like1) {
      e.target.src = like2;
    } else {
      e.target.src = like1;
    }
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
                            position: "relative",
                          }}
                        >
                          <Card.Body onClick={() => this.openmodals(item)}>
                            <Card.Title
                              style={{ position: "absolute", top: "50px" }}
                            >{`${item.title}`}</Card.Title>
                          </Card.Body>
                          
                          <Card.Img
                            variant="top"
                            src={`${item.image}`}
                            onClick={(e) => {
                              this.openmodals(item);
                            }}
                          />
                          {(isAuthenticated || this.props.userData) && (
                            <img
                              src={like1}
                              style={{
                                position: "absolute",
                                top: "220px",
                                left: "190px",
                              }}
                              onClick={(e) => {
                                this.favourite(
                                  item.title,
                                  item.abstract,
                                  item.image,
                                  item.url
                                );
                                this.image2(e);
                              }}
                              alt=""
                            />
                          )}
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
                        >
                          <Card.Img
                            variant="bottom"
                            src={`${item.image}`}
                            onClick={() => this.openmodals(item)}
                          />

                          <Card.Body onClick={() => this.openmodals(item)}>
                            <Card.Title>{`${item.title}`}</Card.Title>
                          </Card.Body>
                          {(isAuthenticated || this.props.userData) && (
                            <img
                              style={{
                                position: "absolute",
                                top: "220px",
                                left: "190px",
                              }}
                              src={like1}
                              onClick={(e) => {
                                this.favourite(
                                  item.title,
                                  item.abstract,
                                  item.image,
                                  item.url
                                );
                                this.image2(e);
                              }}
                              alt=""
                            />
                          )}
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