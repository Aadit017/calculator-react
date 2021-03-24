import React, { Component } from "react"
import "./calculator.style.scss"

class Calculator extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
        this.state={
        calculation: " ",
        valu:"_"
        }
}
handleChange=event=>{
    const {name,value}=event.target;
    this.setState({[name]:value})
    
    console.log(this.state.valu);
}
handleSubmit=event=>{
    console.log(this.state.calculation);
    event.preventDefault();
}
render(){
    return(
        <div className="container">
        <h1>{this.state.valu}</h1>
        <form onClick={this.handlesubmit}>
            <input type="text"
                name="emptyFeild"
                value={this.state.calculation}
                onChange={this.handleChange}
            />
        </form>
        </div>
        
    )
}
}
export default Calculator