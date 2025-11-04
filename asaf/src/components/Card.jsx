import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div id ="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUt1tJ9YsP-nRMibsvcCLFCoTG6XdbmCoFQ&s" alt="" height={100} width = {100} />
        <h1>{props.name}</h1>
        <h1>{props.edu}</h1>
    </div>
  )
}

export default Card