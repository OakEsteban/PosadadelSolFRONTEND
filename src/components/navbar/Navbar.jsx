import React, { Component, useState } from 'react';
import { MenuItems } from './MenuItems';
import '../../Styles/navbar/Navbar.css';
import { Button } from './Button';
import { Link, NavLink } from 'react-router-dom';
import { isLoggedIn, logout } from '../../hooks/loginToken';


class Navbar extends Component {

  state = { clicked: false };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.menuRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.menuRef && this.menuRef.current && !this.menuRef.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };


  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleLogout = () => {
    logout();
    // Realiza cualquier otra lógica necesaria después de cerrar la sesión
    window.location.reload(); // Recargar la página automáticamente
    window.location.assign('/Inicia-Sesion'); // Redirigir a la página /Inicia-Sesion
  };


  render() {

    const { isOpen } = this.state;
    const tokenExists = isLoggedIn();


    return (
      <nav className='NavbarItems'>
        <Link to="/Inicio" className='logo-114'>
          <img src={require('../../Images/logoPosada.png')} alt="" />
        </Link>
        <div className='menu-icon' onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                className={item.cName}
                to={item.url}
                activeClassName='nav-link-active'
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
        {!tokenExists && (
          <ul className='button-114'>
            <Link to="/Inicia-Sesion" className="nav-link">
              <Button className='btn-111'> Entra <i className="fa-solid fa-right-to-bracket"></i></Button>
            </Link>
          </ul>
        )}

        {tokenExists && (
          <>
            <img src={require('../../Images/user.png')} className='user-pic' onClick={this.toggleMenu} />

            <div ref={this.menuRef} className={`sub-menu-wrap ${isOpen ? 'open-menu' : ''}`} id="subMenu">
              <div className='sub-menu'>
                <div className="user-info">
                  <img src={require('../../Images/user.png')} className='user-pic' />
                  <h2>Usuario</h2>
                </div>
                <hr />

                <Link to="" className='sub-menu-link'>
                  <p> <i class="fa-solid fa-user" ></i>    Mi cuenta</p>
                  <span><i class="fa-solid fa-angle-right"></i></span>
                </Link>
                <Link to="" className='sub-menu-link'>
                  <p> <i class="fa-solid fa-cart-shopping"></i> Mis reservaciones</p>
                  <span><i class="fa-solid fa-angle-right"></i></span>
                </Link>
                <Link to="" className='sub-menu-link'>
                  <p> <i class="fa-solid fa-credit-card"></i> Método de pago</p>
                  <span><i class="fa-solid fa-angle-right"></i></span>
                </Link>
                <hr />
                <Link to="" className='sub-menu-link'>
                  <p> <i class="fa-solid fa-life-ring"></i> Soporte</p>
                  <span><i class="fa-solid fa-angle-right"></i></span>
                </Link>
                <Link to="" className='sub-menu-link' onClick={this.handleLogout}>
                  <p> <i className="fa-solid fa-right-from-bracket"></i> Salir</p>
                  <span><i className="fa-solid fa-angle-right"></i></span>
                </Link>


              </div>

            </div>
          </>
        )}

      </nav>
    );
  }
}

export default Navbar;

