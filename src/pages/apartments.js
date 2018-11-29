import React, { Component } from 'react'
import { Grid, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getApartments } from '../api/index'

class Apartments extends Component {
    constructor(props){
      super(props)

      this.state = {
        apartments: []
      }
    }
    render() {
        return (
          <Grid>
           <Row>
             <Col xs={12}>
                 <ListGroup>
                 {console.log(this.props)}
                 {this.state.apartments.map((apartment, index) =>{
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

                   </ListGroupItem>
                 )
               })}
             </ListGroup>
           </Col>
         </Row>
        </Grid>
        )
    }

    componentDidMount(){
      getApartments()
      .then(APIapartments => {
        this.setState({
          apartments: APIapartments
        })
      })
    }
}

export default Apartments
