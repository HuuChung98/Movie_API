import express from "express";


const rootRouter = express.Router();

rootRouter.use("/user", userRouter)

export default rootRouter;