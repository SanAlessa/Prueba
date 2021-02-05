// Componente encargado del Header de cada pagina correspondiente a cada ciudad.

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from "react-router-dom";

const CityHeader = ({city, props}) => {
  const[isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const {cityPic, cityName} = city
  const {logOut} = props

  if(props.userLogged){
    var links = 
    <>
      <NavItem>
        <NavLink to="/login" className="signupBtn" onClick={()=> logOut()}>Log Out</NavLink>
      </NavItem>
    </>
  }else {
    links = 
    <>
      <NavItem>
        <NavLink to="/signUp" className="signupBtn">Sign Up</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/logIn" className="loginBtn">Log In</NavLink>
      </NavItem>
    </>
  }
  
  return (
    <>
    <div className="hero-image-city" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${cityPic}")`}}>
      <div className="cityHeader">
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
                {links}
              </Nav>
            </Collapse>
        </Navbar>
        <div style={{display: 'flex', alignItems: 'center'}}>
          {props.userLogged && <h2 style={{color: 'white'}}>Hi! Welcome, {props.userLogged.response.name}</h2>}
          <div className="imgLogIn" id="imgLogin" style={{backgroundImage: `url(${props.userLogged ? props.userLogged.response.pic : '../assets/login1.png'})`}} alt="Login img" />
        </div>
      </div>
      <div className="hero-text-city" style={{color: 'white'}}>
        <h1>{cityName}</h1>
      </div>
    </div>
    <div className="borderPic"></div>
    </>
  )
}





export default CityHeader