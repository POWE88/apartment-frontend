import React, { Component } from 'react'
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom';
import { editApartment, getApartment } from '../api/index'

class EditApartment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newApartmentSuccess: false,

      form: undefined
    }
  }

    handleChange(e) {
      let { form } = this.state
      form[e.target.name] = e.target.value
      console.log(form);
      this.setState({
        form: form
      })
    }

    handleEditApartment(e){
      let { form } = this.state
      e.preventDefault()
      editApartment(form)
      .then(json => {
        console.log(json)
        this.setState({newApartmentSuccess: true})
      })
      .catch(err => {
        console.log(err)
      })
    }


    render() {
      if(this.state.form != undefined){
        return (
          <div className="newApartment">
      <Form horizontal  onSubmit={this.handleEditApartment.bind(this)} >
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2} id="street">
            Street
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Street" name="street" onChange={this.handleChange.bind(this)} value={this.state.form.street} required />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail" >
          <Col componentClass={ControlLabel} sm={2}  id="city">
            City
          </Col>
          <Col sm={10}>
            <FormControl type="integer" placeholder="City" name="city" onChange={this.handleChange.bind(this)} value={this.state.form.city} required/>
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}  id="zipcode">
            Zipcode
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Zipcode" name="zipcode" onChange={this.handleChange.bind(this)} value={this.state.form.zipcode}required />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}  id="state">
            State
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="State" name="state" onChange={this.handleChange.bind(this)} value={this.state.form.state}required />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}  id="country">
            Country
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Country" name="country" onChange={this.handleChange.bind(this)} value={this.state.form.country}required />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}  id="managername">
            Manager's Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Manager's Name" name="managername" onChange={this.handleChange.bind(this)} value={this.state.form.managername}required />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}  id="managerphone">
            Manager's Phone #
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Manager's Phone #" name="managerphone" onChange={this.handleChange.bind(this)} value={this.state.form.managerphone}required />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}  id="managerhours">
            Manager's Hours
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Manager's Hours" name="managerhours" onChange={this.handleChange.bind(this)} value={this.state.form.managerhours}required />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" id="submit">
            Submit
            </Button>
          </Col>
        </FormGroup>
        </Form>
        {this.props.success && <Redirect to="/apartments"/>}
    </div>
        )
      }else{
        return(
          <div> loading... </div>
        )
      }
    }

    componentDidMount(){
      const id = this.props.match.params.id
      console.log(id)
      getApartment(id)
      .then((form)=> {
        console.log(`componentdidmount ${form}`);
        this.setState({form})
      }
    )
    }


}

export default EditApartment
