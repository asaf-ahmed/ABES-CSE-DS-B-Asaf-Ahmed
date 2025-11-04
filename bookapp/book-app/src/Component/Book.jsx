import React from 'react'
import './book.css'
function Book(props) {
  return (
    <div id="book">
        <img src={props.image} alt="" height={100} width={100} />
        <h1>Title:{props.title}</h1>
        <h1>Price:{props.price}</h1>
    </div>
  )
}

export default Book