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
        successCode(res, type_of_users.type_of_user, "Get type of user successful");
    } catch (error) {
        errorCode(res, "error server");
    }
}

// API pagination for user
const paginationUser = async (req, res) => {
    try {
        let { page, pageSize } = req.params;
        let index = (page - 1) * pageSize;

        let data = await models.Users.findAll({
            offset: index,
            limit: Number(pageSize)
       })

       successCode(res, data, "Pagination user successful");
    } catch (error) {
        errorCode(res, "error");
    }
}

// Find the user
const findUser = async (req, res) => {
    try {
        let { nameUser } = req.params;
        let resultFind = await models.Users.findOne({
            where: {full_name: nameUser}
        });
        if (resultFind) {
            successCode(res, resultFind, "Find the result successful");
        } else {
            failCode(res, resultFind, "The user not available");
        }
    } catch (error) {
        errorCode(res, "Fail in progress");
    }
}

// Get information of user: belong admin user
const getInfoOfUser = async (req, res) => {
    try {
        let { phone_number } = req.params;
        let inFor_user = await models.Users.findOne({
            where: { phone_number }
        })
        if (inFor_user) {
            successCode(res, inFor_user, "Information user");
        } else {
            failCode(res, inFor_user, "Not successful");
        }
    } catch (error) {
        errorCode(res, "Error in get Information");
    }
}

// Add user
const addUser = async (req, res) => {
    try {
        let {full_name, email, phone_number, password, type_of_user} = req.body;
        let updateUser = {
            full_name, 
            email,
            phone_number, 
            password: String(Math.floor(1000 + Math.random() * 9000)),
            type_of_user
        }
        let add = await models.Users.create(updateUser);

        if (add) {
            successCode(res, updateUser, "Add user successful")
        } else {
            failCode(res, updateUser, "Add user not successful");
        }
    } catch (error) {
        errorCode(res, "Error in progress add user");
    }
}

// Update user information: admin or customer
const updateUser = async (req, res) => {
    try {
        let { user_id } = req.params;
        let { full_name, email, phone_number, password, type_of_user } = req.body;
        let updateInfo = {
            full_name, 
            email,
            phone_number, 
            password,
            type_of_user
        }
        let update = await models.Users.update(updateInfo, { 
            where: {user_id} });

        if (update) {
            successCode(res, updateInfo, "Update successful")
        } else {
            failCode(res, updateInfo, "Update user not successful");
        }
    } catch (error) {
        errorCode(res, "Error in progress update user");
    }
}

// Delete user: admin role
const deleteUser = async (req, res) => {
    try {
        let { user_id } = req.params;
        let del_user = await models.Users.destroy({ where: { user_id }});

        if (del_user) {
            successCode(res, "Delete user successful");
        } else {
            failCode(res, "Delete fail");
        }

    } catch (error) {
        errorCode(res, "Error in process in BE");
    }
}

export {
    getAllUser,
    getTypeOfUser, 
    paginationUser,
    findUser, 
    getInfoOfUser,
    addUser,
    updateUser,
    deleteUser
}