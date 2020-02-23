import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Layout from './../layouts/Base'
import SearchForm from './../components/SearchForm'

class Search extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(data) {
    event.preventDefault()
    let { total_gas_consumption } = data
    this.props.history.push(`/products/${total_gas_consumption}`)
  }

  render() {
    return (
      <Layout>
        <SearchForm onSubmit={this.handleSubmit} />
      </Layout>
    )
  }
}

export default withRouter(Search)
