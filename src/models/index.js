import { Sequelize } from "sequelize";
import config from "../config/config.js";

let sequelize = new Sequelize(
    config.database,
    config.user,
    config.pass, {
        host: config.host,
        dialect: config.dialect,
        port: config.port
    }
)

// yarn sequelize-auto -h localhost -d db_movie -u root -x 1234 -p 3306 --dialect mysql -o src/models -l esm

export default sequelize;