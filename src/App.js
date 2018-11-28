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
	render() {
		// creates new instance of AuthService class
		let auth = new AuthService()
		return (
			<div>
				<Header />
				<Router>
					{(auth.loggedIn())
					// if logged in
					? <Switch>
						<Route path="/login" component={Login} />
            <Route path="/apartments" component={Apartments} />
						<Route path="/newapartment" component={NewApartment}/>
            <Route path="/showapartment" component={ShowApartment}/>
						<Route path="/register" component={Register} />
					</Switch>
					// if not logged in (ie Guest User)
					: <Switch>
						<Route path="/login" component={Login} />
						<Route path="/apartments" component={Apartments} />
						<Redirect from="/newapartment" to="/register" />
            <Route path="/showapartment" component={ShowApartment}/>
						<Route path="/register" component={Register} />
					</Switch>}
				</Router>
			</div>
		);
	}
}

export default App;
