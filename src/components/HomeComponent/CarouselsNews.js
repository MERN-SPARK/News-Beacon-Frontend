import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

export class CarouselsNews extends Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${this.props.topThree[0].image}`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{`${this.props.topThree[0].title}`}</h3>
              <p>{`${this.props.topThree[0].published_date}`}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${this.props.topThree[1].image}`}
              alt="Second slide"
            />

            <Carousel.Caption>
            <h3>{`${this.props.topThree[1].title}`}</h3>
              <p>{`${this.props.topThree[1].published_date}`}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${this.props.topThree[2].image}`}
              alt="Third slide"
            />

            <Carousel.Caption>
            <h3>{`${this.props.topThree[2].title}`}</h3>
              <p>{`${this.props.topThree[2].published_date}`}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default CarouselsNews;
