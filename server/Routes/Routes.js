const route = require("express").Router()
const productController = require("../Controllers/ProductController")

route.post("/new-product" , productController.newProduct )
route.get("/products" , productController.allProducts )

module.exports = route ;