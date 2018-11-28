import React, { Component } from 'react'
import {Button, Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import AuthService from '../services'

class Header extends Component {
  constructor(props) {
    super(props)

    this.auth = new AuthService()
  }
    render() {
      return(

        <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">That Damn Apartment</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      <button onClick={this.handleClick}>Logout</button>
    </NavItem>
  </Nav>
</Navbar>

      )
    }

    handleClick = (e) => {
      e.preventDefault();
      this.auth.logout();
    }
}

export default Header
