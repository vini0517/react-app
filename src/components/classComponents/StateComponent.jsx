import React from "react";
class StateComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"KEC",
            course:"MERN"
        }

    }
    render(){
        return(
            <div>
                <h1>This is state component.</h1>
                <h2>Hello, {this.state.name}<br></br>This is {this.state.course} class</h2>
            </div>
        )
    }
}
export default StateComponent;
    
