import express from "express";
import userRouter from "./Users/userRouter.js";
import movieRouter from "./Movies/movieRouter.js";


const rootRouter = express.Router();

rootRouter.use("/users", userRouter);

rootRouter.use("/movies", movieRouter);

export default rootRouter;
