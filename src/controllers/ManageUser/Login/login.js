import initModels from "../../../models/init-models.js";
import sequelize from "../../../models/index.js";
import { generateAccessToken } from "../../../config/jwt.js";

import { successCode, failCode, errorCode } from "../../../config/response.js";

let models = initModels(sequelize);

const login = async(req, res) => {
    try {
        let { email, pass_word } = req.body;
        let authenticateUser = await models.Users.findOne({
            where: {
                email,
            }
        })
        if (authenticateUser) {
            // Check password
            if (pass_word == authenticateUser.password) {
                let token = generateAccessToken(authenticateUser)
                successCode(res, token, "Log in success!");
            } else {
                failCode(res, "Password is not correct");
            }
          
        } else {
            failCode (res, "Log in fail!");
        }
        
    } catch (error) {
        errorCode(res, "Something broke!");
    }
}

export default login;