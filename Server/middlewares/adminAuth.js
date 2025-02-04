const jwt = require('jsonwebtoken');


const adminAuth = (req, res ,next) =>{
    try {
        
        const{ token } = req.cookies;

        if(!token){
            return res.status(401).json({message:"Token not provided"});
        }
       
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded){
            return res.status(401).json({ message:"user not authorized"})
        }

        if (decoded.role !== "seller" || "user" ) {
            console.log();
            
            return res.status(401).json({ message:"User not authorized" })
        }


        req.user = decoded;
        

     next();
    } catch (error) {
        res.status(error.status || 500).json({error:error.message || "Internal Server Error"}) 
    }
}
module.exports = adminAuth