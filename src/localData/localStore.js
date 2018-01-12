const STORAGE_KEY = 'my-products'
let cartStorage = {
  fetch: function () {
    var products = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    products.forEach(function (todo, index) {
      todo.id = index
    })
    cartStorage.uid = products.length
    return products
  },
  save: function (products) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
  }
}

export default cartStorage
