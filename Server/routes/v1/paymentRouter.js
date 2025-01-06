const { createPayment } = require("../../controllers/paymentController")

const userAuth = require("../../middlewares/userAuth")

const paymentRouter = require("express").Router()



paymentRouter.post("/create-checkout-session",userAuth, createPayment)
paymentRouter.get("/session-status")


module.exports = paymentRouter