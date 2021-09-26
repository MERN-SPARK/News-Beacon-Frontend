import axios from "axios";
import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import SportsStyle from "./SportsStyle.css";

export class Sports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sportsInfo: [],
      lastUpdated: [],
      sportsTop: [],
      showCard: false,
    };
  }

  getCurrentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    return today;
  };

  componentDidMount = () => {
    let result = [];
    axios
      .get(`http://localhost:8070/APIOneFilter?section=arts`)
      .then((res) => {
        result = res.data;
        console.log(this.state.sportsInfo);
      })
      .then(() => {
        let array = [];
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
    return (
      <div className={SportsStyle.mainSection}>
          <h1>Arts</h1>
        <div className={SportsStyle.cardTop}>
          {this.state.showCard &&
            this.state.sportsTop.map((item) => {
              return (
                <>
                  <Card className="bg-dark text-white">
                    <Card.Img
                      src={item.image}
                      alt="Card image"
                      style={{ width: "500px", height: "300px" }}
                    />
                    <Card.ImgOverlay>
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
                      </div>
                    </Card.ImgOverlay>
                  </Card>
                </>
              );
            })}
        </div>
        <div className={SportsStyle.secondCard}>
          <Row xs={3}>
            {" "}
            {this.state.sportsInfo.map((item) => {
              return (
                <>
                  <Col>
                    <Card>
                      <Card.Img
                        variant="top"
                        src={item.image}
                        style={{ width: "382.5px", height: "200px" }}
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
                          <a href={item.url}>Show more</a>
                        </p>
                      </Card.Body>
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
        </div>
        <div className={SportsStyle.lastCard}>
          {this.state.showCard &&
            this.state.lastUpdated.map((item) => {
              return (
                <>
                  {" "}
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
                  </Card>
                </>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Sports;