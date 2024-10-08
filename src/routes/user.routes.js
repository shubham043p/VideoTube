import {Router} from "express";
import {registerUser,loginUser,logoutUser,refreshAccessToken} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";



const router = Router();

router.route("/register").post(
    upload.fields([
     {
        name:"avatar",
        maxCount:1
     },
     {
        name:"coverImage",
        maxCount:1
     }
    ]),
    registerUser);

router.route("/login").post(loginUser)

//secured routes

router.route("/logout").post(verifyJWT,logoutUser)        // verifyJWT is middleware and usme next likha tha taaki bata ske ki mera kaam ho gaya hai ab next pr chle jao
router.route("/refresh-token").post(refreshAccessToken)


export default router;