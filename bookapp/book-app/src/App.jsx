import React from 'react'
import Book from './Component/Book'
import './App.css'
function App() {
  return (
    <div id='bookbox'>
      <Book image="https://shop.evergreenpublications.in/cdn/shop/files/1_ba399139-5941-48b4-a173-13ea35095519.jpg?v=1718955785" title="Maths" price={250} />
      <br />
      <Book image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRj_oCHYrVVnRb-9n1eOPnC8oWI4oHDCK9iQ&s" title="Science" price={300} />
      <br />
      <Book image="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780764143168/essentials-of-english-9780764143168_lg.jpg" title="English" price={200} />
    </div>
     
  )
}

export default App