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
              <a href="/">That Damn Apartment</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/">
              Home
            </NavItem>
            <NavItem eventKey={2} href="/register">
              Register
            </NavItem>
            <NavItem eventKey={3} href="/apartments/new">
              Add Apartment
            </NavItem>
            {!this.auth.loggedIn() && <NavItem eventKey={4} href="/login">Login</NavItem>}
            {this.auth.loggedIn() && <NavItem onClick={this.handleClick} eventKey={5} href="/login">
              Logout
            </NavItem>}

          </Nav>
        </Navbar>

      )
    }


    handleClick = () => {
      this.auth.logout();
      this.props.logout();

    }
}

export default Header
