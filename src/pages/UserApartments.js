import React, { Component } from 'react'
import { Panel, Button } from 'react-bootstrap'
import { getUserApartments } from '../api'
import AuthService from '../services'
import { Grid, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'



class UserApartment extends Component {
  constructor(props){
    super(props)
    this.auth = new AuthService()
    this.state = {
      apartments: undefined
    }
  }
  render() {
    console.log(this.props)

    if(this.state.apartments != undefined){
      return (
        <Grid>
         <Row>
           <Col xs={12}>
               <ListGroup>
               {console.log(this.props)}
               {this.state.apartments.map((apartment, index) => {
                 return (
                   <ListGroupItem
                     key={apartment.id}
                     header={
                       <Link to={`/apartments/${apartment.id}`}>
                       <h4>
                         <span className='apartment-street'>
                           {apartment.street}
                         </span> - <small className='apartment-city'> {apartment.city} </small>
                         <small className='apartment-city'> {apartment.state} </small>
                         <small className='apartment-city'> {apartment.zipcode} </small>
                         <small className='apartment-city'> {apartment.country} </small>
                       </h4>
                       </Link>
                     }>

                   <span className='apartment-city'>
                     Manger: {apartment.managername}
                   </span>
                   <br/>
                   <span className='apartment-city'>
                     Phone: {apartment.managerphone}
                   </span>
                   <br/>
                   <span className='apartment-city'>
                     Hours: {apartment.managerhours}
                   </span>
                   <form action={`/apartments/edit/${apartment.id}`}>
                        <input type="submit" value="Edit Apartment" />
                      </form>
                      <form action={"/apartments"}>
                        <input type="submit" value="Delete Apartment" />
                      </form>

                 </ListGroupItem>
               )
             })}
           </ListGroup>

         </Col>

       </Row>

      </Grid>

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
    .then((apartments)=> {
      console.log(apartments);
      this.setState({apartments})
    }
    )
  }
}

export default UserApartment
