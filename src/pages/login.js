import React, { Component } from 'react'
import AuthService from '../services'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService()
    this.state = {
      loginSuccess: false,
      form: {
        user: {
          email: "",
          password: "",
        }
      }
    }
  }
  render() {
    let { email, password } = this.state.form.user
      return (
          <div>
            <div className="loginMain" >
              <form onSubmit={this.onSubmit}>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.onChange}
              />

              <input
                type="password"
                name="password"
                value={password}
                onChange={this.onChange}
              />
              <button onSubmit={this.onSubmit}>Login</button>
              </form>
              {this.state.loginSuccess && <Redirect to="/" />}
            </div>
          </div>
      )
  }

  onChange = (e) => {
    let { form } = this.state

    form.user[e.target.name] = e.target.value

    this.setState({ form })
  }

  onSubmit = (e) => {
    e.preventDefault()

    this.auth.login(this.state.form)
    .then(json => {
      console.log("Got to second then:", json)
      if(json.errors) {
        this.setState({
          errors: json.errors
        })
      }
      this.setState({
        loginSuccess: true
      })
    })
  }
}

export default Login
