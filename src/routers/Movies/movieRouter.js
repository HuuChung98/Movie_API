import express from "express";
import fs from "fs";
import { authenticateToken } from "../../config/jwt.js";


import {
    getBanner,
    getListMovie,
    paginationMovie,
    getListMovieByDate,
    // uploadImage,
    addMovies,
    updateMovie,
    manageMovie,
    deleteMovie,
    getInfoMovie
} from "../../controllers/ManageMovie/movieController.js"

import upload from "../../config/uploadFile.js";

const movieRouter = express.Router();

movieRouter.get(
    "/banner", getBanner
);

movieRouter.get(
    "/listMovie", getListMovie
);

movieRouter.get(
    "/paginationMovies/:page/:sizePage", paginationMovie
);

movieRouter.get(
    "/movieByDate", getListMovieByDate
);

movieRouter.post("/uploadImages", upload.array('files', 3), (req, res) => {
    try {
        const files = req.files;

        if (files) {
            res.send(files);
        }
        else {
            throw 'error';
        }

    } catch (error) {
        res.send("Error BE")
    }
});

movieRouter.post(
    "/addMovie", addMovies
);

movieRouter.post(
    "/updateMovie/:movie_id", updateMovie
);

movieRouter.delete(
    "/deleteMovie/:movie_id", deleteMovie
);

movieRouter.get(
    "/informationMovie/:movie_id", getInfoMovie
);

// movieRouter.post(
//     "/uploadImage", 
//     uploadFile.single("file"), (req, res) => {

//     let file = req.file;
    
//     fs.readFile(process.cwd() + "/public/imgs/" + file.filename, (err, data) => {
//       // let newName = "data:" + file.mimetype + ";base64" + Buffer.from(data).toLocaleString("base64");
//       let newName = `data:${file.mimetype};base64${Buffer.from(
//         data
//       ).toLocaleString("base64")}`;
//       res.send(newName);
//     });
//     }
// );

export default movieRouter