import React from 'react'
import './NavBar.css'
import { Link } from 'react-scroll'
import Logo from '../../assets/MB.svg'

const NavBar = () => {


  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light" id='Inicio'>
      <img src={Logo} className='MB' alt="" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            
              <div className="navbar-nav">
                <Link className='Link' to='Init' smooth={true} duration={500}>Inicio</Link>
                <Link className='Link' to='About' smooth={true} duration={500}>Nosotros</Link>
                <Link className='Link' to='Services' smooth={true} duration={500}>Servicios</Link>
                <Link className='Link' to='Contact' smooth={true} duration={500}>Contacto</Link>
              </div>
            </div>
          </nav>
    </>
  )
}

export default NavBar