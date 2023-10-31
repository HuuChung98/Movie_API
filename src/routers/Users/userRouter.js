import express from "express";

import { 
    getAllUser,
    getTypeOfUser,
} from "../../controllers/ManageUser/userController.js";

const userRouter = express.Router();

userRouter.get(
    "/all-users", getAllUser
)

userRouter.get(
    "/type-of-users/:user_id", getTypeOfUser
)

export default userRouter