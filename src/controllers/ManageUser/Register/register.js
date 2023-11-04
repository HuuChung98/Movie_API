import initModels from "../../../models/init-models.js";
import sequelize from "../../../models/index.js";

import { successCode, failCode, errorCode } from "../../../config/response.js";

let models = initModels(sequelize);

const register = async(req, res) => {
    try {
        let { full_name, email, phone_number, password, typeUser } = req.body;
        const new_User = {
            full_name,
            email,
            phone_number,
            password,
            type_of_user: typeUser
        }
        const create_User = await models.Users.create(new_User);
        if (create_User) {
            successCode(res, "Created User");
        } else {
            failCode(res, "Not successful");
        }
        
    } catch (error) {
        errorCode(res, "Error in BE");
    }
}

export default register;