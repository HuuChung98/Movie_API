import express from "express";
import userRouter from "./Users/userRouter.js";
import movieRouter from "./Movies/movieRouter.js";
import theaterRouter from "./Theaters/theaterRouter.js";


const rootRouter = express.Router();

rootRouter.use("/users", userRouter);

rootRouter.use("/movies", movieRouter);

rootRouter.use("/theaters", theaterRouter);

export default rootRouter;
