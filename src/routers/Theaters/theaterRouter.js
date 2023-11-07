import express from 'express';

import {
    getInfoTheaterComplex,
    getInfoTheaterSystem,
    getShowtime, 
    getShowtimeTheaterSystem
} from "../../controllers/ManageTheater/theaterController.js";


const theaterRouter = express.Router();

theaterRouter.get(
    "/info-theater-complex/:system_id", getInfoTheaterComplex
);

theaterRouter.get(
    "/info-theater-system/:system_id", getInfoTheaterSystem
);
theaterRouter.get(
    "/showtime/:movie_id", getShowtime
);
theaterRouter.get(
    "/showtime-theater-system/:theater_id", getShowtimeTheaterSystem
)

export default theaterRouter;