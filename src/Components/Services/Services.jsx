import React from 'react'
import './Services.css'
import { ImUserTie } from "react-icons/im";

const Services = () => {
  return (
    <div className='ServicesContainer col-12'>
      <div className='Services col-9'>
      <h1>Servicios</h1>
      <div className='ContainerButton'>
        <button className='ButtonService'><ImUserTie size="4rem" /> <h3>Monotributista</h3></button>
        <button className='ButtonService'><ImUserTie size="4rem" /> <h3>Responsable inscripto</h3></button>
        <button className='ButtonService'><ImUserTie size="4rem" /> <h3>Sociedades</h3></button>
        <button className='ButtonService'><ImUserTie size="4rem" /> <h3>Otros servicios</h3></button>
        </div>
      </div>
    </div>
  )
}

export default Services
