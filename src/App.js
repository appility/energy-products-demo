import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ErrorBoundary from './utils/ErrorBoundary'
import Global from './styles/global'
import Home from './controllers/Search'
import Search from './controllers/Search'
import Products from './controllers/Products'
import Product from './controllers/Product'
import Typography from '@material-ui/core/Typography'

class App extends Component {
  render() {
    return (
      <Router>
        <Global />
        <div>
          <div style={{ textAlign: 'center', margin: '1rem 1rem 1rem 1rem' }}>
            <Typography variant="h2" component="h1">
              Energy Products
            </Typography>
          </div>
          <ErrorBoundary>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search" component={Search} />
              <Route
                path="/products/:total_gas_consumption"
                component={Products}
              />
              <Route path="/product/:id" component={Product} />
            </Switch>
          </ErrorBoundary>
        </div>
      </Router>
    )
  }
}

export default App
