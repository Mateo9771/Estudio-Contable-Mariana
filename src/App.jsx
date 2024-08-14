import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import LogoWhatt from './Components/LogoWhatt/LogoWhatt'
import FrontPage from './Components/FrontPage/FrontPage'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'


function App() {

  return (
    <div>
      <NavBar/>
      <FrontPage/>
      <About/>
      <Services/>
      <Contact/>
      <LogoWhatt/>
      <Footer/>
    </div>
  )
}

export default App
