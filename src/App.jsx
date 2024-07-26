import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import LogoWhatt from './Components/LogoWhatt/LogoWhatt'

function App() {

  return (
    <div>
      <NavBar/>
      <About/>
      <LogoWhatt/>
      <Footer/>
    </div>
  )
}

export default App
