import initModels from "../../models/init-models.js";
import sequelize from "../../models/index.js";

let models = initModels(sequelize);

const getHotels = async (req, res) => {
    try {
        let list_hotels = await models.HOTELS.findAll({
            include: "BOOKINGs"
        });
        res.send(list_hotels);
    } catch (error) {
        console.log("loi BE");
    }
}

export {
    getHotels,
}