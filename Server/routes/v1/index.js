const  v1Router = require("express").Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const cartRouter = require('./cartRouter')
const reviewRouter = require("./reviewRouter")
const sellerRouter = require("./sellerRouter")
const adminRouter = require("./adminRouter")





v1Router.use("/user", userRouter)
v1Router.use("/product", productRouter)
v1Router.use("/cart", cartRouter)
v1Router.use("/review", reviewRouter)
v1Router.use("/seller", sellerRouter)
v1Router.use("/admin", adminRouter)

module.exports = v1Router