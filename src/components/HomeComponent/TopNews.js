import React, { Component } from "react";
import { Col, Row, Card, Button, Container } from "react-bootstrap";

class TopNews extends Component {
  constructor(props){
    super(props)
    this.state={
    showmore:6
    }
}
  render() {
    return (
      <div>

      <h1 style={{margin:"50px auto" , textAlign:"center"}}>Top News</h1>
      <Container>
      <Row xs={1} md={3}>
{this.props.topNews.slice(0,this.state.showmore).map((item, index) => {
    for(let i =0 ; i<6;i++){}
  if (index % 3 === 1) {
    return (
      <Col  key ={index}>
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
        <Col  key ={index}>
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
      <Button variant="primary" onClick={()=>{this.setState({showmore:this.state.showmore+3})}}>Primary</Button>

      </div>
    );
  }
}

export default TopNews;
