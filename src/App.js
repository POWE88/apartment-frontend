import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './component/header'

import AuthService from './services'
import Register from './pages/Register'
import NewApartment from './pages/NewApartment'
import Apartments from './pages/Apartments'
import ShowApartment from './pages/ShowApartment'
import Login from './pages/Login'

class App extends Component {
  constructor(props){
    super(props)

    this.auth = new AuthService()
    this.state = {
      loggedin: false
    }
  }
	render() {
		// creates new instance of AuthService class

		return (
			<div>
				<Header logout={this.checkLoginStatus}/>
				<Router>
					{(this.auth.loggedIn())


					// if logged in
					? <Switch>
						<Route path="/login" render={(props) => <Login checkLogin={this.checkLoginStatus}/>} />
            <Route path="/apartments/new" component={NewApartment}/>
            <Route path="/apartments" component={Apartments} />
            <Route path="/showapartment" component={ShowApartment}/>
						<Route path="/register" component={Register} />
            <Route path="/" component={Apartments} />
					</Switch>
					// if not logged in (ie Guest User)
					: <Switch>
						<Route path="/login" render={(props) => <Login checkLogin={this.checkLoginStatus}/>} />
            <Redirect from="/apartments/new" to="/register" />
						<Route path="/apartments" component={Apartments} />
            <Route path="/showapartment" component={ShowApartment}/>
						<Route path="/register" component={Register} />
            <Route path="/" component={Apartments} />
					</Switch>}
				</Router>
			</div>
		);
	}

  checkLoginStatus = () => {
    this.setState({
      loggedin: this.auth.loggedIn()
    })
  }


}

export default App;
