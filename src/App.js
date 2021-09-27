import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Favourites from "./components/Favourites";
import MoreInfo from "./components/MoreInfo";
import Sports from "./components/Sports";
import CountryNews from "./components/CountryNews";
import Signup from "./components/HomeComponent/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/HomeComponent/Login";
import Arts from "./components/Arts";
import Business from "./components/Business";
import axios from "axios";
import Food from "./components/Food";
import Politics from "./components/Politics";
import Travel from "./components/Travel";
import Result from "./components/Result";
import HeaderOther from "./components/HeaderOther";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSideBar: false,
      searchQuery: "",
      results: [],
      resultFlag: false,
      target: "",
      isHomePage: true,
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
      resultFlag: false,
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
        target: target,
      });
    });
  };

  homepageCheck = () => {
    if (window.location.pathname === "/") {
      this.setState({
        isHomePage: false,
      });
    }
  };

  render() {
    return (
      <>
        {this.state.resultFlag ? (
          <Result results={this.state.results} target={this.state.target} />
        ) : (
          <>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Header
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                    isHomePage={this.state.isHomePage}
                  />
                  <Home />
                </Route>
                <Route path="/about">
                  <HeaderOther
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                  />
                  <AboutUs />
                </Route>
                <Route path="/favorate">
                <HeaderOther
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                  />
                  <Favourites />
                </Route>

                <Route exact path="/country">
                <HeaderOther
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                  />
                  <CountryNews />
                </Route>

                <Route path="/moreInfo">
                <HeaderOther
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                  />
                  <MoreInfo />
                </Route>

                <Route path="/sports">
                <HeaderOther
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                  />
                  <Sports />
                </Route>

                <Route path="/arts">
                <HeaderOther
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                  />
                  <Arts />
                </Route>

                <Route path="/business">
                <HeaderOther
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                  />
                  <Business />
                </Route>

                <Route path="/food">
                <HeaderOther
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                  />
                  <Food />
                </Route>

                <Route path="/politics">
                <HeaderOther
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                  />
                  <Politics />
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

                <Route path="/travel">
                  <Travel />
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
