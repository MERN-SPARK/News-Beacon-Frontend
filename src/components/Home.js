import React, { Component,useEffect } from "react"
import CarouselsNews from "./HomeComponent/CarouselsNews"
import Weather from "./HomeComponent/Weather"
// import NewsFeed from './HomeComponent/NewsFeed';
import MostPopular from "./HomeComponent/MostPopular"
import TopNews from "./HomeComponent/TopNews"
import CovidNews from "./HomeComponent/CovidNews"
import Loading from "./HomeComponent/Loading"
import axios from "axios"
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      topNews: [],
      topThree: [],
      most_popular: [],
      weatherData: [],
      city: "amman",
    }
  }
checksign=async()=>{
  let check =  await axios.get('http://localhost:8070/check-user')
  console.log(check);
}

  //define function for the most popular and send the data to its component --> most popular api
  //define function for obtining the top news and send it to its component --> top news api PORT=http://localhost:8070/TopNews
  topNewsShow = async () => {
    try {
      let TopNews = await axios.get(`https://mern-spark-project.herokuapp.com/TopNews`)
      let PopularNews = await axios.get("https://mern-spark-project.herokuapp.com/PopularNews")

      let arra = PopularNews.data.filter(function (el) {
        //define function for the most popular and send the data to its component --> most popular api
        //define function for obtining the top news and send it to its component --> top news api PORT=http://localhost:8070/TopNews

        return el != null
      })

      this.setState({
        topThree: TopNews.data.slice(0, 3),
        topNews: TopNews.data.slice(3, TopNews.data.length),
        loaded: true,
        most_popular: arra,
      })
    } catch (err) {
      console.error(err)
    }
  }

  weather = () => {
    let weatherInfo = []
    axios
      .get(`https://mern-spark-project.herokuapp.com/WeatherNews?city=${this.state.city}`)
      .then((res) => {
        weatherInfo = res.data
        this.setState({
          weatherData: weatherInfo,
        })
      })
  }

  
  async componentDidMount() {
    this.topNewsShow()
    this.weather()
    this.checksign()
  }
 

  // function to take the weather data of the searched country and put amman wheather as a default

  render() {
    return this.state.loaded ? (
      <>
      <h1>{this.props.user}</h1>
        <CarouselsNews topThree={this.state.topThree} />
        <Weather weatherData={this.state.weatherData} />
        <TopNews topNews={this.state.topNews} />
        <MostPopular popularNews={this.state.most_popular} />
        <CovidNews />
      </>
      
    ) : (
      <div>
      <Loading />
      </div>
    )
  }
}

export default Home
