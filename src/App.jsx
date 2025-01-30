import { useState } from 'react'

import './App.css'
import './Navbar.css'
import Navbar from './Navbar'
import FrontPage from './FrontPage.jsx'
import Footer from './Footer'
import Timer from './Timer'


function App() {
  return (
 <>
<div className='App'>
      <Navbar/>
      <FrontPage/>
      <Timer/>
      <Footer/>
</div> 
</>
   
  )
}



export default App
