import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
  return (
    <div className='Footer'>
        <div className='BlockFooter'>
        <div>
          <a href='' target='_blank'>
          <CiLinkedin size='30px' color='#333'/>
          </a>
        </div>
        <div>
              <a href="" target='_blank'>
                Facebook
                </a></div>
        </div>
        <div className='BlockFooter '>
            <p>Todos los derechos reseravados Mateo Baldoni</p>
        </div>
        <div className='BlockFooter'>
        <Link className='Link' to='Init' smooth={true} duration={500}>Inicio</Link>
        <Link className='Link' to='Services' smooth={true} duration={500}>Servicios</Link>
        <Link className='Link' to='About' smooth={true} duration={500}>Sobre Nosotros</Link>
        <Link className='Link' to='Contact' smooth={true} duration={500}>Contacto</Link>
        </div>
    </div>
  )
}

export default Footer