import React from 'react'
import '../css/prueba.css'
import logomenu from '../images/hamburgmenu.svg' 



const Prueba = () => {

    return (
        
        <div className="contenedorMenu">
            <div className="imgLogo">
                <p>LOGO</p>
            </div>

            <div className="logoMenu" id="menu">
                <img src={logomenu} alt="" /> 
            </div>
            
            <nav className="navMenu">
                <ul className="ulMenu" id="menu-navvv">
                    <li className="liMenu"><a href="#">Inicio</a></li>
                    <li className="liMenu"><a href="#">Acerca de</a></li>
                    <li className="liMenu"><a href="#">Contacto</a></li>
                    <li className="liMenu"><a href="#">Nosotros</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Prueba
