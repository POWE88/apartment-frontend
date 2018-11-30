import React, { Component } from 'react'
import { Panel, Button } from 'react-bootstrap'
import { getUserApartments } from '../api'
import AuthService from '../services'

class UserApartment extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService()
    this.state = {
      apartment: undefined
    }
  }
  render() {
    console.log(this.props)

    if(this.state.apartment != undefined){
      return (
        <div className="pageContent">
          <Panel bsStyle="primary" className="Panel">
            <Panel.Heading>
              <Panel.Title className="header" componentClass="h3">{this.state.apartment.street}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
               City: {this.state.apartment[0].city}
              <br/>
              State: {this.state.apartment.state}
              <br/>
              Zipcode: {this.state.apartment.zipcode}
              <br/>
              Country: {this.state.apartment.country}
              <br/>
              Manager Name: {this.state.apartment.managername}
              <br/>
              Managers Phone: {this.state.apartment.managerphone}
              <br/>
              Managers Hours: {this.state.apartment.managerhours}
            </Panel.Body>
          </Panel>

          <form action={`/apartments/edit/${this.props.match.params.id}`}>
            <input type="submit" value="Edit Apartment" />
          </form>
          <form action={"/apartments"}>
            <input type="submit" value="delete Apartment" />
          </form>
        </div>
      )
    }else {
      return(
        <div>
        Loading...
        </div>
      )
    }
  }

  componentDidMount(){
    const id = this.auth.getUserId()
    console.log(id)
    getUserApartments(id)
    .then((apartment)=> {
      console.log(apartment);
      this.setState({apartment})
    }
  )
  }
}

export default UserApartment
