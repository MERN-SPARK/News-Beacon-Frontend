import React, { Component } from 'react'
import { Row,Card,Col, Container } from 'react-bootstrap';

export class Result extends Component {
    render() {
        return (
            <>
            <h1>{`Results on ${this.props.target} `}</h1>

            {this.props.results.length ===0 && <p>no Results fouund</p>}
            <Container>
            <Row xs={3}>
                {" "}
                {this.props.results.map((item) => {
                  return (
                    <>
                      <Col>
                        <Card>
                          <Card.Img
                            variant="top"
                            src={item.urlToImage}
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
                              {item.description}
                            </Card.Text>
                            <p>
                              <a href={item.url}>Show more</a>
                            </p>
                          </Card.Body>
                        </Card>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </Container>
              
            </>
        )
    }
}

export default Result
