import React, { Component } from 'react'
import {Row,Col,Image, Container} from "react-bootstrap"

export class AboutUs extends Component {
    render() {
        return (
            <>
            <div style ={{textAlign:'center' ,marginTop:"100px"}}>
                <h1 style={{fontSize : "70px"}}>About Us</h1>
            </div>
            <div style={{marginTop:"100px"}}>
            <h1>wCcIoWnGvL1ZvobNMlo</h1>
              <p>PNKzSAhaSCLSS
                  DjUzGqZiSGNUzPbWTlMxhDFaZjCGYpGBmxBgzQMC1eS8yTM5pEW
                  80rQGaWrSMpxGh0MSVowjTNah1DCCLo0MGhWo2YJ5vNHMFTHtHU8uyH21zz5FaGy3fVvUXt1bynRobLo09cudur</p> 

            </div>
            <div style={{marginTop:"100px"}}>
                <Container>
                <Row>
                    <Col>
                    <Image src="https://toppng.com/public/uploads/thumbnail/blue-person-icon-blue-person-icon-11562903982ibmz5x4ndc.png" roundedCircle style={{display:"block",margin:"auto",marginBottom:"30px"}}/>
                    <p style={{textAlign:"center"}}>person Name</p>
                    </Col>
                    <Col>
                    <Image src="https://toppng.com/public/uploads/thumbnail/blue-person-icon-blue-person-icon-11562903982ibmz5x4ndc.png" roundedCircle style={{display:"block",margin:"auto",marginBottom:"30px"}}/>
                    <p style={{textAlign:"center"}}>person Name</p>
                    </Col>
                    <Col>
                    <Image src="https://toppng.com/public/uploads/thumbnail/blue-person-icon-blue-person-icon-11562903982ibmz5x4ndc.png" roundedCircle style={{display:"block",margin:"auto",marginBottom:"30px"}}/>
                    <p style={{textAlign:"center"}}>person Name</p>
                    </Col>
                    <Col>
                    <Image src="https://toppng.com/public/uploads/thumbnail/blue-person-icon-blue-person-icon-11562903982ibmz5x4ndc.png" roundedCircle style={{display:"block",margin:"auto",marginBottom:"30px"}}/>
                    <p style={{textAlign:"center"}}>person Name</p>
                    </Col>
                    <Col>
                    <Image src="https://toppng.com/public/uploads/thumbnail/blue-person-icon-blue-person-icon-11562903982ibmz5x4ndc.png" roundedCircle style={{display:"block",margin:"auto",marginBottom:"30px"}}/>
                    <p style={{textAlign:"center"}}>person Name</p>
                    </Col>
                </Row>
                </Container>
            </div>
            </>
        )
    }
}

export default AboutUs
