import express from "express";
import userRouter from "./Users/userRouter.js";


const rootRouter = express.Router();

rootRouter.use("/user", userRouter)

export default rootRouter;