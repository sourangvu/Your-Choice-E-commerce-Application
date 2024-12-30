const { Seller } = require("../Models/sellerModel")
const bcrypt = require('bcrypt');
const { generateToken } = require("../utils/token");
const { cloudinaryInstance } = require("../config/cloudinaryConfig")




const register = async (req, res)=>{
    try {
        const {name, email, mobile, password } = req.body
        
        // Check if all required fields are provided
        if (!name || !email || !mobile || !password){

           return res.status(400).json({ error : "All fields are required" })
        }
        
        // Check if file is missing
        if (!req.file) {
            
            return res.status(400).json({ error: "File is required" });
        }

        //Upload the file to Cloudinary
        const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path);
        console.log("upload result=====", uploadResult)

        // Check if the user already exists
        const userAlreadyExist = await Seller.findOne({ email })

        if (userAlreadyExist){
            return res.status(400).json({error:"Seller Already Exist"})
        }
        
        // Hash the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
       
        // Create a new user object
        const  newUser = new Seller({
            name, email, password:hashedPassword, mobile
        })

        // Save the new user to the database
        {const newUser = new Seller ({image : uploadResult.url, name, email, mobile, password})}

        const savedUser = await newUser.save()
        
        // Respond with success message and user data
        res.status(200).json({message : "Seller Created Successfully", data: savedUser })
        
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({error:error.message || "Internal Server Error"})

    }
}



const login = async (req, res) => { 
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const user = await Seller.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "Seller does not exist" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log(passwordMatch, "passwordMatch");

        if (!passwordMatch) {
            return res.status(400).json({ error: "Incorrect password" });
        }

        
        if (user.role !== 'seller') {
            return res.status(403).json({ error: "Access denied. Only sellers can log in here." });
        }

        const token = generateToken(user, "seller");
        console.log(token, "=======token");

        res.cookie("token", token);
        res.status(200).json({ message: "Login successfull", data: user });
        
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "Internal Server Error" });
    }
};


const sellerProfile = async (req, res ) => {
    try {
       const userId = req.user.id;
       
       const userData = await Seller.findById(userId) 

       res.status(200).json({message:"Seller profile fetched", data: userData })
    } catch (error) {
      res.status(error.status || 500).json({error:error.message || "Internal Server Error"})
    }
}


const sellerLogout = async (req, res) => {

    try {
      res.clearCookie("token");
  
      res.status(200).json({ message: "Seller logout success" });
    } catch (error) {

        res.status(error.status || 500).json({error:error.message || "Internal Server Error"})

    }
  };


module.exports = { register, login, sellerProfile, sellerLogout }