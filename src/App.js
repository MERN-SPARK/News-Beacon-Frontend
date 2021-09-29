import React, { Component } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import Favourites from "./components/Favourites"
import MoreInfo from "./components/MoreInfo"
import Sports from "./components/Sports"
import CountryNews from "./components/CountryNews"
import Signup from "./components/HomeComponent/Signup"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./components/HomeComponent/Login"
import Arts from "./components/Arts"
import Business from "./components/Business"
import axios from "axios"
import Food from "./components/Food"
import Politics from "./components/Politics"
import Travel from "./components/Travel"
import Result from "./components/Result"
import ForgetPassword from "./components/HomeComponent/ForgetPassword"
import HeaderOther from "./components/HeaderOther"
import { withAuth0 } from "@auth0/auth0-react"
import Favourite from "./components/Favourite"

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openSideBar: false,
      searchQuery: "",
      results: [],
      resultFlag: false,
      target: "",
      isHomePage: true,
      isAuth: false,
      userData: [],
      favId: "",
      test: "hello",
    }
  }

  OpenNav = () => {
    this.setState({
      openSideBar: true,
    })
  }

  closeNav = () => {
    this.setState({
      openSideBar: false,
    })
  }

  // handle the search form and put it in the header

  handelSearchQuery = (e) => {
    this.setState({
      resultFlag: false,
      searchQuery: e.target.value,
    })
  }
  // handle submit which will use the search api and gives a q as a variable and then direct the user to a result page

  HandelSubmit = (e) => {
    e.preventDefault()
    let target = e.target.search.value
    axios
      .get(`https://mern-spark-project.herokuapp.com/APIOneSearch?q=${target}`)
      .then((res) => {
        this.setState({
          resultFlag: true,
          results: res.data,
          target: target,
        })
      })
  }
  checksign = async () => {
    let check = await axios.get(
      "https://mern-spark-project.herokuapp.com/check-user"
    )
    console.log(check.data)
    this.setState({
      userData: check.data.auth,
    })
    if (check.data.auth) {
      this.createfav(check.data.data.name)
    }
  }

  async componentDidMount() {
    // this.topNewsShow();
    // this.weather();
    this.checksign()
  }

  homepageCheck = () => {
    if (window.location.pathname === "/") {
      this.setState({
        isHomePage: false,
      })
    }
  }

  createfav = async (name) => {
    console.log(name)
    const check = {
      name: name,
    }
    let checkfav = await axios.get(
      "https://mern-spark-project.herokuapp.com/checkfav"
    )
    console.log(checkfav)
    if (!checkfav.data.state) {
      let create = await axios.post(
        `https://mern-spark-project.herokuapp.com/addfav`,
        check
      )
    }
    console.log(this.state.favId)
  }
  render() {
    const { isAuthenticated } = this.props.auth0

    isAuthenticated &&
      setTimeout(() => {
        this.createfav(this.props.auth0.user.name)
      }, 500)
    // console.log(this.props.auth0);

    return (
      <>
        {this.state.resultFlag ? (
          <>
            <HeaderOther
              openSideBar={this.state.openSideBar}
              OpenNav={this.OpenNav}
              closeNav={this.closeNav}
              handelSearchQuery={this.handelSearchQuery}
              HandelSubmit={this.HandelSubmit}
            />
            <Result results={this.state.results} target={this.state.target} />
          </>
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
                    userData={this.state.userData}
                  />
                  <Home userData={this.state.userData} />
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

                <Route path="/favourite">
                  <HeaderOther
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                  />
                  <Favourite />
                </Route>

                {/* <Route path="/Loginn">
                  <HeaderOther
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                  />
                  <AboutUs />
                </Route> */}

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
                  <Sports userData={this.state.userData} />
                </Route>

                <Route path="/arts">
                  <HeaderOther
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                  />
                  <Arts userData={this.state.userData} />
                </Route>

                <Route path="/business">
                  <HeaderOther
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                  />
                  <Business userData={this.state.userData} />
                </Route>

                <Route path="/food">
                  <HeaderOther
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                  />
                  <Food userData={this.state.userData} />
                </Route>

                <Route path="/politics">
                  <HeaderOther
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                  />
                  <Politics userData={this.state.userData} />
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

                <Route path="/login">
                  <HeaderOther
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                  />
                  <Login setuser={this.setuser} />
                </Route>
                <Route path="/signup">
                  <HeaderOther
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                  />
                  <Signup />
                </Route>

                <Route path="/travel">
                  <HeaderOther
                    openSideBar={this.state.openSideBar}
                    OpenNav={this.OpenNav}
                    closeNav={this.closeNav}
                    handelSearchQuery={this.handelSearchQuery}
                    HandelSubmit={this.HandelSubmit}
                  />
                  <Travel userData={this.state.userData} />
                </Route>
                <Route path="/forgetPassword">
                  <ForgetPassword />
                </Route>
              </Switch>
            </Router>
          </>
        )}

        <Footer />
      </>
    )
  }
}

export default withAuth0(App)
