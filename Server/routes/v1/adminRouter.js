const adminAuth = require('../../middlewares/adminAuth')
const { createProduct } = require('../../controllers/productController')
const { updateProduct, deleteProduct, getOrders, getUsers } = require('../../controllers/adminController')


const adminRouter = require('express').Router()


adminRouter.post('/create-product',adminAuth, createProduct )
adminRouter.put('/product/:productId',adminAuth, updateProduct)
adminRouter.delete('/product/:productId', adminAuth, deleteProduct)
adminRouter.get('/orders',adminAuth, getOrders)
adminRouter.get('/users',adminAuth, getUsers)

module.exports = adminRouter