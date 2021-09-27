import React, { Component } from 'react'
import SignupForm from './SignupForm';
import axios from 'axios';

export class Signup extends Component {

    handleSubmit = async (values) => {
        try{
        const Userdata = {
            name: values.name,
            email: values.email,
            password: values.password,
            confirmpassword: values.confirmpassword,
          };   
          console.log(Userdata);
          let getuser = await axios.get("http://localhost:8050/get-user")
          console.log(getuser.data);
          let newUser = await axios.post(`http://localhost:8050/create-user`, Userdata)
        console.log(newUser.data);
        
        }catch(err){
            console.error(err)
        }
        
        
        }
    render() {
        return (
            <div>
                <div>
                <SignupForm handleSubmit= {this.handleSubmit}/>
                </div>
            </div>
        )
    }
}

export default Signup
