import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { formatPrice, returnAnnualCost } from './../utils/Core'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: 960
  }
})

export default function SimpleTable(props) {
  const classes = useStyles()
  if (!props.products) return null
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Product Table">
        <TableHead>
          <TableRow>
            <TableCell>Supplier</TableCell>
            <TableCell align="right">Annual Cost</TableCell>
            <TableCell align="right">Contract Length</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.products.map(product => (
            <TableRow
              key={product.id}
              onClick={event => {
                props.viewProduct(event, product.id)
              }}
              style={{ cursor: 'pointer' }}
            >
              <TableCell component="th" scope="row">
                {product.supplier}
              </TableCell>
              <TableCell align="right">
                <span
                  dangerouslySetInnerHTML={{
                    __html: formatPrice(product.annual_cost)
                  }}
                ></span>
              </TableCell>
              <TableCell align="right">
                {product.contractlength} months
              </TableCell>
              <TableCell align="right">
                <Button
                  size="small"
                  color="primary"
                  onClick={props.backToProducts}
                >
                  More...
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
