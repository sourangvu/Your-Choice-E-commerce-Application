const {User} = require("../Models/userModel")
const bcrypt = require('bcrypt');
const { generateToken } = require("../utils/token");
const { cloudinaryInstance } = require("../config/cloudinaryConfig")



const register = async (req, res)=>{
    try {
        const {name, email, mobile, password } = req.body

        if (!name || !email || !mobile || !password){

           return res.status(400).json({ error : "All fields are required" })
        }

        const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path);
        console.log("upload result=====", uploadResult)

        const userAlreadyExist = await User.findOne({ email })

        if (userAlreadyExist){
            return res.status(400).json({error:"User Already Exist"})
        }
        
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
       
        
        const  newUser = new User({
            name, email, password:hashedPassword, mobile
        })

    
        {const newUser = new User ({image : uploadResult.url, name, email, mobile, password })}

        const savedUser = await newUser.save()
        
        res.status(200).json({message : "User Created Successfully", data: savedUser })
        
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({error:error.message || "Internal Server Error"})

    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        

        // Check if both fields are provided
        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Find the user by email
        const user = await User.findOne({ email });
        

        if (!user) {
            return res.status(400).json({ error: "User does not exist" });
        }

        // Compare the password with the stored hash
        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log(passwordMatch, "passwordMatch");

        if (!passwordMatch) {
            return res.status(400).json({ error: "Incorrect password" });
        }

        // Check if the user is active
        if (!user.isActive) {
            return res.status(400).json({ error: "User profile has been deactivated" });
        }

        // Generate a token for the user
        const token = generateToken(user, "user");
        console.log(token, "=======token");

        // Set the token as a cookie
        res.cookie("token", token);

        // Remove the password field from the user object before sending it
        const { password: userPassword, ...userWithoutPassword } = user._doc;
        
        // Respond with success message and user data without the password
        res.status(200).json({ message: "Login successful", data: userWithoutPassword });
        
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "Internal Server Error" });
    }
};


const userProfile = async (req, res ) =>{
    try {
       const userId = req.user.id;
       
       const userData = await User.findById(userId) 

       res.status(200).json({message:"User profile fetched", data: userData })
    } catch (error) {
      res.status(error.status || 500).json({error:error.message || "Internal Server Error"})
    }
}


const userLogout = async (req, res) => {

    try {
      res.clearCookie("token");
  
      res.status(200).json({ message: "User logout success" });
    } catch (error) {

        res.status(error.status || 500).json({error:error.message || "Internal Server Error"})

    }
  };

module.exports = { register, login, userProfile, userLogout}