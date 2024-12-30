const { Product } = require("../Models/productModel")
const { Order } = require("../Models/orderModel")
const { User } = require("../Models/userModel")


const { cloudinaryInstance } = require("../config/cloudinaryConfig")



//Create product
    const createProduct = async (req, res ) =>{
    try {

        const {image,title,description,price} = req.body;
        console.log('req.file=====',req.file)

        if(!title || !description || !price){
            return res.status(400).json({message:" All properties required"});
        }

        const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path);
        console.log("upload result=====", uploadResult);

          const newproduct = new Product({image : uploadResult.url,title,description,price})
          await newproduct.save()
    
       res.status(200).json({message:"New product created successfully", data: newproduct})
    
    
    } catch (error) {
      res.status(error.status || 500).json({error:error.message || "Internal Server Error"})
    }
}

// Update a product
    const updateProduct = async (req, res) => {
    const { productId } = req.params;
    try {
      const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });

      if (!updatedProduct) return res.status(404).json({ message: "Product not found" });

      res.status(200).json({message:"Product updated successfully", data: updatedProduct})

    } catch (error) {
        res.status(error.status || 500).json({error:error.message || "Internal Server Error"})
    }
  };


// Delete a product
    const deleteProduct = async (req, res) => {
    const { productId } = req.params;
    try {
      await Product.findByIdAndDelete(productId);
      res.status(200).json({ message: "Product deleted successfully" });

    } catch (error) {
        res.status(error.status || 500).json({error:error.message || "Internal Server Error"})
    }
  };

  // Get all orders
    const getOrders = async (req, res) => {
    try {
      const orders = await Order.find().populate("userId").populate("products.productId");

      res.status(200).json({ message: "All orders fetched", data: orders });

    } catch (error) {
        res.status(error.status || 500).json({error:error.message || "Internal Server Error"})
    }
  };
  
  // Get all users
    const getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({ message: "All users fetched", data: users });

    } catch (error) {
        res.status(error.status || 500).json({error:error.message || "Internal Server Error"})
    }
  };


  module.exports = {createProduct, updateProduct, deleteProduct, getOrders, getUsers}