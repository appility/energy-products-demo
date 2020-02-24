import sortBy from 'lodash/sortBy'

/**
 *
 * isNumber
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
 * returnAnnualCost
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
  return `&#163;${price.toFixed(2)}`
}

/**
 *
 * sortProductsByAnnualCost
 *
 */
export function sortProductsByCost(products) {
  return sortBy(products, 'annual_cost')
}
