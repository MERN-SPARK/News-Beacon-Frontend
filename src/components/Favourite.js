import React, { Component } from 'react'
import axios from 'axios'
export class Favourite extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    favourite = async () => {
       
        let checkfav= await axios.get("http://localhost:8070/checkfav")
        console.log(checkfav.data.id);
     let add = await axios.get(
        `http://localhost:8070/getfav/${checkfav.data.id}`);
        console.log(add.data.data.user.favdata);
        this.setState({
            data:add.data.data.user.favdata
        })
        // window.location.reload();
    }
    async componentDidMount() {
this.favourite()
    }
    render() {
        return (
            <div>
                {this.state.data.map(item=>{
                    return <h1>{item.title}</h1>
                })}
            </div>
        )
    }
}

export default Favourite
