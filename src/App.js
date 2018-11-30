import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './component/header'

import AuthService from './services'
import Register from './pages/Register'
import NewApartment from './pages/NewApartment'
import Apartments from './pages/Apartments'
import ShowApartment from './pages/ShowApartment'
import Login from './pages/Login'
import EditApartment from './pages/EditApartment'
import UserApartments from './pages/UserApartments'

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
            <Route exact path="/user/apartments" component={UserApartments}/>
            <Route exact path="/apartments/new" component={NewApartment}/>
            <Route exact path="/apartments/edit/:id" component={EditApartment}/>
            <Route exact path="/apartments/:id" component={ShowApartment}/>
            <Route path="/apartments" component={Apartments} />
						<Route path="/register" component={Register} />
            <Route path="/" component={Apartments} />
					</Switch>
					// if not logged in (ie Guest User)
					: <Switch>
						<Route path="/login" render={(props) => <Login checkLogin={this.checkLoginStatus}/>} />
            <Redirect exact from="/apartments/new" to="/register" />
            <Redirect exact from="/apartments/edit/:id" to="/apartments"/>
            <Route exact path="/apartments/:id" component={ShowApartment}/>
						<Route path="/apartments" component={Apartments} />
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
