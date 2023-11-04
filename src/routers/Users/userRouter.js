import express from "express";
import { authenticateToken } from "../../config/jwt.js";

import { 
    getAllUser,
    getTypeOfUser,
} from "../../controllers/ManageUser/userController.js";

import login from "../../controllers/ManageUser/Login/login.js";
import register from "../../controllers/ManageUser/Register/register.js";
const userRouter = express.Router();

userRouter.get(
    "/all-users/", authenticateToken, getAllUser
)

userRouter.get(
    "/type-of-users/:user_id", getTypeOfUser
)

userRouter.post(
    "/login", login
)

userRouter.post(
    "/signup", register
)
export default userRouter