import React from 'react'
import React,{useState} from 'react'

function Count1() {
    const [count,setcount]=useState(0);
    function increment(){
        setcount(count+1);
    }
    function decrement(){
        setcount(count-1);
    }
  return (
    <div>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Count1