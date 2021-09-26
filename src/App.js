import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Favorate from "./components/Favorate";
import MoreInfo from "./components/MoreInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import Sports from "./components/Sports";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSideBar: false,
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

  render() {
    return (
      <>
        <Header
          openSideBar={this.state.openSideBar}
          OpenNav={this.OpenNav}
          closeNav={this.closeNav}
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
              <div>
                <Sports />
              </div>
            </Route>
            {/* <Route path="/moreInfo">
            <Sports />
          </Route> */}
          </Switch>
        </Router>

        <Footer />
      </>
    );
  }
}

export default App;
