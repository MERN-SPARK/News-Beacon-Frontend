import React, { Component } from 'react'
import axios from 'axios';
import countryList from "iso-3166-country-list"
// countryList.name("DE"); // 'Germany'
// countryList.code("Germany"); // 'DE'

export class CovidNews extends Component {
    constructor(props){
        super(props)
        this.state={
            CovidIMg:`https://corona.dnsforfamily.com/graph.png?c=JO`,
            showImgCovid:''
        }
    }
    Covidchange = (e) => {
        this.setState({
            showImgCovid: `https://corona.dnsforfamily.com/graph.png?c=${countryList.code(e.target.value)}`,
        });
      };
      CovidSubmit =  (e) => {
        e.preventDefault();
        this.setState({
            CovidIMg:this.state.showImgCovid
        })
      }

    render() {
        return (
            <div>
                <div>
                <form onSubmit={this.CovidSubmit}>
                    <input  type="text" 
                            placeholder="Please enter a city name..."
                            onChange={this.Covidchange}
                            />
                    <input type="submit" value="Explorer"/>
                </form>
                </div>
                <div>
<img src={this.state.CovidIMg}  alt='' />
                </div>
            </div>
        )
    }
}

export default CovidNews
