import React from 'react'
import Card from './components/Card'
import Navbar from './components/nav'

function App() {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Welcome</h1>
      <Card />
      <br />
      <Card />
      <br />
      <Card />
      
    </div>
  )
}

export default App