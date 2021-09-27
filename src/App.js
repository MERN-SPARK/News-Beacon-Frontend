import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Favorate from "./components/Favorate";
import MoreInfo from "./components/MoreInfo";
import CountryNews from "./components/CountryNews";
import Signup from "./components/HomeComponent/Signup"
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/HomeComponent/Login";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSideBar: false,
      searchQuery:""
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
      searchQuery: e.target.value,
    });
    console.log(this.state.searchQuery);
  };
  // handle submit which will use the search api and gives a q as a variable and then direct the user to a result page

  HandelSubmit =(e)=>{
      e.preventDefault()

  }
  render() {
    return (
      <>
      <Login/>
      {/* <Signup/> */}
        {/* <Header
          openSideBar={this.state.openSideBar}
          OpenNav={this.OpenNav}
          closeNav={this.closeNav}
          handelSearchQuery={this.handelSearchQuery}
        />

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

          </Switch>
        </Router>

        <Footer /> */}
      </>
    );
  }
}

export default App;
