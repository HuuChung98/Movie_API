import express from "express";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import rootRouter from "./routers/rootRouter.js";


const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("."));
app.listen(8080);
app.use("/", rootRouter)


const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: "Movie API",
        version: '1.0.0'
    }
};

const options = {
    swaggerDefinition,
    apis: ["src/swagger/index.js"],
}

const swaggerSpec = swaggerJSDoc(options);

app.use('/movie', swaggerUi.serve, swaggerUi.setup(swaggerSpec));