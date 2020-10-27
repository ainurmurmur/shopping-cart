import React, {useState} from 'react';

let MinMax = (props) => {

    let [current, setCurrent] = useState(props.min)

    let changeCurrentToMin =() => {
        if(current>1){
        setCurrent(current-1)
    }
    }
    let changeCurrentToMax=()=> {
      if(current<10){
        setCurrent(current+1)
      }
    }
    return <>
    <button onClick={changeCurrentToMin}>-</button>
    <span>{current}</span>
    <button onClick={changeCurrentToMax}>+</button>
    </>
}

export default MinMax;