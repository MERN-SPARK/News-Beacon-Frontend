import React, { Component } from "react"
import axios from "axios"
import { Accordion, Button } from "react-bootstrap"
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
      <div>
        {this.state.data.map((item) => {
          return (
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>BODY</Accordion.Body>
              </Accordion.Item>
              <br />
              <Button onClick={() => this.delfav(item.title)}>Remove</Button>
            </Accordion>
          )
        })}
      </div>
    )
  }
}

export default Favourite
