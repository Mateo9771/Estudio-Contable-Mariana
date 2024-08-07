import React from 'react'
import './Services.css'
import { ImUserTie } from "react-icons/im";
import { TiBusinessCard } from "react-icons/ti";
import { IoBusinessSharp } from "react-icons/io5";
import { MdBusinessCenter } from "react-icons/md";
import Swal from 'sweetalert2'

const Services = () => {

  const handleButtonClick = (title, description) => {
    
    Swal.fire({
      title: title,
      text:  description,
      icon: 'info',
      confirmButtonText: "OK",
    })
  }

  return (
    <div className='ServicesContainer col-12'>
      <div className='Services col-9'>
      <h1>Servicios</h1>
      <div className='ContainerButton'>
        <button className='ButtonService' onClick={() => handleButtonClick(  'Monotributistas',
              `
              Asesoramiento,
              Alta/Baja,
              Recategorización,
              Factura Electrónica,
              Planes de Pagos,
              Ingresos Brutos.
              `)}><TiBusinessCard size="4rem"/> <h3>Monotributistas</h3></button>
        <button className='ButtonService'  onClick={() => handleButtonClick('Responsables inscriptos',
          `Alta/baja,
          Autónomos,
          Facturación,
          Liquidación DDJJ mensuales (IVA, Ingresos Brutos),
          Liquidaciones DDJJ anuales (Impto. Ganancias, Ingresos Brutos),
          Regímenes de información.
          `)}><ImUserTie size="4rem" /> <h3>Responsable inscripto</h3></button>
        <button className='ButtonService'  onClick={() => handleButtonClick('Sociedades',
          `Inscripción,
          Liquidación de DDJJ (mensuales y anuales),
          Regímenes de información,
          Armado de balances,
          Registraciones contables.
          `)}><IoBusinessSharp size="4rem" /> <h3>Sociedades</h3></button>
        <button className='ButtonService'  onClick={() => handleButtonClick('Otros Servicios',
          `Asesoramiento integral al momento de iniciar tu emprendimiento,
          Planes de pago,
          Certificaciones de ingresos o de origen de fondos,
          Fiscalizaciones,
          Empleados de casas particulares,
          Siradig F572,
          DDJJ Ganancias 4° categoría,
          DDJJ Bienes Personales.
          `)}><MdBusinessCenter size="4rem" /> <h3>Otros servicios</h3></button>
        </div>
      </div>
    </div>
  )
}

export default Services
