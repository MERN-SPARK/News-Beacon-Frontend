import React, { Component } from "react";
import axios from "axios";
import { Col, Row, Card, Container } from "react-bootstrap";
import ModalHomepage from "./HomeComponent/ModalHomepage";
export class CountryNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryvalue: "us",
      countryNewsList: [],
      showmore: 6,
      newslist: [],
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

  setCountry = (event) => {
    this.setState({
      countryvalue: event.target.value,
    });
  };

  componentDidMount = async () => {
    let CountryNews = await axios.get(
      `http://localhost:8070/CountryNews?country=${this.state.countryvalue} `
    );
    this.setState({
      countryNewsList: CountryNews.data,
    });
  };

  countrySubmit = async (e) => {
    e.preventDefault();
    try {
      let CountryNews = await axios.get(
        `http://localhost:8070/CountryNews?country=${this.state.countryvalue} `
      );
      this.setState({
        countryNewsList: CountryNews.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    return (
      <div>
        <div>
          <h1 style={{ margin: "50px auto", textAlign: "center" }}>
            country News
          </h1>
          <div>
          <form onSubmit={this.countrySubmit} style={{marginLeft:"160px"}}>
            <select
              name="country"
              onChange={this.setCountry}
              value={this.state.countryvalue}
              style={{border: '0px',
                borderRadius: '5px',
                backgroundColor: '#444444',
                padding: '5px',
                marginRight: '7px',
                color: 'white'
            }}
            >
              <option value="ae">United Arab Emirates</option>
              <option value="ar">Argentina</option>
              <option value="at">Austria</option>
              <option value="us">United States of America</option>
              <option value="au">Australia</option>
              <option value="be">Belgium</option>
              <option value="bg">Bulgaria</option>
              <option value="br">Brazil</option>
              <option value="ca">Canada</option>
              <option value="ch">Switzerland</option>
              <option value="cn">China</option>
              <option value="co">Colombia</option>
              <option value="cu">Cuba</option>
              <option value="cz">Czechia</option>
              <option value="de">Germany</option>
              <option value="eg">Egypt</option>
              <option value="fr">France</option>
              <option value="gb">United Kingdom</option>
              <option value="gr">Greece</option>
              <option value="hk">Hong Kong</option>
              <option value="hu">Hungary</option>
              <option value="id">Indonesia</option>
              <option value="ie">Ireland</option>
              <option value="in">India</option>
              <option value="it">Italy</option>
              <option value="jp">Japan</option>
              <option value="kr">Korea</option>
              <option value="ma">Morocco</option>
              <option value="mx">Mexico</option>
              <option value="my">Malaysia</option>
              <option value="ng">Nigeria</option>
              <option value="nz">New Zealand</option>
              <option value="ph">Philippines</option>
              <option value="pl">Poland</option>
              <option value="pt">Portugal</option>
              <option value="ro">Romania</option>
              <option value="rs">Serbia</option>
              <option value="ru">Russian</option>
              <option value="sa">Saudi Arabia</option>
              <option value="se">Sweden</option>
              <option value="sg">Singapore</option>
              <option value="th">Thailand</option>
              <option value="tr">Turkey</option>
              <option value="tw">Taiwan</option>
              <option value="ua">Ukraine</option>
              <option value="za">South Africa</option>
            </select>
            <input type="submit" value="Explorer"  style={{  borderRadius:'5px',
    border: '0px',
    padding: '5px',
    backgroundColor: '#ededed',
    color: '#444444'}}/>
          </form>
        </div>
          <Container
            style={{ display: "block", margin: "auto", width: "100%" }}
          >
            <Row xs={1} md={3}>
              {this.state.countryNewsList.map((item, index) => {
                if (item.image === null) {
                  item.image =
                    "http://www.sevengatellc.com/UploadFiles/Article_Images/201822712916.jpg";
                }
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
                          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

                        }}
                        onClick={() => this.openmodals(item)}
                      >
                        <Card.Body>
                          <Card.Title>{`${item.title}`}</Card.Title>
                        </Card.Body>
                        <Card.Img variant="top" src={`${item.image}`} />
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
                          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

                        }}
                      >
                        <Card.Img
                          variant="bottom"
                          src={`${item.image}`}
                          onClick={() => this.openmodals(item)}
                        />

                        <Card.Body>
                          <Card.Title>{`${item.title}`}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                }
              })}
            </Row>
          </Container>
        </div>
        <ModalHomepage
          news={this.state.newslist}
          showmodal={this.state.showmodal}
          handleClose={this.handleClose}
        />
        ;
      </div>
    );
  }
}

export default CountryNews;
