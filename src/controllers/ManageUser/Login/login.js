import initModels from "../../../models/init-models.js";
import sequelize from "../../../models/index.js";

import { successCode, failCode, errorCode } from "../../config/response.js";

let models = initModels(sequelize);

const login = async(req, res) => {}