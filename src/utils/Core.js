export function isNumber(num) {
  if (num === null || (typeof num === 'string' && num.length === 0)) {
    return false
  }
  return !isNaN(num)
}

export function returnAnnualCost(
  rate,
  dailyStandingCharge,
  totalGasConsumption
) {
  return totalGasConsumption * rate + dailyStandingCharge * 365
}

export function formatPrice(price) {
  return `&#163; ${price.toFixed(2)}`
}
