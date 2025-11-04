import React from 'react'
import Card from './components/Card'
import Navbar from './components/nav'
import './App.css'
function App() {
  return (
    <div id='card'>
      <Card name='mohan' edu ='10 class'/>
      <br />
      <Card name='sohan' edu ='12 class'/>
      <br />
      <Card name='rupak' edu ='b.tech'/>

    </div>
  )
}

export default App