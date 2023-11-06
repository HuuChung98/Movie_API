import express from "express";
import { authenticateToken } from "../../config/jwt.js";

import { 
    getAllUser,
    getTypeOfUser,
    paginationUser, 
    findUser,
    getInfoOfUser,
    addUser,
    updateUser,
    deleteUser
} from "../../controllers/ManageUser/userController.js";

import login from "../../controllers/ManageUser/Login/login.js";
import register from "../../controllers/ManageUser/Register/register.js";
const userRouter = express.Router();

userRouter.get(
    "/all-users", authenticateToken, getAllUser
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

userRouter.get(
    "/pagination/:page/:pageSize", paginationUser
)

userRouter.get(
    "/findUser/:nameUser", findUser
)

userRouter.get(
    "/getInfoUser/:phone_number", getInfoOfUser
)

userRouter.post(
    "/addUser", addUser
)

userRouter.put(
    "/updateUser/:user_id", updateUser
)

userRouter.delete(
    "/deleteUser/:user_id", deleteUser
)

export default userRouter