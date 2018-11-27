import React, { Component } from 'react'
import {Form, FormGroup, FormControl, Buttom} from 'react-bootstrap'
import AuthService from '../services'

class Header extends Component {
  constructor(props) {
    super(props)

    this.auth = new AuthService()
  }
    render() {
      return(
        <header>
          <button onClick={this.handleClick}>Logout</button>
          
        </header>
      )
    }

    handleClick = (e) => {
      e.preventDefault();
      this.auth.logout();
    }
}

export default Header
