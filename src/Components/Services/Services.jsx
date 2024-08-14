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
      html:  description.trim(),
      icon: 'info',
      confirmButtonText: "OK",
    })
  }

  return (
    <div className='ServicesContainer col-12'>
      <div className='Services col-9'>
      <h1>Servicios</h1>
      <div className='ContainerButton'>
        <button className='ButtonService' onClick={() => handleButtonClick('Monotributistas',
              `
              Asesoramiento, <br/> 
              Alta/Baja,<br/>
              Recategorización,<br/>
              Factura Electrónica,<br/>
              Planes de Pagos,<br/>
              Ingresos Brutos.
              `)}><TiBusinessCard size="4rem"/> <h3>Monotributistas</h3></button>
        <button className='ButtonService'  onClick={() => handleButtonClick('Responsables inscriptos',
          `Alta/baja,<br/>
          Autónomos,<br/>
          Facturación,<br/>
          Liquidación DDJJ mensuales (IVA, Ingresos Brutos),<br/>
          Liquidaciones DDJJ anuales (Impto. Ganancias, Ingresos Brutos),<br/>
          Regímenes de información.<br/>
          `)}><ImUserTie size="4rem" /> <h3>Responsable inscripto</h3></button>
        <button className='ButtonService'  onClick={() => handleButtonClick('Sociedades',
          `Inscripción,<br/>
          Liquidación de DDJJ (mensuales y anuales),<br/>
          Regímenes de información,<br/>
          Armado de balances,<br/>
          Registraciones contables.
          `)}><IoBusinessSharp size="4rem" /> <h3>Sociedades</h3></button>
        <button className='ButtonService'  onClick={() => handleButtonClick('Otros Servicios',
          `Asesoramiento integral al momento de iniciar tu emprendimiento,<br/>
          Planes de pago,<br/>
          Certificaciones de ingresos o de origen de fondos,<br/>
          Fiscalizaciones,<br/>
          Empleados de casas particulares,<br/>
          Siradig F572,<br/>
          DDJJ Ganancias 4° categoría,<br/>
          DDJJ Bienes Personales.
          `)}><MdBusinessCenter size="4rem" /> <h3>Otros servicios</h3></button>
        </div>
      </div>
    </div>
  )
}

export default Services
