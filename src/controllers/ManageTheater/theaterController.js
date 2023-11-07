import initModels from "../../models/init-models.js";
import sequelize from "../../models/index.js";
import { successCode, failCode, errorCode } from "../../config/response.js";
import Movies from "../../models/Movies.js";
import Theater from "../../models/Theater.js";
// import Theater_complex from "../../models/Theater_complex.js";
// import Theater_System from "../../models/Theater_System.js";

let models = initModels(sequelize);

const getInfoTheaterSystem = async(req, res) => {
    try {
        let { id } = req.params;
        let theater_system = await models.Theater_System.findAll();
        if (theater_system) {
            successCode(res, theater_system, "get System Theater successful");
        } else failCode(res, "Get data not successful");
    } catch (error) {
        errorCode(res, "error in the server");
    }
}

const getInfoTheaterComplex = async(req, res) => {
    try {
        let { id } = req.params;

        let theater_complex = await models.Theater_complex.findAll({
            where: { system_id: id}
        })
        successCode(res, theater_complex, "get data successful");
    } catch (error) {
        errorCode(res, "error in server");
    }
}

const getShowtimeTheaterSystem = async(req, res) => {
    try {
        let { theater_id } = req.params;
        let showtime_theater_system = await models.Showtimes.findAll({
            include: [
                {
                    model: Theater,
                    as: "theater",        
                    required: false,
                },
                {
                    model: Movies,
                    as: "movie",
                    required: false
                }
            ],
            where: { theater_id }
        });

        if (showtime_theater_system) {
            // res.send(showtime_theater_system.content);
            // console.log(showtime_theater_system);
            successCode(res, showtime_theater_system, "get data successful");
        }
    } catch (error) {
        errorCode(res, "error in sever")
    }
}

const getShowtime = async(req, res) => {
    try {
        let {movie_id} = req.params;
        let infoMovie = await models.Movies.findAll({
            where: {movie_id}
        })
        successCode(res, infoMovie, "get data success");
    } catch (error) {
        errorCode(res, "error in server");
    }
}

export {
    getInfoTheaterComplex,
    getInfoTheaterSystem,
    getShowtime, 
    getShowtimeTheaterSystem
}

