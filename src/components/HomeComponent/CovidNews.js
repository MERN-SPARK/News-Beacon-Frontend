import React, { Component } from 'react'
import countryList from "iso-3166-country-list"
// countryList.name("DE"); // 'Germany'
// countryList.code("Germany"); // 'DE'

export class CovidNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CovidIMg: `https://corona.dnsforfamily.com/graph.png?c=JO`,
      showImgCovid: "",
    };
  }
  Covidchange = (e) => {
    this.setState({
      showImgCovid: `https://corona.dnsforfamily.com/graph.png?c=${countryList.code(
        e.target.value
      )}`,
    });
  };
  CovidSubmit = (e) => {
    e.preventDefault();
    this.setState({
      CovidIMg: this.state.showImgCovid,
    });
  };

  render() {
    return (
      <>
        <h1
          style={{
            margin: "50px auto",
            textAlign: "center",
            backgroundColor: "#444444",
            color: "white",
            height: "75px",
          }}
        >
          Covid19
        </h1>

        <div style={{ textAlign: "center" }} id="covid19">
          <div style={{ position: "relative" }}>
            <form
              onSubmit={this.CovidSubmit}
              style={{ position: "absolute", top: "10px",left:"580px"  }}
            >
              <input
                type="text"
                placeholder="Please enter a city name..."
                onChange={this.Covidchange}
                style = {{width:"300px" ,borderRadius:"7px",border:"2px solid #444444"}}
              />
              <input type="submit" value="Explorer" style={{borderRadius:"7px", border:"2px solid #444444"}}/>
            </form>
          </div>
          <div>
            <img src={this.state.CovidIMg} alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default CovidNews;
