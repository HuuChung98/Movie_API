import initModels from "../../models/init-models.js";
import sequelize from "../../models/index.js";
import { successCode, failCode, errorCode } from "../../config/response.js";
import { Op } from "sequelize";

let models = initModels(sequelize);

const getBanner = async(req, res) => {
    try {
        let banner = await models.Banner.findAll();

        if (banner) {
            successCode(res, banner, "Get banner successful");
        } else {
            failCode(res, "Get banner not successful");
        }

    } catch (error) {
        errorCode(res, "Error in Server");
    }
}



const getListMovie = async (req, res) => {
    try {
        let listMovie = await models.Movies.findAll();
        if(listMovie) {
            successCode(res, listMovie, "Get list movies successful");
        } else {
            failCode(res, "Get list movie not success");
        }
    } catch (error) {
        errorCode(res, "error server");
    }
}

const paginationMovie = async (req, res) => {
    try {
        let { page, sizePage } = req.params;
        let index = (page - 1) * sizePage;

        const paginateMovie = await models.Movies.findAll({
            offset: index,
            limit: Number(sizePage)
        });

        successCode(res, paginateMovie, "pagination successful");
    } catch (error) {
        errorCode(res, "error server");
    }
}

// get at LichChieu table
const getListMovieByDate = async(req, res) => {
   
        let { nameMovie, size, pageSize, from_date, to_date } = req.body;
        // pagination movie
        const index = (size - 1) * pageSize;

        const listMovies = await models.Movies.findAll({
            offset: index,
            limit: Number(pageSize),
            where: {
                name: nameMovie,
                date_show: {[Op.between]: [from_date, to_date]}
            }
        })

        if (listMovies) {
            successCode(res, listMovies, "Get data successful");
        } else {
            failCode(res, "get data not successful");
        }

}

// const uploadImage = async (req, res) => {
    
//         let file = req.file;
        
//         if (file == undefined) {
//             failCode(res, "Please upload file");
//         }
//         await uploadFile(file);
// }

// Add movie
const addMovies = async (req, res) => {
    try {
        let { name, trailer, image, description, date_show, rate, hot, showing, incomming } = req.body;
        let newMovie = {
            name,
            trailer,
            image,
            description, 
            date_show, 
            rate,
            hot,
            showing,
            incomming
        };
        let success = await models.Movies.create(newMovie);
        if(success) {
            successCode(res, newMovie, "Add movie successful");
        }
        
    } catch (error) {
        errorCode(res, "Error in server");
    }
}

// Add information for movie
const updateMovie = async (req, res) => {
    try {
        let { movie_id } = req.params;
        let { name, trailer, image, description, date_show, rate, hot, showing, incomming } = req.body;

        let updMovie = {
            name,
            trailer,
            image,
            description, 
            date_show, 
            rate,
            hot,
            showing,
            incomming
        };

        let udMovie = await models.Movies.update(updMovie, {
            where: {movie_id}
        })
        if (udMovie) {
            successCode(res, "Update movie successful");
        } else errorCode(res, "Update movie not successful");
        
    } catch (error) {
        errorCode(res, "error in server");
    }
}

const manageMovie = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const deleteMovie = async (req, res) => {
    try {
        let { movie_id } = req.params;
        let remove = await models.Movies.destroy({
            where: {movie_id}
        });
        if (remove) {
            successCode(res, "Deleted movie");
        } else failCode(res, "Delele not successful");
    } catch (error) {
        errorCode(res, "error in server");
    }
}

const getInfoMovie = async (req, res) => {
    try {
        let { movie_id } = req.params;
        let infoMovie = await models.Movies.findOne({
            where: {movie_id}
        })
        if (infoMovie) {
            successCode(res, infoMovie, "Information for movie");
        } else failCode(res, "Information");
    } catch (error) {
        errorCode(res, "error in server");
    }
}

export {
    getBanner,
    getListMovie,
    paginationMovie,
    getListMovieByDate,
    // uploadImage,
    addMovies,
    updateMovie,
    manageMovie,
    deleteMovie,
    getInfoMovie,
}