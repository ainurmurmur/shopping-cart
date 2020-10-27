import React, {useState} from 'react';

let InputMinMax = (props) => {

   
    let [current, setCurrent] = useState(props.min)
    let [inputValue, setInputValue] = useState(props.min)
   

    let changeCurrentToMin =() => {
        if(current>props.min){
        setCurrent(current-1)
    }
    }
    let changeCurrentToMax=()=> {
      if(current<props.max){
        setCurrent(current+1)
      }
    }

    let currentChanged=(e)=>{
        setInputValue(e);
        setCurrent(inputValue)
    }
   let applyValue=()=>{
     const {min, max} = props;
     let current = parseInt(inputValue);
     if(current <= min || isNaN(current)) current = min
     if(current >= max ) current = max
     setCurrent(isNaN(current)? props.min: current)
     setInputValue(current)
   }

    return <>
    {current}<br/>
    {inputValue}<br/>
    <button onClick={changeCurrentToMin}>-</button>
    <input value={inputValue} type='text' onChange={(e)=>currentChanged(e.target.value)} 
    onBlur={()=>applyValue()}
    />
    <button onClick={changeCurrentToMax}>+</button>
    </>
}

export default InputMinMax;

