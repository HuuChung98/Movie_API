import express from "express";
import userRouter from "./Users/userRouter.js";


const rootRouter = express.Router();

rootRouter.use("/users", userRouter)

export default rootRouter;

// /**
//  * @swagger
//  * /users/all-users:
//  *   get:
//  *     summary: Retrieve a list of JSONPlaceholder users.
//  *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
//  *     responses:
//  *       200:
//  *         description: A list of users.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 data:
//  *                   type: array
//  */