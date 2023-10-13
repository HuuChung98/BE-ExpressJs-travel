import initModels from "../../models/init-models.js"
import sequelize from "../../models/index.js";
import { successCode, failCode, errorCode } from "../../config/response.js";

let models = initModels(sequelize);

const getDestination = async (req, res) => {
    try {
        let list_destination = await models.DESTINATIONS.findAll({
            include: ["HOTELs"]
        });
        // res.send(list_destination)
        // success 
        successCode(res, list_destination, "successful")
    } catch (error) {
        errorCode(res, "error")
    }
}

export {
    getDestination
};