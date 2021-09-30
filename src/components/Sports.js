import axios from "axios";
import React, { Component } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Form,
  Container,
  Carousel,
} from "react-bootstrap";
import SportsStyle from "./SportsStyle.css";
import { withAuth0 } from "@auth0/auth0-react";
import like1 from "../like1.png";
import like2 from "../like2.png";

export class Sports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sportsInfo: [],
      lastUpdated: [],
      sportsTop: [],
      showCard: false,
      seachedToken: "",
      searched_topics: [],
      flag_search: false,
      news_type: "sports",
    };
  }
  // [{title:"", description:""},{},{},{}]
  getCurrentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    return today;
  };

  handelSearchQuery = (e) => {
    this.setState({
      flag_search: false, // eslint-disable-next-line
    });
  };
  image2 = (e) => {
    if (e.target.src === like1) {
      e.target.src = like2;
    } else {
      e.target.src = like1;
    }
  };
  handelSubmit = (e) => {
    e.preventDefault();
    let token = e.target.inlineFormInputName.value;

    let arr = this.state.sportsInfo.filter((item) =>
      item.title
        .split(" ")
        .map((item) => item.toLowerCase())
        .includes(token.toLowerCase())
    );

    this.setState({
      flag_search: true,
      searched_topics: arr,
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
  componentDidMount = () => {
    let result = [];
    axios
      .get(
        `https://mern-spark-project.herokuapp.com/APIOneFilter?section=${this.state.news_type}`
      )
      .then((res) => {
        result = res.data;
        // console.log(this.state.sportsInfo);
      })
      .then(() => {
        let array = [];
        // eslint-disable-next-line
        result.map((data, index) => {
          if (data.updated_date.split("T")[0] === this.getCurrentDate()) {
            array.push(data);
            result.splice(index, 1);
          }
          this.setState({
            lastUpdated: array,
            showCard: true,
            sportsTop: result.slice(0, 3),
            sportsInfo: result.slice(3, result.length),
          });
        });
      });
  };

  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
      <div className={SportsStyle.mainSection}>
        <h1>
          {this.state.news_type[0].toUpperCase() +
            this.state.news_type.substring(1)}
        </h1>
        <Form onSubmit={this.handelSubmit}>
          <Row>
            <Col>
              <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control
                id="inlineFormInputName"
                placeholder={`Search by ${
                  this.state.news_type[0].toUpperCase() +
                  this.state.news_type.substring(1)
                }`}
                onChange={this.handelSearchQuery}
              />
            </Col>
            <Col>
              <Button
                type="submit"
                style={{ backgroundColor: "#da0037", borderColor: "#da0037" }}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
        {!this.state.flag_search ? (
          <>
            {/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://dummyimage.com/450x299/65696F/65696F.jpg"
      alt="First slide"
    />

    <Carousel.Caption>
    <img src= "https://www.wepal.net/ar/uploads/2732018-073911PM-1.jpg" alt=""/>
      <h3>First slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel> */}
            <Container
              className={SportsStyle.cardTop}
              style={{ marginTop: "100px" }}
            >
              <h1 style={{ marginBottom: "36px" }}>Top News</h1>
              <Row>
                {this.state.showCard &&
                  this.state.sportsTop.map((item) => {
                    return (
                      <Col>
                        <Card className="bg-dark text-white">
                          <Card.Img
                            src={item.image}
                            alt="Card image"
                            style={{ height: "300px" }}
                          />
                          <Card.ImgOverlay
                            style={{ backgroundColor: "#00000082" }}
                          >
                            <div
                              style={{
                                width: "350px",
                                height: "300px",
                                float: "right",
                              }}
                            >
                              {" "}
                              <Card.Title>{item.title}</Card.Title>
                              <Card.Text>{item.abstract}</Card.Text>
                              <Card.Text>
                                <strong>{item.byline}</strong>
                              </Card.Text>
                              {(isAuthenticated || this.props.userData) && (
                                <img
                                  src={like1}
                                  style={{
                                    position: "absolute",
                                    top: "174px",
                                    left: "285px",
                                  }}
                                  onClick={(e) => {
                                    this.favourite(
                                      item.title,
                                      item.description,
                                      item.image,
                                      item.url
                                    );
                                    this.image2(e);
                                  }}
                                  alt=""
                                />
                              )}
                            </div>
                          </Card.ImgOverlay>
                        </Card>
                      </Col>
                    );
                  })}
              </Row>
            </Container>
            <Container
              className={SportsStyle.secondCard}
              style={{ marginTop: "80px" }}
            >
              <h1 style={{ marginBottom: "36px" }}>Recent News</h1>
              <Row xs={3}>
                {" "}
                {this.state.sportsInfo.map((item) => {
                  return (
                    <>
                      <Col>
                        <Card style={{ marginBottom: "30px" }}>
                          <Card.Img
                            variant="top"
                            src={item.image}
                            style={{ objectFit: "cover", height: "200px" }}
                          />
                          <Card.Body style={{ height: "200px" }}>
                            <Card.Title
                              style={{ height: "25px", overflow: "hidden" }}
                            >
                              {item.title}
                            </Card.Title>
                            <Card.Text
                              style={{ height: "50px", overflow: "hidden" }}
                            >
                              {item.abstract}
                            </Card.Text>
                            <p>
                              <a
                                href={item.url}
                                style={{
                                  textDecoration: "none",
                                  color: "#da0037",
                                }}
                              >
                                Show more
                              </a>
                            </p>
                          </Card.Body>
                          {(isAuthenticated || this.props.userData) && (
                            <img
                              src={like1}
                              style={{
                                position: "absolute",
                                top: "72px",
                                left: "285px",
                              }}
                              onClick={(e) => {
                                this.favourite(
                                  item.title,
                                  item.description,
                                  item.image,
                                  item.url
                                );
                                this.image2(e);
                              }}
                              alt=""
                            />
                          )}
                          <Card.Footer>
                            <small className="text-muted">{item.byline}</small>{" "}
                            <br />
                            <small className="text-muted">
                              {item.published_date.split("T")[0]}
                            </small>
                          </Card.Footer>
                        </Card>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </Container>
          </>
        ) : (
          this.state.searched_topics.map((item) => {
            return (
              <>
                <Card border="light" style={{ width: "13rem" }}>
                  <Card.Header style={{ overflow: "hidden", height: "35px" }}>
                    {item.title}
                  </Card.Header>
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={item.image}
                      style={{
                        width: "10rem",
                        height: "100px",
                        margin: "auto",
                      }}
                      onClick={() => window.open(`${item.url}`, "_blank")}
                    />
                    <Card.Text>{item.byline}</Card.Text>
                  </Card.Body>
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
                          item.description,
                          item.image,
                          item.url
                        );
                        this.image2(e);
                      }}
                      alt=""
                    />
                  )}
                </Card>
              </>
            );
          })
        )}
      </div>
    );
  }
}

export default withAuth0(Sports);
