// Componente encargado del header con su navbar.

import PathComparator from './PathComparator'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Header = (props)=>{
  const[isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  const dropdown =()=> {
    /*Cuando se hace click en el botón, muestra el submenu*/
    //Añade una clase al elemento que tenga el id myDropdown
    document.getElementById("dropdown").classList.toggle('show');
    document.getElementById("dropp").classList.toggle('prueba')
  }

  
  return (
    <>
    {/* LLAMA AL COMPARADOR DE RUTA */}
    <PathComparator/>
    <div id="header" className="principalHeader">
      <Navbar color="faded" light expand="md">
        <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink className="active" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="active" to="/cities">Cities</NavLink>
              </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        <div>
          <img id="logo" src="../assets/logo.png" alt="logo" style={{visibility: 'hidden', width: '4vw', marginLeft: '-5vw', minWidth: '50px'}}/>
        </div>
        <div className="dropDown" id="dropp" onClick={()=> dropdown()}>
          <FontAwesomeIcon className="chevronDown" style={{color: 'white'}} icon={faChevronDown}/>
          <img className="imgLogIn" id="imgLogin" style={{width: '5vw', minWidth: '60px'}} src="../assets/login1.png" alt="Login img" />
          <div id="dropdown" className="dropdown">
            <NavLink to="/signUp" className="signupBtn">Sign Up</NavLink>
            <NavLink to="/logIn" className="loginBtn">Log In</NavLink>
          </div>
        </div>
    </div>
    </>
  )
}
export default Header