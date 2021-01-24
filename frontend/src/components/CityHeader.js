import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { NavLink } from "react-router-dom";

const CityHeader = ({itineraries}) => {
  const[isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const {cityPic, cityName} = itineraries
  
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
              </Nav>
            </Collapse>
        </Navbar>
        <img className="imgLogIn" style={{width: '5vw', minWidth: '60px'}} src="../assets/login1.png" alt="Login img"></img>
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