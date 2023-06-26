import React, { useState, useEffect, useRef } from 'react';
import { MenuItems } from './MenuItems';
import '../../Styles/navbar/Navbar.css';
import { Button } from './Button';
import { Link, NavLink } from 'react-router-dom';
import { getFile } from '../../FirebaseConfig/firebase';
import defaultUser from "../../Images/user.png";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    useEffect(() => {
        const imagePath = 'usersIcon/1.jpg';
  
        getFile(imagePath)
        .then((url) => {
            if (url) {
            setImageUrl(url);
            } else {
            setImageUrl(defaultUser);
            }
        })
        .catch((error) => {
            setImageUrl(defaultUser);
        });
    }, []);

  const toggleMenu = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const handleClick = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  return (
    <nav className='NavbarItems'>
      <Link to="/Inicio" className='logo-114'>
        <img src={require('../../Images/logoPosada.png')} alt="" />
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
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
      <ul className='button-114'>
        <Link to="/Inicia-Sesion" className="nav-link">
          <Button className='btn-111'> Entra <i className="fa-solid fa-right-to-bracket"></i></Button>
        </Link>
      </ul>

      {/* Dropdow UserMenu*/}
      <img src={imageUrl} className='user-pic' onClick={toggleMenu} />

      <div ref={menuRef} className={`sub-menu-wrap ${isOpen ? 'open-menu' : ''}`} id="subMenu">
        <div className='sub-menu'>
          <div className="user-info">
            <img src={imageUrl} className='user-pic' />
            <h2>Usuario</h2>
          </div>
          <hr />

          <Link to="" className='sub-menu-link'>
            <p> <i className="fa-solid fa-user"></i>    Mi cuenta</p>
            <span><i className="fa-solid fa-angle-right"></i></span>
          </Link>
          <Link to="" className='sub-menu-link'>
            <p> <i className="fa-solid fa-cart-shopping"></i> Mis reservaciones</p>
            <span><i className="fa-solid fa-angle-right"></i></span>
          </Link>
          <Link to="" className='sub-menu-link'>
            <p> <i className="fa-solid fa-credit-card"></i> Método de pago</p>
            <span><i className="fa-solid fa-angle-right"></i></span>
          </Link>
          <Link to="/Configuracion" className='sub-menu-link'>
            <p> <i className="fa-solid fa-gear"></i> Configuraciones</p>
            <span><i className="fa-solid fa-angle-right"></i></span>
          </Link>

          <hr />
          <Link to="" className='sub-menu-link'>
            <p> <i className="fa-solid fa-life-ring"></i> Soporte</p>
            <span><i className="fa-solid fa-angle-right"></i></span>
          </Link>
          <Link to="" className='sub-menu-link'>
            <p> <i className="fa-solid fa-right-from-bracket"></i> Salir</p>
            <span><i className="fa-solid fa-angle-right"></i></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
