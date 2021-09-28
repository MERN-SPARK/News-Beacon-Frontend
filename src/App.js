import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Favorate from "./components/Favorate";
import MoreInfo from "./components/MoreInfo";
import Sports from "./components/Sports";
import CountryNews from "./components/CountryNews";
import Signup from "./components/HomeComponent/Signup"
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/HomeComponent/Login";
import Arts from "./components/Arts";
import Business from "./components/Business";
import axios from "axios";
import Food from "./components/Food";
import Politics from "./components/Politics";
import Travel from "./components/Travel";
import Result from "./components/Result";
import ForgetBassword from "./components/HomeComponent/ForgetBassword"

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSideBar: false,
      searchQuery: "",
      results: [],
      resultFlag: false,
      target:""
    };
  }

  OpenNav = () => {
    this.setState({
      openSideBar: true,
    });
  };

  closeNav = () => {
    this.setState({
      openSideBar: false,
    });
  };

  // handle the search form and put it in the header

  handelSearchQuery = (e) => {
    this.setState({
      resultFlag:false,
      searchQuery: e.target.value,
    });
  };
  // handle submit which will use the search api and gives a q as a variable and then direct the user to a result page

  HandelSubmit = (e) => {
    e.preventDefault();
    let target = e.target.search.value;
    axios.get(`http://localhost:8070/APIOneSearch?q=${target}`).then((res) => {
      this.setState({
        resultFlag: true,
        results: res.data,
        target:target
      });
    });
    // console.log(this.state.resultFlag)
  };

  render() {
    return (
      <>
      
        <Header
          openSideBar={this.state.openSideBar}
          OpenNav={this.OpenNav}
          closeNav={this.closeNav}
          handelSearchQuery={this.handelSearchQuery}
          HandelSubmit={this.HandelSubmit}
        />
        {this.state.resultFlag ? (
            <Result results={this.state.results} target={this.state.target}/>
          
        ) : (
          <>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <AboutUs />
                </Route>
                <Route path="/favorate">
                  <Favorate />
                </Route>

                <Route exact path="/country">
                  <CountryNews />
                </Route>

                <Route path="/moreInfo">
                  <MoreInfo />
                </Route>

                <Route path="/sports">
                  <Sports />
                </Route>

                <Route path="/arts">
                  <Arts />
                </Route>

                <Route path="/business">
                  <Business />
                </Route>

                <Route path="/food">
                  <Food />
                </Route>

                <Route path="/politics">
                  <Politics />
                </Route>

        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/favorate">
              <Favorate />
              </Route>
              
            <Route path="/moreInfo">
              <MoreInfo />
            </Route>

            <Route path="/login">
              <Login />
              </Route>
            <Route path="/signup">
              <Signup />
              </Route>
          </Switch>
        </Router>

                <Route path="/travel">
                  <Travel />
                </Route>
                <Route path="/forgetBassword">
                  <ForgetBassword />
                </Route>
              </Switch>
            </Router>
          </>
        )}

        <Footer />
      </>
    );
  }
}

export default App;
