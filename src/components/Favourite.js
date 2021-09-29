import React, { Component } from 'react'
import axios from 'axios'
export class Favourite extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            id:''
        }
    }
 

    favourite = async () => {
       
        let checkfav= await axios.get("https://mern-spark-project.herokuapp.com/checkfav")
        console.log(checkfav.data.id);
     let add = await axios.get(
        `https://mern-spark-project.herokuapp.com/getfav/${checkfav.data.id}`);
        console.log(add.data.data.user.favdata);
        this.setState({
            data:add.data.data.user.favdata,
            id:checkfav.data.id
        })
        // window.location.reload();
    }
    async componentDidMount() {
this.favourite()
    }
    delfav = async (title)=>{
let data={
    title:title
}
        let del = await axios.path(
            `http://localhost:8070/delfav/${this.state.id}`,data)
            console.log(del)
    }
    
    render() {
        return (
            <div>
                {this.state.data.map(item=>{
                    return <div>
                    <h1>{item.title}</h1>
                    <button type='button' onClick={()=>this.delfav(item.title)}>remove</button>
                    </div>
                })}
            </div>
        )
    }
}

export default Favourite