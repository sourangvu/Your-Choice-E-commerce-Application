const mongoose = require("mongoose");


const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    products: [{
        productId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true },
        quantity: { 
        type: Number,
        required: true }
      }],
        
         status: { type: String,
         enum: ["pending", "shipped", "delivered"], 
         default: "pending" },
         totalPrice: {
         type: Number,
         required: true },
        orderDate:{
            type:Date,
            default:Date.now,
        },

});

const Order = mongoose.model("Order", orderSchema)
module.exports = { Order }