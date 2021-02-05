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
import { connect } from 'react-redux';
import userActions from '../redux/actions/userActions';

const Header = (props)=>{
  const[isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  if(props.userLogged){
    var links = 
    <>
      <NavItem>
        <NavLink to="/logIn" className="signupBtn" onClick={()=> props.logOut()}>Log Out</NavLink>
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
              {links}
            </Nav>
            </Collapse>
        </Navbar>
        <div>
          <img id="logo" src="../assets/logo.png" alt="logo" style={{visibility: 'hidden', width: '4vw', marginLeft: '-5vw', minWidth: '50px'}}/>
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          {props.userLogged && <h2 style={{color: 'white'}}>Hi! Welcome, {props.userLogged.response.name}</h2>}
          <div className="imgLogIn" id="imgLogin" style={{backgroundImage: `url(${props.userLogged ? props.userLogged.response.pic : '../assets/login1.png'})`}} alt="Login img" />
        </div>
    </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    userLogged: state.userR.userLogged
  }
}

const mapDispatchToProps = {
  logOut: userActions.logOut
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)