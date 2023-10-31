import express from "express";
import cors from "cors";

import rootRouter from "./routers/rootRouter.js";


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("."));
app.listen(8080);
app.use("/", rootRouter)
