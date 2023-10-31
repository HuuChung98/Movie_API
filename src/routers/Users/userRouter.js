import express from "express";

import { 
    getTypeOfUser ,
} from "../../controllers/ManageUser/userController.js";

const userRouter = express.Router();

userRouter.get(
    "typeofUser", getTypeOfUser
)

export default userRouter