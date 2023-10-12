import initModels from "../../models/init-models.js"
import sequelize from "../../models/index.js";

let models = initModels(sequelize);

const getDestination = async (req, res) => {
    try {
        let list_destination = await models.DESTINATIONS.findAll({
            include: ["HOTELs"]
        });
        res.send(list_destination)
    } catch (error) {
        console.log("loi BE");
    }
}

export {
    getDestination
};