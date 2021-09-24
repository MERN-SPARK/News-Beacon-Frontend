import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Switch,Route,BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs"
import Favorate from "./components/Favorate";
import MoreInfo from "./components/MoreInfo";
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <>
      <Header />
      
      
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

      <Footer />
      </>
    );
  }
}

export default App;
