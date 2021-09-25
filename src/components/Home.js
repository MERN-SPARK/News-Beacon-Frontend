import React, { Component } from 'react';
import CarouselsNews from "./HomeComponent/CarouselsNews";
import Weather from './HomeComponent/Weather'
// import NewsFeed from './HomeComponent/NewsFeed';
import MostPopular from './HomeComponent/MostPopular';
import TopNews from "./HomeComponent/TopNews";
import axios from 'axios';
 
class Home extends Component {
     constructor(props){
         super(props)
         this.state={
            loaded:false,
            topNews:[],
            topThree:[],
            most_poprlar:[],
         }
     }
     
    //define function for the most popular and send the data to its component --> most popular api 
   //define function for obtining the top news and send it to its component --> top news api PORT=http://localhost:8070/TopNews
   topNewsShow=()=>{
    axios.get(`http://localhost:8070/TopNews`).then(data=>{
        console.log(data)

        this.setState({
           topThree :data.data.slice(0,3),
           topNews :data.data.slice(3,data.data.length),
           loaded:true
        })
    })
    
} 

    
async componentDidMount(){
    this.topNewsShow()
}
    
   
// function to take the weather data of the searched country and put amman wheather as a default 

    

    render() {
        return (
            this.state.loaded ?(
<>
                <CarouselsNews topThree={this.state.topThree} />
                <Weather/>
                <TopNews topNews={this.state.topNews}/>
                <MostPopular/> 
              </> 
            ):(<h2>Loading ...</h2>)
            
        )
    }
}

export default Home
