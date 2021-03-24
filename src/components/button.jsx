import React ,{useState} from 'react'
import "./button.style.scss"

export default function Button() {
    const buttonPressed=(number)=>{
            console.log(number);
            setResult(result+number)
    }
    const equal =()=>{
        // eslint-disable-next-line no-eval
        setResult(eval(result));
    }
    const clear=()=>{
        setResult(" ")
    }
    const [result ,setResult ]=useState("")
    return (
        <div>
            <h1>{result}</h1>
            <button onClick={()=>buttonPressed("1")}> 1 </button>
            <button onClick={()=>buttonPressed("2")}> 2 </button>
            <button onClick={()=>buttonPressed("3")}> 3 </button>
            <button onClick={()=>buttonPressed("4")}> 4 </button>
            <button onClick={()=>buttonPressed("5")}> 5 </button>
            <button onClick={()=>buttonPressed("6")}> 6 </button>
            <button onClick={()=>buttonPressed("7")}> 7 </button>
            <button onClick={()=>buttonPressed("8")}> 8 </button>
            <button onClick={()=>buttonPressed("9")}> 9 </button>
            <button onClick={()=>buttonPressed("+")}> + </button>
            <button onClick={()=>buttonPressed("-")}> - </button>
            <button onClick={()=>buttonPressed("/")}> / </button>
            <button onClick={()=>buttonPressed("*")}> * </button>
            <button onClick={()=>equal("=")}> = </button>
            <button onClick={()=>clear()}> CLEAR </button>
        </div>
    )
}
// the main reason we have h1 here is because react has one way data binding 