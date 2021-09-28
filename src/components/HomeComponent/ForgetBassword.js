import React, { Component } from 'react'

export class ForgetBassword extends Component {
    constructor(props){
        super(props)
        this.state={
            forgetPassword:''
        }
    }


    handleLocation = (e) => {
        this.setState({
          forgetPassword: e.target.value,
        });
      };
      handleSubmit = async (e) => {
        e.preventDefault();
      }

    render() {
        return (
            <div>
                <div>
                <form onSubmit={this.handleSubmit}>
                    <input  type="text" 
                            placeholder="Please enter a the url..."
                            onChange={this.handleLocation}
                            />
                    <input type="submit" value="forget password"/>
                </form>
                </div>
            </div>
        )
    }
}

export default ForgetBassword
