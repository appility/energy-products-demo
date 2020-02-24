import React, { Component } from "react"
import { MemoryRouter as Router } from "react-router"
import { Link as RouterLink } from "react-router-dom"
import { Helmet } from "react-helmet"
import axios from "axios"
import { withRouter } from "react-router-dom"
import { sortProductsByCost } from "./../utils/Core"
import ProductStore from "./../stores/Products"
import Layout from "./../layouts/Base"
import ProductTable from "./../components/ProductTable"
import Typography from "@material-ui/core/Typography"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Link from "@material-ui/core/Link"

const PRODUCT_API_ENDPOINT = "http://localhost:3000/products?status=live"

const ERROR_MESSAGE = "Something went wrong, please try again later"

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
    this.viewProduct = this.viewProduct.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
      ProductStore.save(this.state.products)
    }
  }

  componentDidMount() {
    let {
      match: { params }
    } = this.props
    this.total_gas_consumption = params.total_gas_consumption
    let products = ProductStore.get()
    if (!products) {
      axios
        .get(PRODUCT_API_ENDPOINT)
        .then(response => {

          if (response.data) {
            let products = this.augmentProducts(response.data)
            this.setState({ products: products })
          }
        })
        .catch(error => {
          this.setState({ error: ERROR_MESSAGE })
        })
    } else {
      this.setState({ products: products })
    }
  }

  augmentProducts(products) {
    return products.map(product => ({
      ...product,
      annual_cost: returnAnnualCost(
        product.rate,
        product.dailystandingcharge,
        this.total_gas_consumption
      )
    }))
  }

  viewProduct(event, id) {
    this.props.history.push(`/product/${id}`)
  }

  renderError() {
    return (
      <div>
        <p>Something went wrong, please try again later</p>
      </div>
    )
  }

  renderResults({ error, products }) {
    let {
      match: { params }
    } = this.props
    if (error) {
      this.renderError()
    }
    return (
      <ProductTable
        products={products}
        total_gas_consumption={params.total_gas_consumption}
        viewProduct={this.viewProduct}
      />
    )
  }

  returnSorted(products) {
    return sortProductsByCost(products)
  }

  render() {
    let { error, products } = this.state
    let productsSorted = this.returnSorted(products)
    return (
      <Layout>
        <Helmet>
          <title>Products</title>
        </Helmet>
        <div style={{ margin: "1rem 0" }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link component={RouterLink} to="/">
              Home
            </Link>
            <Link component={RouterLink} to="/search">
              Search Again
            </Link>
            <Typography>Search results ({products.length})</Typography>
          </Breadcrumbs>
        </div>
        {this.renderResults({ error, productsSorted })}
      </Layout>
    )
  }
}

export default withRouter(Products)
