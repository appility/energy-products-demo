let data = null

const Products = {
  save: function(products) {
    data = products
  },
  get: function(id) {
    return data ? data : null
  }, 
  getById: function(productId) {
    if ( !data ) return null
    let id = parseInt(productId, 10)
    let result = data.find(function(element) {
      return element.id === id
    }) 
    return result ? result : null
  },
  clear: function(){
    data = null
  }
}

export default Products