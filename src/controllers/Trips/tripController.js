import initModels from "../../models/init-models.js";
import sequelize from "../../models/index.js";
import { successCode, failCode, errorCode } from "../../config/response.js";

let models = initModels(sequelize);

// Get all trips
const getTrips = async (req, res) => {
    try {
        let trips = await models.TRIPS.findAll();
        successCode(res, trips, "successful");
    } catch (error) {
        error(res, "error");
    }
}

// Add trips with new start date and end day by on Traveler
const addNewTrip = async (req, res) => {
    try {
        console.log(req.body);
        let { user_id, trip_name, start_date, end_date, totol_cost} = req.body;
            
        let info_newTrip =  {
            user_id,
            trip_name,
            start_date,
            end_date,
            totol_cost
        };
        await models.TRIPS.create(info_newTrip);
        res.send("Thanh cong")
    } catch (error) {
        return "loi BE"
    }
}

export {
    getTrips,
    addNewTrip
}