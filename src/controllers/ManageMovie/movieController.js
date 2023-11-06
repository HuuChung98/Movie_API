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

const uploadImage = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const updateMovie = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const manageMovie = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const deleteMovie = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const getInfoMovie = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

export {
    getBanner,
    getListMovie,
    paginationMovie,
    getListMovieByDate,
    uploadImage,
    updateMovie,
    manageMovie,
    deleteMovie,
    getInfoMovie
}