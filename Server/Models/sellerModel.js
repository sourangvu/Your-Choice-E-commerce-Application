const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
    maxLength: 30,
  },
  role:{
    type:String,
    enum:["seller", "admin"],
    default: 'seller'
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  profilePic: {
    type: String,
    default:
      "https://w7.pngwing.com/pngs/981/645/png-transparent-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-symbol-thumbnail.png",
  },
},{Timestamps : true });



const Seller = mongoose.model("Seller",  sellerSchema)
module.exports = { Seller }