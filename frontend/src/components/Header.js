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

const Header = (props)=>{
  const[isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
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
        <img className="imgLogIn" id="imgLogin" style={{width: '5vw', minWidth: '60px'}} src="../assets/login1.png" alt="Login img" />
    </div>
    </>
  )
}
export default Header