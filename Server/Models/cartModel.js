const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    products:[{
        productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
        },
        price:{
            type:Number,
            required:true,

        },
        quantity: {
            type: Number,
            required: true,
            default: 1,
        },
    }],
    totalPrice:{
        type:Number,
        required:true,
        default:0,
    },

},{timestamps:true});


cartSchema.methods.calculateTotalPrice = function() {
    this.totalPrice = this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
}

const Cart = mongoose.model("Cart",  cartSchema);
module.exports = { Cart };
