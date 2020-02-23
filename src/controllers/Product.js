import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import ProductStore from './../stores/Products'
import Layout from './../layouts/Base'
import ProductCard from './../components/ProductCard'

const PRODUCT_API_ENDPOINT = 'http://localhost:3000/products'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {}
    }
    this.backToProducts = this.backToProducts.bind(this)
  }

  getProduct(productId) {
    let product = ProductStore.getById(productId)
    if (!product) {
      axios.get(`${PRODUCT_API_ENDPOINT}/${productId}`).then(response => {
        if (response.data) this.setState({ product: response.data })
      })
    } else {
      this.setState({ product: product })
    }
  }

  componentDidMount() {
    let {
      match: { params }
    } = this.props
    this.getProduct(params.id)
  }

  backToProducts() {
    this.props.history.goBack()
  }

  render() {
    let { product } = this.state
    return (
      <Layout>
        <Helmet>
          <title>Product</title>
        </Helmet>
        <ProductCard {...product} backToProducts={this.backToProducts} />
      </Layout>
    )
  }
}

export default withRouter(Product)
