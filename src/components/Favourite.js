import React, { Component } from "react"
import axios from "axios"
import { Card, Row, Col, Button, Form } from "react-bootstrap";
import SportsStyle from "./SportsStyle.css";
export class Favourite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      id: "",
    }
  }

  favourite = async () => {
    let checkfav = await axios.get(
      "https://mern-spark-project.herokuapp.com/checkfav"
    )
    console.log(checkfav.data.id)

    let add = await axios.get(
      `https://mern-spark-project.herokuapp.com/getfav/${checkfav.data.id}`
    )
    console.log(add.data.data.user.favdata)
    console.log(this.state.data)
    this.setState({
      data: add.data.data.user.favdata,
      id: checkfav.data.id,
    })
  }
  async componentDidMount() {
    this.favourite()
  }
  delfav = async (title) => {
    let data = {
      title: title,
    }
    let del = await axios.patch(
      `https://mern-spark-project.herokuapp.com/delfav/${this.state.id}`,
      data
    )
    console.log(del)
    window.location.reload()
  }

  render() {
    return (
      <div className={SportsStyle.cardTop}>
              {
                this.state.data.map((item) => {
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
                            <Card.Text>{item.description}</Card.Text>
                           
                           
                          </div>
                        </Card.ImgOverlay>
                      </Card>
                    </>
                  );
                })}
            </div>

      
    )
  }
}

export default Favourite
