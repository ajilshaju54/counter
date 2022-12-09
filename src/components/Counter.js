import { useState } from "react";


import React from 'react'
import './app.css'

function Counter() {
    const[counter,setCounter]=useState(0);

   const increment=()=>{
        setCounter(counter+1)
    };

   const decrement=()=>{
        if(counter!==0){
        setCounter(counter-1)
   }};

    const zero=()=>{
        setCounter(0)
    }

  return (
    <div className="center">
       <h4>COUNTER</h4>
         <h2>The Number Is : {counter}</h2>
         <button className="firstButton" onClick={increment}>increment</button>
         <button className="secondButton" onClick={decrement}>decrement</button>
         <button className="thirdButton" onClick={zero}>zero</button>
    </div>
  )
}

export default Counter
