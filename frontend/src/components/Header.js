// Componente encargado del header con su navbar.


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
    <header>
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
        <img className="imgLogIn" style={{width: '5vw', minWidth: '60px'}} src="./assets/login.png" alt="Login img"></img>

    </header>
  )
}
export default Header