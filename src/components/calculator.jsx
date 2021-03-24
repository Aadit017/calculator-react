import React, { Component } from "react"
import "./calculator.style.scss"
import Button from "./button"
class Calculator extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
}
render(){
    return (
        <div>
            <Button />
        </div>
    )
}
}
export default Calculator;