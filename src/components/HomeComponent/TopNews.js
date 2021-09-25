import React, { Component } from "react";
import { Col, Row, Card, Button, Container } from "react-bootstrap";

class TopNews extends Component {
  render() {
    return (
      <>

      <h1 style={{margi:"50px auto" , textAlign:"center"}}>Top News</h1>
      <Container>
      <Row xs={1} md={3}>
{this.props.topNews.map((item, index) => {
    
  if (index % 2 === 0) {
    return (
      <Col>
        <Card style={{ width: "18rem" ,height:"400px" }}>
            <Card.Body>
            <Card.Title>{`${item.title}`}</Card.Title>
          </Card.Body>
          <Card.Img variant="top" src={`${item.image}`} />
        </Card>
      </Col>
    );
  }else{
      return(
        <Col >
        <Card style={{ width: "18rem",height:"400px" }}>
        
        <Card.Img variant="bottom" src={`${item.image}`} />
            
            <Card.Body>
            <Card.Title>{`${item.title}`}</Card.Title>
          </Card.Body>
          
        </Card>
      </Col>
      )
   
  }
})}
</Row>
      </Container>
      </>
    );
  }
}

export default TopNews;
