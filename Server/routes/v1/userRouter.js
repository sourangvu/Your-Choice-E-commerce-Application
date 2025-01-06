const { register, login, userProfile, userLogout, checkUser, } = require('../../controllers/userController')
const userAuth = require('../../middlewares/userAuth')
const { upload } = require("../../middlewares/multer")


const userRouter = require('express').Router()


userRouter.post("/signup", upload.single("profilePic"), register)
userRouter.post("/login", login)
userRouter.get("/profile", userAuth, userProfile )
userRouter.post("/logout", userAuth, userLogout )
userRouter.get("/check-user", userAuth, checkUser);



module.exports = userRouter