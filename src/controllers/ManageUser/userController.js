import initModels from "../../models/init-models.js";
import sequelize from "../../models/index.js"
import { successCode, failCode, errorCode } from "../../config/response.js";

let models = initModels(sequelize);

const getAllUser = async (req, res) => {
    try {
        let users = await models.Users.findAll();
        successCode(res, users, "Get data success");

    } catch (error) {
        errorCode(res, "error server");        
    }
}

const getTypeOfUser = async(req, res) => {
    try {
        let { user_id } = req.params
        let type_of_users = await models.Users.findOne({
            where: {user_id}
        })
        successCode(res, type_of_users, "get data success");
    } catch (error) {
        errorCode(res, "error server");
    }
}

export {
    getAllUser,
    getTypeOfUser
}