import React, { Component } from 'react';
import CarouselsNews from "./HomeComponent/CarouselsNews";
import Weather from './HomeComponent/Weather'
import NewsFeed from './HomeComponent/NewsFeed'

 class Home extends Component {
    render() {
        return (
            <>
              <CarouselsNews/>
              <Weather/>
              
              <NewsFeed/> 
            </>
        )
    }
}

export default Home
