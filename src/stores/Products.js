let data = null

const Products = {
  save: function(products) {
    data = products
  },
  get: function(id) {
    return data ? data : null
  }, 
  getById: function(productId) {
    let id = parseInt(productId, 10)
    let result = data.find(function(element) {
      return element.id === id
    }) 
    return result ? result : null
  }
}

export default Products