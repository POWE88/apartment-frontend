import React, { Component } from 'react'
import { Panel, Button } from 'react-bootstrap'
import { getApartment } from '../api'

class ShowApartment extends Component {
  constructor(props){
    super(props)

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
               City: {this.state.apartment.city}
              <br/>
              State: {this.state.apartment.state}
            </Panel.Body>
          </Panel>
          <Button type="submit" className="Panel" onSubmit="">
            Edit Grumps
          </Button>
          <br/>
          <Button type="submit" className="Panel" onSubmit="">
            Goodbye Grumps
          </Button>
        </div>
      )
    }else {
      return(
        <div>
        Loading...
        Loading...
        Loading...
        Loading...
        Loading...
        v
        Loading...
        Loading...
        Loading...
        Loading...
        Loading...
        v
        v
        Loading...
        v
        Loading...
        Loading...
        Loading...
        v
        v
        v
        v
        v
        vLoading...
        Loading...
        Loading...
        Loading...
        v
        vLoading...
        </div>
      )
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id
    console.log(id)
    getApartment(id)
    .then((apartment)=> {
      console.log(`componentdidmount ${apartment}`);
      this.setState({apartment})
    }
  )
  }
}

export default ShowApartment
