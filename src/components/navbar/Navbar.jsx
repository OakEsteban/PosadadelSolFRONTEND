import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import '../../Styles/navbar/Navbar.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


class Navbar extends Component {


  //Formulas para el cambio de estado, a la hora de que la barra al ser clickeada cambie de icono. 

  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className='NavbarItems'>
        {/* Implementación de logo*/}
        <Link to="/Inicio" className='logo-114'>
          <img src={require('../../Images/logoPosada.png')} alt="" />
        </Link>
        <div className='menu-icon' onClick={this.handleClick}>
          {/* Iconos implementados para cuando sea responsive, con  fontawesome*/}

          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {/* Funcion, en donde se mapean los valores del archivo MenuItems, recorriendo cada uno y asigandolos a la barra de navegación */}
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            )
          })}

        </ul>
        {/* Implementación del Boton para iniciar sesion el cual te redirige a la pagina de inico de sesion/registro */}

        <ul className='button-114'>
          <Link to="/Inicia-Sesion" className="nav-link">
            <Button className='btn-111'> Entra <i className="fa-solid fa-right-to-bracket"></i></Button>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
