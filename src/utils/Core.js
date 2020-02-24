import sortBy from 'lodash/sortBy'
/**
 *
 * sortByCost
 *
 */
 export function isNumber(num) {
  if (num === null || (typeof num === 'string' && num.length === 0)) {
    return false
  }
  return !isNaN(num)
}

/**
 *
 * sortByCost
 *
 */
export function returnAnnualCost(
  rate,
  dailyStandingCharge,
  totalGasConsumption
) {
  return totalGasConsumption * rate + dailyStandingCharge * 365
}

/**
 *
 * formatPrice
 *
 */
export function formatPrice(price) {
  return `&#163; ${price.toFixed(2)}`
}

/**
 *
 * sortProductsByCost
 *
 */
export function sortProductsByCost(products) {
  return _.sortBy(products, ['annual_cost'])
}



