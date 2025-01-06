const { getCart, addProductToCart, removeProductFromCart, clearCart, updateProductQuantity } = require('../../controllers/cartController')
const userAuth = require('../../middlewares/userAuth')

const cartRouter = require('express').Router()


cartRouter.get("/get-cart", userAuth, getCart)
cartRouter.post("/add-to-cart", userAuth, addProductToCart )
cartRouter.put("/update", userAuth, updateProductQuantity )
cartRouter.delete("/remove-from-cart", userAuth, removeProductFromCart  )
cartRouter.delete("/clear-cart", userAuth, clearCart  )



module.exports = cartRouter