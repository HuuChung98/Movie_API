import express from "express";
import { authenticateToken } from "../../config/jwt.js";

import {
    getBanner,
    getListMovie,
    paginationMovie,
    getListMovieByDate,
    uploadImage,
    updateMovie,
    manageMovie,
    deleteMovie,
    getInfoMovie
} from "../../controllers/ManageMovie/movieController.js"

const movieRouter = express.Router();

movieRouter.get(
    "/banner", getBanner
)

movieRouter.get(
    "/listMovie", getListMovie
)

movieRouter.get(
    "/paginationMovies/:page/:sizePage", paginationMovie
)

movieRouter.get(
    "/movieByDate", getListMovieByDate
)


export default movieRouter