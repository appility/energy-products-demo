import React, { Component } from 'react'
import { isNumber } from './../utils/Core'
import Form from './../components/Form'
import { TextField } from './../components/TextField/'
import { Button } from './../components/Button/'

export default class SearchForm extends Component {

  constructor(props) {
    super(props)
  }
  
  handleChange = event => {
  	const {name, value} = event.target
  	this.setState({
  	 [name]: value
  	})
  }

  handleSubmit = event => {
  	event.preventDefault()
  	const {total_gas_consumption} = this.state
  	if ( isNumber(total_gas_consumption) ) {
  	   this.props.onSubmit(this.state)
  	}
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div style={{margin: '1rem 0rem'}}>
          <TextField name={'total_gas_consumption'} type={'number'} label={'Enter your consumption'} onChange={this.handleChange} />
         </div>
        <div style={{margin: '1rem 0rem'}}>
          <Button type={'submit'} value={'Search Products'} />
        </div>
      </Form>
    )
  }
}
